import express from "express";

let router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with all users");
});

export default router;
