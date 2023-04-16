const { checkUserData } = require("./checkUserData");
const { checkIfUserExist } = require("./checkIfUserExist");
const { hashPassword } = require("./hashPassword");
const { protect } = require("./protect");
const { uploadUserPhoto } = require("./uploadUserPhoto");
const { checkUserForVerification } = require("./checkUserForVerification");
const { sendVerificationEmail } = require("./sendVerificationEmail");
const { createVerificationToken } = require("./createVerificationToken");
const { checkIfUserVerified } = require("./checkIfUserVerified");

module.exports = {
  checkUserData,
  checkIfUserExist,
  hashPassword,
  protect,
  uploadUserPhoto,
  checkUserForVerification,
  sendVerificationEmail,
  createVerificationToken,
  checkIfUserVerified,
};
