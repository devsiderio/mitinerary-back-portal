import { Router } from "express";
import create from "../controllers/itineraries/create.js";
import read from "../controllers/itineraries/read.js";
import update from "../controllers/itineraries/update.js";
import destroy from "../controllers/itineraries/destroy.js";

const itinerariesRouter = Router();

//CREATE
itinerariesRouter.post("/", create);

//READ
itinerariesRouter.get("/", read);

//UPDATE
itinerariesRouter.put("/:id", update);

//DESTROY
itinerariesRouter.delete("/:id", destroy);

export default itinerariesRouter;
