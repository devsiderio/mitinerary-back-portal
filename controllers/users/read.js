import User from "../../models/User.js";

export default async (req, res) => {
  try {
    let allUsers = await User.find();
    return res.status(200).json({
      success: true,
      message: "Users found!",
      response: allUsers,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Users not found",
      response: null,
    });
  }
};
