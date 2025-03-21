"use server";

export async function sendTeleReg(teamid,teamName,members) {
  // console.log(data);
  const Members = JSON.stringify(members);

  // Save user to database (if needed)
  // Example: await prisma.user.create({ data: { name, email } });

  // Send Telegram notification
  const message = `Registration Received!\n👤 Team Name: ${teamName}\n📧 TeamID: ${teamid} \n Members:${Members}`;

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID_REG;

  try{
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message }),
      });

      return {success:true};
  }catch(e){
    console.log(e);
    return {success:false};
  }

}
