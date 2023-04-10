const User = require("../../models/userModel");
const { catchAsync } = require("../../utils");

exports.registerUser = catchAsync(async (req, res) => {
  const { email, password, avatarURL } = req.body;

  const newUser = await User.create({ email, password, avatarURL });

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
      avatarURL: newUser.avatarURL,
    },
  });
});
