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
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "Chrisragland97@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
};
