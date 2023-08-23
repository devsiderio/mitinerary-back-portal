import Itinerary from "../../models/Itinerary.js";

export default async (req, res) => {
  try {
    let newItineray = await Itinerary.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Itinerary created!",
      response: newItineray._id,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Itinerary not created",
      response: null,
    });
  }
};
