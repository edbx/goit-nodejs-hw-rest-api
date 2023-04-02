const { Contact } = require("../../models");
const { catchAsync, AppError } = require("../../utils");

exports.updateContact = catchAsync(async (req, res, next) => {
  const { contactId } = req.params;
  const { name, email, phone } = req.body;
  const ownerId = req.user.id;

  const contactToUpdate = await Contact.findOne({
    $and: [{ _id: contactId }, { owner: ownerId }],
  }).lean();

  if (!contactToUpdate) return next(new AppError(400, "No such contact"));

  const updatedContact = await Contact.findByIdAndUpdate(
    contactToUpdate._id,
    { name, email, phone },
    { new: true }
  ).select(["-__v", "-owner"]);

  res.status(200).json({
    updatedContact,
  });
});
