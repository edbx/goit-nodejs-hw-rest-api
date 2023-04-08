const Joi = require("joi");

const PASSWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,128})/;

exports.userValidator = (data) => {
  const result = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().regex(PASSWD_REGEX).required(),
  });

  return result.validate(data);
};
