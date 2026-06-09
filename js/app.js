// ============================================
// FIYIT — app.js
// ============================================

const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const chatArea = document.getElementById('chatArea');
const typingIndicator = document.getElementById('typingIndicator');

function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  addMessage(text, 'user');
  chatInput.value = '';

  if (typingIndicator) {
    typingIndicator.classList.remove('hidden');
    typingIndicator.scrollIntoView({ behavior: 'smooth' });
  }

  setTimeout(() => {
    if (typingIndicator) {
      typingIndicator.classList.add('hidden');
    }
    addMessage(
      "📚 I received your question! AI responses will be connected in Stage 7. Keep building! 🚀",
      'ai'
    );
  }, 1500);
}

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chat-message');
  messageDiv.classList.add(sender === 'ai' ? 'ai-message' : 'user-message');

  const bubble = document.createElement('div');
  bubble.classList.add('message-bubble');
  bubble.textContent = text;

  messageDiv.appendChild(bubble);

  if (typingIndicator) {
    chatArea.insertBefore(messageDiv, typingIndicator);
  } else {
    chatArea.appendChild(messageDiv);
  }

  messageDiv.scrollIntoView({ behavior: 'smooth' });
}

sendBtn.addEventListener('click', sendMessage);

chatInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
