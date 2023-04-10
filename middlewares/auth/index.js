const { checkUserData } = require("./checkUserData");
const { checkIfUserExist } = require("./checkIfUserExist");
const { hashPassword } = require("./hashPassword");
const { protect } = require("./protect");
const { uploadUserPhoto } = require("./uploadUserPhoto");

module.exports = {
  checkUserData,
  checkIfUserExist,
  hashPassword,
  protect,
  uploadUserPhoto,
};
