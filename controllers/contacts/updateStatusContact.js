const { catchAsync, AppError } = require("../../utils");
const Contact = require("../../models/contactModel.js");

exports.updateStatusContact = catchAsync(async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const ownerId = req.user.id;

  const contactToUpdate = await Contact.findOne({
    $and: [{ _id: contactId }, { owner: ownerId }],
  }).lean();

  if (!contactToUpdate) return next(new AppError(400, "No such contact"));

  const updatedStatus = await Contact.findByIdAndUpdate(
    contactToUpdate._id,
    { favorite },
    { new: true }
  ).select(["-__v", "-owner"]);

  res.status(200).json({
    updatedStatus,
  });
});
