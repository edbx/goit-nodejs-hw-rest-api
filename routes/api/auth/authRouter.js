const { Router } = require("express");
const { registerUser, loginUser } = require("../../../controllers/auth");
const {
  checkUserData,
  checkIfUserExist,
  hashPassword,
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

module.exports = router;
