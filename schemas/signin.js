import joi from "joi";

let signinSchema = joi.object({
  mail: joi.string().required().messages({
    "any.required": "Mail is required",
    "string.empty": "Mail is required",
  }),
  password: joi.string().required().min(8).max(40).messages({
    "string.min": "Password must have at least 8 characters.",
    "string.max": "Password must have less than 41 characters.",
    "any.required": "Password is required",
    "string.empty": "Password is required",
  }),
});

export default signinSchema;
