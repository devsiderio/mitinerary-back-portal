import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    let oneCity = await City.findById(req.params.city_id).select(
      "country city photo description smalldescription admin_id"
    );
    if (oneCity) {
      return res.status(200).json({
        success: true,
        message: "City found!",
        response: oneCity,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "City not found",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
