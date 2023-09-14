import joi from "joi";

let registerSchema = joi.object({
  name: joi.string().required().messages({
    "any.required": "Name is required.",
    "string.empty": "Name is required.",
  }),
  lastName: joi.string().required().messages({
    "string.empty": "Last name is required.",
    "any.required": "Last name is required.",
  }),
  country: joi.string().required().messages({
    "string.empty": "Country is required.",
    "any.required": "Country is required.",
  }),
  photo: joi.string().required().messages({
    "any.required": "Photo URL is required.",
    "string.empty": "Photo URL is required.",
  }),
  mail: joi.string().required().messages({
    "any.required": "Mail is required.",
    "string.empty": "Mail is required.",
  }),
  password: joi.string().required().min(8).max(40).messages({
    "string.min": "Password must have at least 8 characters.",
    "string.max": "Password must have less than 41 characters.",
    "any.required": "Password is required.",
    "string.empty": "Password is required.",
  }),
});

export default registerSchema;
