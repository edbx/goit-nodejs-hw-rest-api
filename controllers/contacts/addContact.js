const Contact = require("../../models/contactModel");
const { catchAsync } = require("../../utils");

exports.addContact = catchAsync(async (req, res) => {
  const { name, email, phone, favorite } = req.body;

  const user = req.user;

  const newContact = {
    name,
    email,
    phone,
    favorite,
    owner: user.id,
  };

  await Contact.create(newContact);

  res.status(201).json({
    contact: newContact,
  });
});
