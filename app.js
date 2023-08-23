// IMPORTS
import "dotenv/config.js";
import __dirname from "./utils.js";
import express from "express";
import path from "path";
import logger from "morgan";
import indexRouter from "./routes/index.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";
import cors from "cors";

let app = express();

// VIEW ENGINE SETUP
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// MIDDLEWARES (funciones)
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// ROUTER
app.use("/api", indexRouter);

// catch 404 and forward to error handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

export default app;
