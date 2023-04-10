const { catchAsync } = require("../../utils");
const crypto = require("crypto");

const createUserAvatar = catchAsync(async (req, res, next) => {
  const email = req.body.email;

  const hash = crypto.createHash("md5").update(email).digest("hex");
  const userAvatar = `https://www.gravatar.com/avatar/${hash}?d=retro`;

  req.body.avatarURL = userAvatar;

  next();
});

module.exports = {
  createUserAvatar,
};
