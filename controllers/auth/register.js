import User from "../../models/User.js";

export default async (req, res) => {
  try {
    let one = await User.create(req.body);
    return res.status(201).json({
      success: true,
      message: "User created!",
      response: one._id,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "User creation failed.",
      error: error.message,
    });
  }
};
