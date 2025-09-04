document.getElementById("sendBtn").addEventListener("click", sendMessage);

function sendMessage() {
  const input = document.getElementById("chatInput");
  const chatBody = document.getElementById("chatBody");

  if (input.value.trim() === "") return;

  const userMessage = document.createElement("div");
  userMessage.classList.add("chat-message");
  userMessage.innerHTML = "<b>User:</b> " + input.value;

  chatBody.appendChild(userMessage);
  chatBody.scrollTop = chatBody.scrollHeight;

  setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.classList.add("chat-message");
    botMessage.innerHTML = "<b>AI:</b> I’m processing your request...";
    chatBody.appendChild(botMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 1000);

  input.value = "";
}
