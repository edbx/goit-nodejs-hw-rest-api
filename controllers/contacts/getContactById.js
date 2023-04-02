const { catchAsync } = require("../../utils");
const Contact = require("../../models/contactModel.js");

exports.getContactById = catchAsync(async (req, res) => {
  const { contactId } = req.params;
  const ownerId = req.user.id;

  const contact = await Contact.findOne({
    _id: contactId,
    owner: ownerId,
  }).select(["-__v", "-owner"]);

  res.status(200).json({
    contact,
  });
});
