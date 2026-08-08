import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Заполните все поля" },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { error: "Telegram не настроен" },
        { status: 500 }
      );
    }

    const text = `
🔔 Новая заявка с сайта!

👤 Имя: ${name}

📧 Email: ${email}

💬 Сообщение:
${message}
`;

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      }
    );

    if (!response.ok) {
      const telegramError = await response.text();

      console.error("Telegram error:", telegramError);

      return NextResponse.json(
        { error: "Telegram: " + telegramError },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Server error:", error);

    return NextResponse.json(
      { error: "Произошла ошибка сервера" },
      { status: 500 }
    );
  }
}