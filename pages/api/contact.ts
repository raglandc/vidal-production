import type { NextApiRequest, NextApiResponse } from "next";

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

////////////////////////////////////////////////////////////////
//EVERYTHING WORKS, USING SEND GRID IN PRODUCTION, CHECK SPAM //
////////////////////////////////////////////////////////////////

export default function contactHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body;

  const mssg = {
    to: `${email}`,
    from: `vidalteamcontact@gmail.com`,
    subject: `Thank you for reaching out ${name}`,
    text: `We got your message!\n We will respond shortly to the email you gave us.`,
  };

  const mssgToVidal = {
    to: `vidalteamcontact@gmail.com`,
    from: `vidalteamcontact@gmail.com`,
    subject: `Email from ${name}`,
    text: `${message}\n from: ${email}`,
  };

  //email to user

  sgMail
    .send(mssg)
    .then(() => {
      res.status(200).json({
        message: "Email sent to user.",
      });
    })
    .catch((error: Error) => {
      res.status(500).json({ message: "Failed to send email to user" });
      console.error(error);
    });

  //email to self, check spam folder.

  sgMail
    .send(mssgToVidal)
    .then(() => {
      console.log("Email Sent");
    })
    .catch((error: Error) => {
      console.error(error);
    });
}
