const { User } = require("../../models");
const { catchAsync } = require("../../utils");

exports.verifyUser = catchAsync(async (req, res) => {
  const { email, verificationToken } = req.body;

  const user = await User.findOne({ email });

  user.verificationToken = verificationToken;

  await user.save();

  res.status(200).json({
    message: "Verification email sent",
  });
});
