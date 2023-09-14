import express from "express";
import usersRouter from "./users.js";
import citiesRouter from "./cities.js";
import itinerariesRouter from "./itineraries.js";
import activitiesRouter from "./activities.js";
import authRouter from "./auth.js";

let router = express.Router();

// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Index" });
// });

router.use("/users", usersRouter);
router.use("/cities", citiesRouter);
router.use("/itineraries", itinerariesRouter);
router.use("/activities", activitiesRouter);
router.use("/auth", authRouter);

export default router;
