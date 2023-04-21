const { verifyEmailToken } = require("../../utils");

exports.createVerificationToken = (req, res, next) => {
  const { email } = req.body;
  const verificationToken = verifyEmailToken(email);

  req.body.verificationToken = verificationToken;

  next();
};
