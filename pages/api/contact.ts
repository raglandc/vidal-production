//library
import { NextApiRequest, NextApiResponse } from "next";

export default function contactHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //for data posting to the api
  if (req.method === "POST") {
    const { name, email } = req.body;
    sendMailHandler({ name, email });
    res.status(200).json({
      status: 200,
      message: `Email has been sent to ${email}`,
    });
  }
}

const sendMailHandler = (options: { name: string; email: string }) => {
  //using the nodemailer library to send emails
  const nodemailer = require("nodemailer");

  //creating transporter object
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5c1291ac934945",
      pass: "730ad46f07a683",
    },

    //activate less secure app if using google mail
  });

  //send email with nodemailer
  transporter.sendMail({
    from: '"Vial Team" <Chrisragland97@gmail.com>', // sender address
    to: `${options.email}`, // list of receivers
    subject: `${options.name}, Thank you for reaching out!`, // Subject line
    text: `${options.name} we recieved your email and will respond as soon as we can. We look forward to talking!`, // plain text body
  });
};
