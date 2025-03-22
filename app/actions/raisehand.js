"use server";

export async function rasieHand(data) {
    const teamName = data.teamName;
    const roomNumber = data.roomNumber;
    const domainName = data.domainName;
    // console.log(data);

    // Save user to database (if needed)
    // Example: await prisma.user.create({ data: { name, email } });

    // Send Telegram notification
    const message = `Someone Needs Your Help!\n👤 Team Name: ${teamName}\n🤚 Room: ${roomNumber} \n💻 Domain : ${domainName}`;

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    try {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({chat_id: TELEGRAM_CHAT_ID, text: message}),
        });

        return {success: true, message: "Raise Hand Notified successfully! Volunteers will reach out to you soon!"};
    } catch (e) {
        console.log(e);
        return {success: false, message: "Failed to send Query! Contact Volunteers!"};
    }

}
