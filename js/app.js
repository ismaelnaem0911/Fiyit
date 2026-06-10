// js/app.js - FIYIT Live Chat & Local Key Storage Manager

const MODEL_NAME = "gemini-1.5-flash";

// 1. DOM Elements - We use generic selectors to find your buttons even if IDs are slightly different
const chatContainer = document.getElementById('chat-container') || document.querySelector('.chat-messages');
const userInput = document.getElementById('user-input') || document.querySelector('input[type="text"]');
const sendBtn = document.getElementById('send-btn') || document.querySelector('.send-button') || document.querySelector('button');

// 2. Setup Input Field on Screen
function injectKeyManagerUI() {
    if (!chatContainer) return;
    const existingManager = document.getElementById('key-manager-ui');
    if (existingManager) return;

    const managerDiv = document.createElement('div');
    managerDiv.id = 'key-manager-ui';
    managerDiv.style = "background: #f1f3f4; padding: 10px; display: flex; gap: 8px; border-bottom: 1px solid #ddd; align-items: center; width: 100%; box-sizing: border-box;";
    
    const savedKey = localStorage.getItem('fiyit_gemini_key') || "";
    
    managerDiv.innerHTML = `
        <span style="font-size:12px; font-weight:bold; color:#555; white-space:nowrap;">API Setup:</span>
        <input type="password" id="local-key-input" value="${savedKey}" placeholder="Paste AQ. key here" style="flex:1; padding:6px; border-radius:4px; border:1px solid #ccc; font-size:12px;">
        <button id="save-key-btn" style="background:#28a745; color:white; border:none; padding:6px 12px; border-radius:4px; font-size:12px; cursor:pointer; white-space:nowrap;">Save Key</button>
    `;
    
    chatContainer.parentNode.insertBefore(managerDiv, chatContainer);

    document.getElementById('save-key-btn').addEventListener('click', () => {
        const val = document.getElementById('local-key-input').value.trim();
        localStorage.setItem('fiyit_gemini_key', val);
        alert("🔒 Key saved locally to your device! Refreshing app...");
        window.location.reload();
    });
}

// 3. Display Messages
function appendMessage(sender, text) {
    if (!chatContainer) return;
    const messageDiv = document.createElement('div');
    // Supports both 'message user-message' structures
    messageDiv.className = `message ${sender === 'user' ? 'user-message' : 'ai-message'}`;
    messageDiv.innerText = text;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 4. API Request
async function fetchAIChatResponse(prompt) {
    const savedKey = localStorage.getItem('fiyit_gemini_key') || "";
    if (!savedKey) {
        return "⚠️ API Key Missing: Please paste your key in the Setup bar at the top of the chat first!";
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${savedKey}`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: `You are an AI study assistant for FIYIT platform helping Ethiopian students. Answer this clearly: ${prompt}` }]
                }]
            })
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error?.message || `Status ${response.status}`);
        }

        return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
    } catch (error) {
        return `⚠️ API Error: ${error.message}`;
    }
}

// 5. Action Handler
async function handleSendMessage() {
    if (!userInput) return;
    const text = userInput.value.trim();
    if (!text) return;

    appendMessage('user', text);
    userInput.value = '';

    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message ai-message';
    loadingDiv.innerText = "Thinking...";
    if (chatContainer) {
        chatContainer.appendChild(loadingDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    const aiResponse = await fetchAIChatResponse(text);
    loadingDiv.remove();
    appendMessage('ai', aiResponse);
}

// 6. Initialize Safely
if (chatContainer) {
    injectKeyManagerUI();
}

if (sendBtn && userInput) {
    sendBtn.addEventListener('click', handleSendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSendMessage();
    });
}
