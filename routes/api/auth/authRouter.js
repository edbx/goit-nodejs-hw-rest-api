const { Router } = require("express");
const { registerUser } = require("../../../controllers/auth");
const {
  checkRegisterUserData,
  checkIfUserExist,
} = require("../../../middlewares/auth");
const { hashPassword } = require("../../../middlewares/auth/hashPassword");

const router = Router();

router.post(
  "/register",
  checkRegisterUserData,
  checkIfUserExist,
  hashPassword,
  registerUser
);

module.exports = router;
