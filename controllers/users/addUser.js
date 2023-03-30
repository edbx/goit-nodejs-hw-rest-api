const User = require("../../models/userModel");
const { catchAsync } = require("../../utils");

exports.addUser = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  const newUser = await User.create({ email, password });

  res.status(201).json({
    user: newUser,
  });
});
