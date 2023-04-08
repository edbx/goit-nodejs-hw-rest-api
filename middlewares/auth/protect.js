const { catchAsync, AppError } = require("../../utils");

const { User } = require("../../models");

exports.protect = catchAsync(async (req, res, next) => {
  const token =
    req.headers.authorization?.startsWith("Bearer") &&
    req.headers.authorization.split(" ")[1];

  if (!token) return next(new AppError(401, "Not authorized"));

  // const jwt = require("jsonwebtoken");
  //   let decodedToken;
  //   try {
  //     decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
  //   } catch (error) {
  //     console.log(error);
  //     return next(new AppError(401, "Not authorized"));
  //   }
  //   const currentUser = await User.findById(decodedToken.id);

  let currentUser;
  try {
    currentUser = await User.findOne({ token });
  } catch (error) {
    console.log(error);
    return next(new AppError(401, "Not authorized"));
  }

  if (!currentUser) return next(new AppError(401, "Not authorized"));

  req.user = currentUser;

  next();
});
