"use server";

import { GeneralMessage } from "@/components/template/GeneralMail";
import nodemailer from "nodemailer";

export async function sendEmail(members, teamId, teamName){
    // console.log(members)
    const mailtemplate = GeneralMessage(teamName,teamId);
    // console.log(mailtemplate);

  if (!members) return { success: false, message: "Missing Data !" };

  try {
    const mailtemplate = GeneralMessage(teamName,teamId);
    let cclist = [];
    members.slice(1,members.length).map((member)=>cclist.push(member.email))
    console.log(cclist)
    // Set up email transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send OTP Email
    await transporter.sendMail({
      from: '"Konnexions IT Society" <noreply@konnexions.dev>',
      to: members[0].email,
      cc: cclist,
      subject: "Congratulations 🎉 | Kodesphere 2.0 | Registration Successful",
      html: mailtemplate,
    });

    return { success: true};
  } catch (error) {
    console.error(error);
    return { success: false};
  }
}
