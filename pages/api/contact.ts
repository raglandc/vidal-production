//library
import { NextApiRequest, NextApiResponse } from "next";

//local

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
    host: process.env.EMAIL_TEST_HOST,
    port: process.env.EMAIL_TEST_PORT,
    auth: {
      user: process.env.EMAIL_TEST_USER,
      pass: process.env.EMAIL_TEST_PASS,
    },

    //activate less secure app if using google mail
  });

  //send email with nodemailer
  transporter.sendMail({
    from: '"Vidal Team" <vidaldevelopment@gmail.com>', // sender address
    to: `${options.email}`, // list of receivers
    subject: `A message from the Vidal team`, // Subject line
    html: `<div style="width: 90%; height: 500px; margin: 0 auto; display: flex; flex-direction: column; justify-content: center; align-items:center; border: 1px solid #grey; padding: 1rem;"> 
    

      <h2 style="color: #111">Thanks for reaching out ${options.name}!</h2>
      <p style="color: grey;"> We recieved your email, and will respond as soon as possible.</p>


      <p><strong>Automated Reply: Do Not Reply To This Email</strong></p>  

    
    
    </div>
    `,
  });
};
