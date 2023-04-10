const { normalizeImage } = require("../../services");
const { catchAsync } = require("../../utils");
const fs = require("fs");

exports.updateUserAvatar = catchAsync(async (req, res) => {
  const file = req.file.path;
  const user = req.user;

  const normalizedAvatar = await normalizeImage(file, "avatars");

  console.log("=====norm Avatar====");
  console.log(normalizedAvatar);

  user.avatarURL = normalizedAvatar;

  await user.save();

  fs.unlink(file, (err) => {
    if (err) throw err;
  });

  res.status(200).json({
    user: {
      avatarURL: user.avatarURL,
    },
  });
});
