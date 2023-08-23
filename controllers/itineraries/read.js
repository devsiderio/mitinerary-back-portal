import Itinerary from "../../models/Itinerary.js";

export default async (req, res) => {
  try {
    let allItineraries = await Itinerary.find();
    return res.status(200).json({
      success: true,
      message: "Itineraries found!",
      response: allItineraries,
    });
  } catch (error) {
    return res.status(400).json({
      succes: false,
      message: "Itineraries not found",
      response: null,
    });
  }
};
