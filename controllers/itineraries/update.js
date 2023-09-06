import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let { id } = req.params;
    let data = req.body;
    let one = await Itinerary.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    if (one) {
      return res.status(200).json({
        success: true,
        message: "Itinerary updated!",
        response: one._id,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Itinerary not found",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
