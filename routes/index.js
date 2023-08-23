import express from "express";
import usersRouter from "./users.js";
import citiesRouter from "./cities.js";
import itinerariesRouter from "./itineraries.js";
import activitiesRouter from "./activities.js";

let router = express.Router();

// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Index" });
// });

router.use("/users", usersRouter);
router.use("/cities", citiesRouter);
router.use("/itineraries", itinerariesRouter);
router.use("/activities", activitiesRouter);

export default router;
