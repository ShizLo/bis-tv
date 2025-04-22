import axios from "axios";
export const CHATS_ID = {
  BASE: -1002378962422, // Главная группа
  BASE_DEV: -1002383432249, // Группа для разработчиков
};
export const TOPICS_ID = {
  DEV: 4294967414,
  FENCE: 4294967352, // Заборы
  SERVICES: 4294967328, // Услуги
  LANDSCAPE: 4294967339, // Проекты
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
      chat_id: message.chat_id,
      text: formattedText,
      parse_mode: "MarkdownV2",
      message_thread_id: message.topic_id,
    });
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
  }
}

// Новая версия отправки в виде текстового сообщения
export async function sendMessageTG(message) {
  const formattedText = message.text
    .replace(/\s*\[line\]/g, "\n")
    .replace(/\n+/g, "\n")
    .trim();

  try {
    const blob = new Blob([formattedText], { type: "text/plain" });
    const formData = new FormData();
    formData.append("document", blob, message.file_name + ".txt");
    formData.append("chat_id", message.chat_id);
    formData.append("message_thread_id", message.topic_id);

    const response = await axios.post(`https://api.telegram.org/bot${token}/sendDocument`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
  }
}
