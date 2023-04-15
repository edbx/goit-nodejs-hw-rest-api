const jwt = require("jsonwebtoken");

exports.verifyEmailToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
