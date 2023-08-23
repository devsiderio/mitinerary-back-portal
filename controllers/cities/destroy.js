import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    let deletedCity = await City.findByIdAndDelete(req.params.id);
    if (deletedCity) {
      return res.status(200).json({
        success: true,
        message: "City deleted!",
        response: deletedCity._id,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "City not deleted",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
