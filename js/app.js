// ============================================
// FIYIT — app.js
// Main application logic (Stage 1: Foundation)
// ============================================

// --- Get DOM Elements ---
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const chatArea = document.getElementById('chatArea');

// ============================================
// SEND MESSAGE FUNCTION
// ============================================

function sendMessage() {
  const text = chatInput.value.trim();

  // Don't send empty messages
  if (!text) return;

  // 1. Add user's message to chat
  addMessage(text, 'user');

  // 2. Clear the input
  chatInput.value = '';

  // 3. Show a placeholder AI response (real AI comes in Stage 7)
  setTimeout(() => {
    addMessage(
      "📚 I received your question! AI responses will be connected in Stage 7. Keep building! 🚀",
      'ai'
    );
  }, 600);
}

// ============================================
// ADD MESSAGE TO CHAT UI
// ============================================

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chat-message');
  messageDiv.classList.add(sender === 'ai' ? 'ai-message' : 'user-message');

  const bubble = document.createElement('div');
  bubble.classList.add('message-bubble');
  bubble.textContent = text;

  messageDiv.appendChild(bubble);
  chatArea.appendChild(messageDiv);

  // Auto-scroll to latest message
  messageDiv.scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// EVENT LISTENERS
// ============================================

// Click send button
sendBtn.addEventListener('click', sendMessage);

// Press Enter to send
chatInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
