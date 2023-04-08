const bcrypt = require("bcrypt");
const { catchAsync } = require("../../utils");
const saltRounds = 10;

exports.hashPassword = catchAsync(async (req, res, next) => {
  const { password } = req.body;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  req.body.password = hashedPassword;

  next();
});
