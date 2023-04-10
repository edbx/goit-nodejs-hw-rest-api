const { Router } = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateUserAvatar,
} = require("../../../controllers/auth");
const {
  checkUserData,
  checkIfUserExist,
  hashPassword,
  protect,
  uploadUserPhoto,
} = require("../../../middlewares/auth");

const {
  createUserAvatar,
} = require("../../../middlewares/auth/createUserAvatar");

const router = Router();

router.post(
  "/register",
  checkUserData,
  checkIfUserExist,
  hashPassword,
  createUserAvatar,
  registerUser
);
router.post("/login", checkUserData, loginUser);

router.use("/", protect);
router.get("/current", getCurrentUser);
router.post("/logout", logoutUser);
router.patch("/avatar", uploadUserPhoto("avatar"), updateUserAvatar);

module.exports = router;
