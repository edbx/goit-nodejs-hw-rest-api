const User = require("../../models/userModel");
const { catchAsync } = require("../../utils");

exports.logoutUser = catchAsync(async (req, res, next) => {
  const token =
    req.headers.authorization?.startsWith("Bearer") &&
    req.headers.authorization.split(" ")[1];

  const user = await User.findOne({ token: token });

  await User.findByIdAndUpdate(user.id, { token: "" });

  res.status(204).json({});
});
