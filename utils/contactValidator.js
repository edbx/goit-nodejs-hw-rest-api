const Joi = require("joi");
const JoiPhoneNumber = Joi.extend(require("joi-phone-number"));

exports.contactValidator = (data) => {
  const result = Joi.object({
    name: Joi.string().min(2).max(20).required(),
    email: Joi.string().email(),
    phone: JoiPhoneNumber.string().phoneNumber(),
    favorite: Joi.boolean(),
  });

  return result.validate(data);
};
