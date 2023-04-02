const User = require("../../models/userModel");
const { loginToken, AppError } = require("../../utils");
const { catchAsync } = require("../../utils");
const bcrypt = require("bcrypt");

exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  console.log("===========loginUser========");

  const user = await User.findOne({ email });
  if (!user) return next(new AppError(401, "Email or password is wrong"));

  console.log(user);

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid)
    return next(new AppError(401, "Email or password is wrong"));

  const token = loginToken(user.id);

  await User.findByIdAndUpdate(user.id, { token: token });

  res.status(200).json({
    user: {
      token,
      email: user.email,
      subscription: user.subscription,
    },
  });
});
