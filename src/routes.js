const { Router } = require("express");
const routes = Router();

const DevController = require("./controllers/Dev");
const SearchController = require("./controllers/SearchController");

//Create dev by Github username, favorites technologies and coordinates
routes.post("/devs", DevController.store);

//List all devs
routes.get("/devs", DevController.index);

//Search dev by location and technologies
routes.get("/search", SearchController.index);

//Update dev by id
routes.put("/devs/:_id", DevController.update);

//D elete dev by id
routes.delete("/devs/:_id", DevController.destroy);

module.exports = routes;
