import Itinerary from "../../models/Itinerary.js";

export default async (req, res) => {
  try {
    let updatedItinerary = await Itinerary.findByIdAndUpdate(
      req.params.u_id,
      req.body,
      { new: true }
    ).select("name price photo");
    return res.status(200).json({
      success: true,
      message: "Itinerary updated!",
      response: updatedItinerary,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Itinerary not updated",
      response: null,
    });
  }
};
