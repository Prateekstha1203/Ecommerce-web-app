import expressAsyncHandler from "express-async-handler";
import nodemailer from "nodemailer";
export const sendEmail = expressAsyncHandler(async (data, req, res) => {
  console.log(data);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASSWORD,
    },
  });
  async function main() {
    const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <prateekshrestha1649@gmail.com>',
      to: data.to,
      subject: data.subject,
      text: data.text,
      html: data.htm,
    });

    console.log("Message sent: %s", info.messageId);
  }
  main();
});
