const Jimp = require("jimp");
const path = require("path");
const uuid = require("uuid").v4;

exports.normalizeImage = async (file, ...pathSegments) => {
  try {
    console.log("===========norm image========");
    const image = await Jimp.read(file);

    const fullFilePath = path.join(process.cwd(), "public", ...pathSegments);

    console.log("=========full file path======");
    console.log(fullFilePath);

    const fileName = `${uuid()}.jpeg`;

    console.log("======file name=======");
    console.log(fileName);

    image
      .resize(250, 250) // resize
      .quality(90) // set JPEG quality
      .greyscale() // set greyscale
      .write(path.join(fullFilePath, fileName)); // save

    console.log("==========return=======");
    console.log(path.join(...pathSegments, fileName));

    return path.join(...pathSegments, fileName);
  } catch (error) {
    console.log("=====norm image error======");
    console.log(error);
  }
};
