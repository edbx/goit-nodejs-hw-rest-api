const { getCurrentUser } = require("./getCurrentUser");
const { loginUser } = require("./loginUser");
const { logoutUser } = require("./logoutUser");
const { registerUser } = require("./registerUser");
const { updateUserAvatar } = require("./updateUserAvatar");
const { verifyUser } = require("./verifyUser");
const { verifyUserEmail } = require("./verifyUserEmail");

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateUserAvatar,
  verifyUserEmail,
  verifyUser,
};
