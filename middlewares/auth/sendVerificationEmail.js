const { catchAsync, verifyEmailToken } = require("../../utils");
const sgMail = require("@sendgrid/mail");
const path = require("path");

exports.sendVerificationEmail = catchAsync(async (req, res, next) => {
  const email = req.body.email;
  console.log(email);

  const verificationToken = verifyEmailToken(email);

  const verifyURL = path.join();
  console.log("===========url=======");
  console.log(verifyURL);

  sgMail.setApiKey(process.env.SENDGRID_APIKEY);

  const msg = {
    to: email,
    from: process.env.SENDGRID_VERIFIED_EMAIL,
    subject: "Verification Email",
    text: "Hello and Welcome. here is the link ",
    html: `Hello and Welcome. Here is a link ${verificationToken}`,
  };

  //   sgMail
  //     .send(msg)
  //     .then(() => {
  //       console.log("Email sent");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  req.body.verificationToken = verificationToken;

  next();
});
