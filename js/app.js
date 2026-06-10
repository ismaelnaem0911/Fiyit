// js/app.js - FIYIT Live Chat & Local Key Storage Manager

const MODEL_NAME = "gemini-1.5-flash";

const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Create a secure configuration utility on the screen dynamically
function injectKeyManagerUI() {
    const existingManager = document.getElementById('key-manager-ui');
    if (existingManager) return;

    const managerDiv = document.createElement('div');
    managerDiv.id = 'key-manager-ui';
    managerDiv.style = "background: #f1f3f4; padding: 10px; display: flex; gap: 8px; border-bottom: 1px solid #ddd; align-items: center;";
    
    const savedKey = localStorage.getItem('fiyit_gemini_key') || "";
    
    managerDiv.innerHTML = `
        <span style="font-size:12px; font-weight:bold; color:#555;">API Setup:</span>
        <input type="password" id="local-key-input" value="${savedKey}" placeholder="Paste AQ. or AIzaSy key here" style="flex:1; padding:6px; border-radius:4px; border:1px solid #ccc; font-size:12px;">
        <button id="save-key-btn" style="background:#28a745; color:white; border:none; padding:6px 12px; border-radius:4px; font-size:12px; cursor:pointer;">Save Key</button>
    `;
    
    chatContainer.parentNode.insertBefore(managerDiv, chatContainer);

    document.getElementById('save-key-btn').addEventListener('click', () => {
        const val = document.getElementById('local-key-input').value.trim();
        localStorage.setItem('fiyit_gemini_key', val);
        alert("🔒 Key saved locally to your device! Refreshing app...");
        window.location.reload();
    });
}

function appendMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');
    messageDiv.innerText = text;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

async function fetchAIChatResponse(prompt) {
    const savedKey = localStorage.getItem('fiyit_gemini_key') || "";
    if (!savedKey) {
        return "⚠️ Setup Error: Please paste and save your Gemini API Key in the field above first.";
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${savedKey}`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: `You are an AI study assistant for FIYIT platform helping Ethiopian students. Answer this concisely: ${prompt}` }]
                }]
            })
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error?.message || `Error status: ${response.status}`);
        }

        return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response text found.";
    } catch (error) {
        return `⚠️ Live Error: ${error.message}`;
    }
}

async function handleSendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    appendMessage('user', text);
    userInput.value = '';

    const loadingDiv = document.createElement('div');
    loadingDiv.classList.add('message', 'ai-message');
    loadingDiv.innerText = "Thinking...";
    chatContainer.appendChild(loadingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    const aiResponse = await fetchAIChatResponse(text);
    loadingDiv.remove();
    appendMessage('ai', aiResponse);
}

// Start configurations on load
injectKeyManagerUI();
sendBtn.addEventListener('click', handleSendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSendMessage();
});
