const { Router } = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateUserAvatar,
  verifyUserEmail,
  verifyUser,
} = require("../../../controllers/auth");
const {
  checkUserData,
  checkIfUserExist,
  hashPassword,
  protect,
  uploadUserPhoto,
  createVerificationToken,
  checkIfUserVerified,
} = require("../../../middlewares/auth");

const {
  createUserAvatar,
} = require("../../../middlewares/auth/createUserAvatar");
const {
  checkUserForVerification,
} = require("../../../middlewares/auth/checkUserForVerification");
const {
  sendVerificationEmail,
} = require("../../../middlewares/auth/sendVerificationEmail");

const router = Router();

router.post(
  "/register",
  checkUserData,
  checkIfUserExist,
  hashPassword,
  createUserAvatar,
  createVerificationToken,
  sendVerificationEmail,
  registerUser
);
router.post(
  "/verify",
  checkIfUserVerified,
  createVerificationToken,
  sendVerificationEmail,
  verifyUser
);
router.post("/login", checkUserData, loginUser);
router.get(
  "/verify/:verificationToken",
  checkUserForVerification,
  verifyUserEmail
);

router.use("/", protect);
router.get("/current", getCurrentUser);
router.post("/logout", logoutUser);
router.patch("/avatar", uploadUserPhoto("avatar"), updateUserAvatar);

module.exports = router;
