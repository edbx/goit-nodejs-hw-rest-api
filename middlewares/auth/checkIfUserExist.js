const { catchAsync, AppError } = require("../../utils");
const { User } = require("../../models");

exports.checkIfUserExist = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  (await User.exists({ email: email }))
    ? next(new AppError(409, "user already exists"))
    : next();
});
