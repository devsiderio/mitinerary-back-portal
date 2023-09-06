import express from "express";
import create from "../controllers/users/create.js";
import read from "../controllers/users/read.js";
import readOne from "../controllers/users/readOne.js";
import update from "../controllers/users/update.js";
import destroy from "../controllers/users/destroy.js";

let router = express.Router();

//CREATE
router.post("/signup", create);

//READ
router.get("/", read);
router.get("/:user_id", readOne);

//UPDATE
router.put("/:u_id", update);

//DESTROY
router.delete("/:id", destroy);

export default router;
