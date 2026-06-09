// ============================================
// FIYIT — app.js
// Main application logic (Stage 2: Interactions)
// ============================================

// --- Get DOM Elements ---
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const chatArea = document.getElementById('chatArea');
const typingIndicator = document.getElementById('typingIndicator'); // Moved globally to the top

// ============================================
// SEND MESSAGE FUNCTION
// ============================================

function sendMessage() {
  const text = chatInput.value.trim();

  // Don't send empty messages
  if (!text) return;

  // 1. Add user's message to chat
  addMessage(text, 'user');

  // 2. Clear the input field instantly
  chatInput.value = '';

  // 3. Show typing indicator smoothly by removing 'hidden' class
  if (typingIndicator) {
    typingIndicator.classList.remove('hidden');
    typingIndicator.scrollIntoView({ behavior: 'smooth' });
  }

  // 4. Wait 1.5 seconds, hide bubbles, then drop AI response
  setTimeout(() => {
    // Hide the typing bubbles gracefully
    if (typingIndicator) {
      typingIndicator.classList.add('hidden');
    }

    // Add the AI response block right where the indicator was sitting
    addMessage(
      "📚 I received your question! AI responses will be connected in Stage 7. Keep building! 🚀",
      'ai'
    );
  }, 1500); // 1.5 seconds delay
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

  // OPTIMIZED: Always insert new messages BEFORE the typing indicator.
  // This completely stops layout jumping and keeps the dots at the bottom.
  if (typingIndicator) {
    chatArea.insertBefore(messageDiv, typingIndicator);
  } else {
    chatArea.appendChild(messageDiv);
  }

  // Auto-scroll to the newly dropped message bubble
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
