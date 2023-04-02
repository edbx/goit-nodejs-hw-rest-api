const { addContact } = require("./addContact");
const { listContacts } = require("./listContacts");
const { removeContact } = require("./removeContact");
const { getContactById } = require("./getContactById");
const { updateContact } = require("./updateContact");
const { updateStatusContact } = require("./updateStatusContact");

module.exports = {
  getContactById,
  listContacts,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};
