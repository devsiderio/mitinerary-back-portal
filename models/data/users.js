import "dotenv/config.js";
import { connect } from "mongoose";
import User from "../User.js";

const users = [
  {
    name: "Ignacio",
    lastName: "Borraz",
    mail: "igna@mh.com",
    photo:
      "https://ui-avatars.com/api/?name=I+B&&background=random&&rounded=true&&bold=true&&format=svg",
    password: "Hola1234",
    country: "Argentina",
  },
  {
    name: "Cinthia",
    lastName: "Di Risio",
    mail: "cin@mh.com",
    photo:
      "https://ui-avatars.com/api/?name=C+D&&background=random&&rounded=true&&bold=true&&format=svg",
    password: "Hola1234",
    country: "Argentina",
  },
  {
    name: "Franco",
    lastName: "Sosa",
    mail: "fran@mh.com",
    photo:
      "https://ui-avatars.com/api/?name=F+S&&background=random&&rounded=true&&bold=true&&format=svg",
    password: "Hola1234",
    country: "Argentina",
  },
];

connect(process.env.LINK_DB)
  .then(() => {
    User.insertMany(users);
    console.log("done!");
  })
  .catch((err) => console.log(err));
