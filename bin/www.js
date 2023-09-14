// IMPORTS
import app from "../app.js";
import debug from "debug";
import http from "http";
import { connect } from "mongoose";

// PORT
let port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// START SERVING
let server = http.createServer(app);
let ready = () => {
  console.log("server ready on port " + port);
  //connect('link de conexion de mongo')
  connect(process.env.LINK_DB)
    .then(() => console.log("Database connected succesfully :)"))
    .catch((err) => console.log(err));
};
server.listen(port, ready);
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  let bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}
function onListening() {
  let addr = server.address();
  let bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
