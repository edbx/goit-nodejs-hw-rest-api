const Joi = require("joi");

exports.emailValidator = (email) => {
  const result = Joi.object({
    email: Joi.string().email().required(),
  });

  return result.validate(email);
};
