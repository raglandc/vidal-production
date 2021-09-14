//library
import { NextApiRequest, NextApiResponse } from "next";

export default function async(req: NextApiRequest, res: NextApiResponse) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      password: process.env.EMAIL_PASS,
    },
    //activate less secure app if using google mail
  });

  //define email options
  const mailOptions = {
    from: "Chris Ragland <hello@chris.io>",
    to: `${req.body.email}`,
    subject: `${req.body.name} thanks for reaching out`,
    text: `${req.body.name}, your email has been sent and were looking forward to hearing from you.`,
  };

  //send email with nodemailer
  transporter.sendMail(mailOptions, function (err: Error, info: any) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  res.status(200);
}
