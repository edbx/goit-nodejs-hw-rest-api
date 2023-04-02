const { Contact } = require("../../models");
const { catchAsync } = require("../../utils");

exports.listContacts = catchAsync(async (req, res) => {
  const ownerId = req.user.id;

  const contacts = await Contact.find({ owner: ownerId })
    .select(["-__v", "-owner"])
    .sort({ name: 1 });

  res.status(200).json({
    total: contacts.length,
    contacts,
  });
});
