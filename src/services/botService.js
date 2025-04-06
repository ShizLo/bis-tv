import axios from "axios";
export const CHATS_ID = {
  BASE: -1002378962422,
  BASE_DEV: -1002383432249,
};
const token = "7564255529:AAELnqPYEHTvtJzwSaf3tnn7JQb4whqx688";

export async function sendMessage(message) {
  try {
    const formattedText = `
*${message.text.header}*
${message.variables.city ? `${message.text.city}${message.variables.city}` : ""}
${
  message.variables.service
    ? `${message.text.service} ![🚨](tg://emoji?id=5458425656759032455)
${message.variables.service.map((task) => `\\- ${task}`).join("\n")}`
    : ""
}
${message.variables.name ? `${message.text.name}${message.variables.name}` : ""}
`;

    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: message.chat_id,
      text: formattedText,
      parse_mode: "MarkdownV2",
    });
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
  }
}

export async function sendTextMessage(message) {
  const formattedText = message.text
    .replace(/\./g, "\\.")
    .replace(/-/g, "\\-")
    .replace(/\n+/g, "\n")
    .replace(/\s*\[line\]/g, "\n")
    .replace(/=/g, "\\=")
    .replace(/>/g, "\\>")
    .replace(/\+/g, "\\+")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/\]/g, "\\]")
    .replace(/\[/g, "\\[")
    .replace(/_/g, "\\_")
    .replace(/\*/g, "\\*")
    .replace(/~/g, "\\~")
    .replace(/`/g, "\\`")
    .replace(/#/g, "\\#")
    .replace(/\|/g, "\\|")
    .replace(/{/g, "\\{")
    .replace(/}/g, "\\}")
    .replace(/!/g, "\\!")
    .trim();

  try {
    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: CHATS_ID.BASE_DEV,
      text: formattedText,
      parse_mode: "MarkdownV2",
      message_thread_id: message.chat_id,
    });
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
  }
}
