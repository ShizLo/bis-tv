export const CHATS_ID = {
  BASE: -1002378962422,
  BASE_DEV: -1002383432249,
};

export function sendMessage(message, chat_id) {
  var token = "7564255529:AAELnqPYEHTvtJzwSaf3tnn7JQb4whqx688";
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;
  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();
}
