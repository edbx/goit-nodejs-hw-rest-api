const multer = require("multer");
const { AppError } = require("../../utils");
const uuid = require("uuid").v4;

const id = uuid();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "temp");
  },
  filename: function (req, file, cb) {
    cb(null, id + "-" + Date.now() + ".jpg");
  },
});

const filter = (req, file, callbackFn) => {
  if (file.mimetype.startsWith("image")) {
    callbackFn(null, true);
  } else {
    callbackFn(new AppError(400, "Upload file has to be an image.."), false);
  }
};

const uploadUserPhoto = (name) =>
  multer({ storage: storage, fileFilter: filter }).single(name);

module.exports = { uploadUserPhoto };
