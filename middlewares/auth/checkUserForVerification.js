const { User } = require("../../models");
const { catchAsync, AppError } = require("../../utils");

exports.checkUserForVerification = catchAsync(async (req, res, next) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });

  if (!user) return next(new AppError(404, "User not found"));

  req.verificationToken = verificationToken;
  req.user = user;

  next();
});
