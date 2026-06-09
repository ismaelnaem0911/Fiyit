// ============================================
// FIYIT — app.js
// Main application logic (Stage 2: Interactions)
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

  // 3. Get typing indicator element
  const typingIndicator = document.getElementById('typingIndicator');

  // 4. Show typing indicator right away
  if (typingIndicator) {
    typingIndicator.style.display = 'flex';
    typingIndicator.classList.remove('hidden');
    // Move indicator to the bottom so it stays under user message
    chatArea.appendChild(typingIndicator);
    typingIndicator.scrollIntoView({ behavior: 'smooth' });
  }

  // 5. Wait 1.5 seconds, hide bubbles, then drop AI response
  setTimeout(() => {
    // Hide the typing bubbles
    if (typingIndicator) {
      typingIndicator.style.display = 'none';
      typingIndicator.classList.add('hidden');
    }

    // Add the AI response block
    addMessage(
      "📚 I received your question! AI responses will be connected in Stage 7. Keep building! 🚀",
      'ai'
    );
  }, 1500); // Changed to 1500ms (1.5 seconds) so the user sees the animation working!
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
