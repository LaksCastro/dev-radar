const github_api = require("../services/github");
const Dev = require("../models/Dev");
const { filterConnections, sendMessage } = require("../websocket");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    async store(req, res) {
        try {
            let { github_username } = req.body;
            github_username = github_username.toLowerCase();
            const { techs, longitude, latitude } = req.body;

            const devExists = await Dev.findOne({ github_username });
            if (devExists) return res.json(devExists);

            const response = await github_api.get(
                `https://api.github.com/users/${github_username}`
            );

            const { name = login, avatar_url, bio } = response.data;
            const techsArray = parseStringAsArray(techs);
            const location = {
                type: "Point",
                coordinates: [longitude, latitude]
            };
            const dev = await Dev.create({
                name: name ? name : github_username,
                github_username,
                bio,
                avatar_url,
                techs: techsArray,
                location
            });

            const sendSocketMessageTo = filterConnections(
                { latitude, longitude },
                techsArray
            );
            sendMessage(sendSocketMessageTo, "newdev", dev);

            return res.json(dev);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    async index(req, res) {
        try {
            const devs = await Dev.find();
            return res.json(devs);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    async update(req, res) {
        try {
            const { _id } = req.params;
            const {
                useGithubData = false,
                techs,
                longitude,
                latitude
            } = req.body;

            const currentDev = await Dev.findById(_id);

            let { name, bio, avatar_url } = req.body;

            if (
                useGithubData &&
                (name === undefined ||
                    bio === undefined ||
                    avatar_url === undefined)
            ) {
                const response = await github_api.get(
                    `/users/${currentDev.login}`
                );

                if (!name) name = response.data.name;
                if (!bio) bio = response.data.bio;
                if (!avatar_url) avatar_url = response.data.avatar_url;
            }

            const updatedDev = await Dev.findByIdAndUpdate(
                _id,
                {
                    name: name ? name : currentDev.name,
                    bio: bio ? bio : currentDev.bio,
                    avatar_url: avatar_url ? avatar_url : currentDev.avatar_url,
                    techs: techs ? parseStringAsArray(techs) : currentDev.techs,
                    location: {
                        type: "Point",
                        coordinates: [
                            longitude
                                ? longitude
                                : currentDev.location.coordinates[0],
                            latitude
                                ? latitude
                                : currentDev.location.coordinates[1]
                        ]
                    }
                },
                { new: true }
            );

            return res.json(updatedDev);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    async destroy(req, res) {
        try {
            const { _id } = req.params;

            await Dev.findByIdAndDelete(_id);

            return res.status(204).send();
        } catch (error) {
            return res.status(400).json(error);
        }
    }
};
