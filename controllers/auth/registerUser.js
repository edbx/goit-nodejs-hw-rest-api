const User = require("../../models/userModel");
const { catchAsync } = require("../../utils");

exports.registerUser = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  const newUser = await User.create({ email, password });

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
});
