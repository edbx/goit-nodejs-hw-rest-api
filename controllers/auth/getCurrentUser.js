const User = require("../../models/userModel");
const { catchAsync } = require("../../utils");

exports.getCurrentUser = catchAsync(async (req, res, next) => {
  const token =
    req.headers.authorization?.startsWith("Bearer") &&
    req.headers.authorization.split(" ")[1];

  const user = await User.findOne({ token: token });

  res.status(200).json({
    user: {
      email: user.email,
      subscription: user.subscription,
      avatar: user.avatarURL,
    },
  });
});
