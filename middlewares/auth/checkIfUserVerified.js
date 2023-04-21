const { User } = require("../../models");
const { catchAsync, AppError } = require("../../utils");
const { emailValidator } = require("../../utils/emailValidator");

exports.checkIfUserVerified = catchAsync(async (req, res, next) => {
  const { error, value } = emailValidator(req.body);

  if (error) return next(new AppError(400, error.details[0].message));

  const email = value.email;

  const user = await User.findOne({ email });

  if (user.verified)
    next(new AppError(400, "Verification has already been passed"));

  req.user = user;

  next();
});
