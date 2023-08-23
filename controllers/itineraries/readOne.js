import Itinerary from "../../models/Itinerary.js";

export default async (req, res) => {
  try {
    let oneItinerary = await Itinerary.findOne({ _id: req.params.id }).select(
      "name price photo"
    );
    return res.status(200).json({
      success: true,
      message: "Itinerary found!",
      response: oneItinerary,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Itinerary not found",
      response: null,
    });
  }
};
