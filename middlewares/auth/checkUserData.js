const { catchAsync, AppError } = require("../../utils");
const { userValidator } = require("../../utils/userValidator");

exports.checkUserData = catchAsync(async (req, res, next) => {
  const { error, value } = userValidator(req.body);

  if (error) return next(new AppError(400, error.details[0].message));

  req.body = value;

  next();
});
