const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  avatarURL: {
    type: String,
    default: "../public/avatars/default_avatar.png",
  },
  verificationToken: {
    type: String,
    required: [true, "Verify token is required"],
  },
  verified: {
    type: Boolean,
    default: false,
  },

  token: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
