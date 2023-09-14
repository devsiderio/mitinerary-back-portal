import "dotenv/config.js";
import { connect } from "mongoose";
import User from "../User.js";

const users = [
  {
    name: "Ignacio",
    lastName: "Borraz",
    country: "Argentina",
    photo:
      "https://ui-avatars.com/api/?name=I+B&&background=random&&rounded=true&&bold=true&&format=svg",
    mail: "igna@mh.com",
    password: "$2b$10$kzhXCgDUEIvz4U.CSA0DeeR6co0k.2udiWxP6J6icZv780ortJIZO",
  },
  {
    name: "Cinthia",
    lastName: "Di Risio",
    country: "Argentina",
    photo:
      "https://ui-avatars.com/api/?name=C+D&&background=random&&rounded=true&&bold=true&&format=svg",

    mail: "cin@mh.com",
    password: "$2b$10$B/r9a1tE.OsnmM/i98ogOe9zTrYSGN9eyWY4810wsGqzP4aKK4xzi",
  },
  {
    name: "Franco",
    lastName: "Sosa",
    country: "Argentina",
    photo:
      "https://ui-avatars.com/api/?name=F+S&&background=random&&rounded=true&&bold=true&&format=svg",
    mail: "fran@mh.com",
    password: "$2b$10$BDNXr2Rxc3hKVIlhliImNe8/lP/hPk.kxbfOHwCf.LrlkXhCeMW2G",
  },
];

connect(process.env.LINK_DB)
  .then(() => {
    User.insertMany(users);
    console.log("done!");
  })
  .catch((err) => console.log(err));
