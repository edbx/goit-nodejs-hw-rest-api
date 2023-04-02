const { checkUserData } = require("./checkUserData");
const { checkIfUserExist } = require("./checkIfUserExist");
const { hashPassword } = require("./hashPassword");
const { protect } = require("./protect");

module.exports = {
  checkUserData,
  checkIfUserExist,
  hashPassword,
  protect,
};
