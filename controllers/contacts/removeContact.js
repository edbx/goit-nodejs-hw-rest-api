const { Contact } = require("../../models");
const { catchAsync, AppError } = require("../../utils");

exports.removeContact = catchAsync(async (req, res, next) => {
  const { contactId } = req.params;
  const ownerId = req.user.id;

  const contactToDelete = await Contact.findOne({
    $and: [{ _id: contactId }, { owner: ownerId }],
  }).lean();

  if (!contactToDelete) return next(new AppError(400, "No such contact"));

  await Contact.findOneAndDelete({ _id: contactToDelete._id });

  res.sendStatus(204);
});
