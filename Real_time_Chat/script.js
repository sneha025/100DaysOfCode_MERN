const socket = io.connect("127.0.0.1:3000");
const messageContainer = document.getElementById("message-container");
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");

const names = prompt("what is you name?");
appendMessage("you Joined");
socket.emit("new-user", names);
socket.on("user-connected", (names) => {
  appendMessage(`${names} connected`);
});
socket.on("chat-message", (data) => {
  appendMessage(`${data.name} : ${data.message}`);
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  appendMessage(`You:${message}`);
  socket.emit("send-chat-message", message);
  messageInput.value = "";
});

function appendMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageContainer.append(messageElement);
}
