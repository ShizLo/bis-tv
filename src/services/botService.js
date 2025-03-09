import axios from "axios";
export const CHATS_ID = {
  BASE: -1002378962422,
  BASE_DEV: -1002383432249,
};

export async function sendMessage(message, chat_id) {
  var token = "7564255529:AAELnqPYEHTvtJzwSaf3tnn7JQb4whqx688";
  await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, { chat_id, text: message, parse_mode: "HTML" });
}
