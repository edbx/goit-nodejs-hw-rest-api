const { Router } = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../../../controllers/auth");
const {
  checkUserData,
  checkIfUserExist,
  hashPassword,
  protect,
} = require("../../../middlewares/auth");

const router = Router();

router.post(
  "/register",
  checkUserData,
  checkIfUserExist,
  hashPassword,
  registerUser
);

router.post("/login", checkUserData, loginUser);

router.post("/logout", protect, logoutUser);

module.exports = router;
