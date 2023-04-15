const { catchAsync } = require("../../utils");

exports.verifyUserEmail = catchAsync(async (req, res) => {
  const token = req.verificationToken;
  const user = req.user;

  if (user.verificationToken === token) {
    user.verified = true;
    // user.verificationToken = null;
  }

  res.status(200).json({
    message: "Verification successful",
  });
});
