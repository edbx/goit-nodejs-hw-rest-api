const { getCurrentUser } = require("./getCurrentUser");
const { loginUser } = require("./loginUser");
const { logoutUser } = require("./logoutUser");
const { registerUser } = require("./registerUser");

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};
