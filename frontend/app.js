const ws = new WebSocket('ws://localhost:8000/ws/chat');
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');

ws.onmessage = function(event) {
    const message = document.createElement('div');
    message.textContent = event.data;
    messagesDiv.appendChild(message);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

function sendMessage() {
    const message = messageInput.value;
    if (message) {
        ws.send(message);
        messageInput.value = '';
    }
}
