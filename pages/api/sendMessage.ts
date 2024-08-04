import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  success: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Example: configure nodemailer to send email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      port: 465,
      secure: true,
      auth: {
        user: `ajay.varsur21@gmail.com`, // replace with your email
        pass: `nitl xzbj zoqh fdzg`, // replace with your email password or use environment variables
      },
    });

    try {
      const info = await transporter.sendMail({
        from: "ajay.varsur21@gmail.com",
        to: "ajay.varsur21@gmail.com", // replace with your email or recipient's email
        subject: subject,
        text: `From: ${name} <${email}>\n\n${message}`,
      });

      console.log("Message sent: %s", info.messageId);
      res
        .status(200)
        .json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to send message." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
