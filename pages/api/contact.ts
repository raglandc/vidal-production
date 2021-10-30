import type { NextApiRequest, NextApiResponse } from "next";

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

////////////////////////////////////////////////////////////////
//EVERYTHING WORKS, JUST TURN ON LESS SECURE APPS TO USE GMAIL//
////////////////////////////////////////////////////////////////

export default function contactHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body;

  const mssg = {
    to: `${email}`,
    from: `vidalteamcontact@gmail.com`,
    subject: `Thank you for reaching out`,
    text: `We got your message! We will respond shortly to the email you gave us.`,
  };

  const mssgToVidal = {
    to: `vidalteamcontact@gmail.com`,
    from: `vidalteamcontact@gmail.com`,
    subject: `Email from ${name}`,
    text: `${message}, from: ${email}`,
  };

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

  sgMail
    .send(mssgToVidal)
    .then(() => {
      console.log("Email Sent");
    })
    .catch((error: Error) => {
      console.error(error);
    });
}
