const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Todo must have an owner.."],
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
