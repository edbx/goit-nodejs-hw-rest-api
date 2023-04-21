const { catchAsync } = require("../../utils");
const sgMail = require("@sendgrid/mail");

exports.sendVerificationEmail = catchAsync(async (req, res, next) => {
  const { email, verificationToken } = req.body;

  const verifyURL = `${req.protocol}://${req.get(
    "host"
  )}/api/users/verify/${verificationToken}`;

  sgMail.setApiKey(process.env.SENDGRID_APIKEY);

  const msg = {
    to: email,
    from: process.env.SENDGRID_VERIFIED_EMAIL,
    subject: "Verification Email",
    text: `Hello and Welcome. Here is the link ${verifyURL}`,
    html: `Hello and Welcome. <br> To verify your email address please click on the link below<br>
    <a href=${verifyURL}>Link</a>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });

  next();
});
