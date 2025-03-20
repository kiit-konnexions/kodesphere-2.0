"use server";

import { GeneralMessage } from "@/components/template/GeneralMail";
import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function sendEmail(members, teamId, teamName){
    // console.log(members)
    const mailtemplate = GeneralMessage(teamName,teamId);
    // console.log(mailtemplate);
    // let cclist = [];
    // members.slice(1,members.length).map((member)=>cclist.push(member.email))
    // console.log(cclist)

  if (!members) return { success: false, message: "Missing Data !" };

  try {
    const mailtemplate = GeneralMessage(teamName,teamId);
    let cclist = [];
    members.slice(1,members.length).map((member)=>cclist.push(member.email))
    console.log(cclist)
    // Set up email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send OTP Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
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
