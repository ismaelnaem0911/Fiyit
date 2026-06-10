// js/app.js - FIYIT Live Chat & Local Key Storage // js/app.js - Simple & Clean
const MODEL_NAME = "gemini-1.5-flash";

async function handleSendMessage() {
    const userInput = document.getElementById('user-input');
    const chatContainer = document.getElementById('chat-container');
    const text = userInput.value.trim();
    if (!text) return;

    // Add user message to UI
    appendMessage('user', text);
    userInput.value = '';

    const savedKey = localStorage.getItem('fiyit_gemini_key');
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${savedKey}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: text }] }] })
        });
        const data = await response.json();
        const aiText = data.candidates[0].content.parts[0].text;
        appendMessage('ai', aiText);
    } catch (e) {
        appendMessage('ai', "Error: Check your API Key.");
    }
}

// Ensure your send button still has the event listener
document.getElementById('send-btn').addEventListener('click', handleSendMessage);
