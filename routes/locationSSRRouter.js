// // router.js

const express = require("express");
const router = express.Router();
// controller functions
const locationSSR = require("../controllers/locationSSRController");
const verifyToken = require("../middlewares/requireAuthSSR")

// require auth for all routes
router.use(verifyToken)

// SSR
// End1: Route to render index.html with locations using EJS
router.get("/", locationSSR.renderLocations);
// End2: Define a route to render the addlocation.ejs view
router.get("/addlocation", locationSSR.renderForm);
// End3:Route to add  location using EJ
router.post("/addlocation", locationSSR.addLocation);
// Define a route to render the singlelocation.ejs view
router.get("/single-location/:id", locationSSR.renderLocation);
// Define a route to delete singlelocation
router.delete("/single-location/:id", locationSSR.deleteLocation);
// Define a route to update single location.ejs
router.put("/single-location/:id", locationSSR.updateLocation);
// Define location to update
router.get("/single-location/update/:id", locationSSR.renderUpdateLocation);

module.exports = router;