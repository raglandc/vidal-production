//library
import type { NextApiRequest, NextApiResponse } from "next";

////////////////////////////////////////////////////////////////
//EVERYTHING WORKS, JUST TURN ON LESS SECURE APPS TO USE GMAIL//
////////////////////////////////////////////////////////////////

export default function contactHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //for data posting to the api
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    try {
      sendMailHandler({ name, email, message });
      res.status(200).json({
        status: 200,
        message: `Email has been sent to ${email}`,
      });
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: `An error occurred while trying to send out your email.`,
      });
      console.log(err);
    }
  }
}

const sendMailHandler = (options: {
  name: string;
  email: string;
  message?: string;
}) => {
  //using the nodemailer library to send emails
  const nodemailer = require("nodemailer");

  //creating transporter object
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //send email to customer with nodemailer
  transporter.sendMail({
    from: '"Vidal Team" <vidalteamcontact@gmail.com>', // sender address
    to: `${options.email}`, // list of receivers
    subject: `A Message From the Vidal Team`, // Subject line
    text: `Thanks for reaching out ${options.name}, we got your message and will respond as soon as we can.`,
  });

  //send email with client info to self
  transporter.sendMail({
    from: `"${options.name}" <${options.email}>`,
    to: "vidalteamcontact@gmail.com",
    subject: `A message from your contact form`,
    text: `${options.message}`,
  });
};
