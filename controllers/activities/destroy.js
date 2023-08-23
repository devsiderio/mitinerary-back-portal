import Activity from "../../models/Activity.js";

export default async (req, res) => {
  try {
    let deletedActivity = await Activity.findByIdAndDelete(req.params.d_id);
    return res.status(200).json({
      success: true,
      message: "Activity deleted!",
      response: deletedActivity._id,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Activity not deleted",
    });
  }
};
