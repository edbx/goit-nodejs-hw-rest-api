const { catchAsync, AppError } = require("../../utils");

const { User } = require("../../models");

exports.protect = catchAsync(async (req, res, next) => {
  console.log("==========JWT token=======");
  console.log(req.headers.authorization);

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

  const currentUser = await User.findOne({ token });

  if (!currentUser) return next(new AppError(401, "Not authorized"));

  next();
});
