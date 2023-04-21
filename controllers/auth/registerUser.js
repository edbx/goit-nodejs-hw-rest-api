const User = require("../../models/userModel");
const { catchAsync } = require("../../utils");

exports.registerUser = catchAsync(async (req, res, next) => {
  const { email, password, avatarURL, verificationToken } = req.body;

  const newUser = await User.create({
    email,
    password,
    avatarURL,
    verificationToken,
  });

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
      avatarURL: newUser.avatarURL,
    },
  });

  next();
});
