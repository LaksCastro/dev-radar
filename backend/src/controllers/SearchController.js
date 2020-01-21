const github_api = require("../services/github");
const Dev = require("../models/Dev");

const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    async index(req, res) {
        try {
            let { techs } = req.query;
            techs = techs.toLowerCase();
            const { longitude, latitude } = req.query;

            const techsArray = parseStringAsArray(techs);

            const devs = await Dev.find({
                techs: {
                    $in: techsArray
                },
                location: {
                    $near: {
                        $geometry: {
                            type: "Point",
                            coordinates: [longitude, latitude]
                        },
                        $maxDistance: 20000
                    }
                }
            });
            return res.json(devs);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
};
