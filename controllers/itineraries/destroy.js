import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let { id } = req.params;
    let one = await Itinerary.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Itinerary deleted!",
      response: one._id,
    });
  } catch (error) {
    next(error);
  }
};
