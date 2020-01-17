const { Router } = require("express");
const axios = require("axios");
const routes = Router();

const Dev = require("./models/Dev");

//Create Dev by Github Username and favorites Technologies
routes.post("/devs", async (req, res) => {
    try {
        const { github_username, techs } = req.body;
        const response = await axios.get(
            `https://api.github.com/users/${github_username}`
        );
        const { name = login, avatar_url, bio } = response.data;
        const techsArray = techs.split(",").map(tech => tech.trim());
        const dev = await Dev.create({
            name,
            github_username,
            bio,
            avatar_url,
            techs: techsArray
        });
        return res.json(dev);
    } catch (error) {
        console.log("deu ruim");
        console.log(error);
    }
});

module.exports = routes;
