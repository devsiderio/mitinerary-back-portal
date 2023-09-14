import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    let oneUser = await User.findOne({ _id: req.params.user_id }).select(
      "mail photo -_id"
    );

    if (oneUser) {
      return res.status(200).json({
        success: true,
        message: "User found!",
        response: oneUser,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User not found",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
