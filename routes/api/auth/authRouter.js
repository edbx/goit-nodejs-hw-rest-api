const { Router } = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
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

router.use("/", protect);
router.post("/current", getCurrentUser);
router.post("/logout", logoutUser);

module.exports = router;
