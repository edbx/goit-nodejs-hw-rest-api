const { catchAsync, AppError } = require("../../utils");
const { User } = require("../../models");

exports.checkIfUserExist = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  if (await User.exists({ email: email }))
    return next(new AppError(401, "user already exists"));

  next();
});
