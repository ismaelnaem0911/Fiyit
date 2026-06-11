// ==========================================
// FIYIT 2.0 - MASTER CONTROLLER (GEMINI UI)
// ==========================================

const appRoot = document.getElementById('app-root');

// Main Router: Switches the top half of the screen seamlessly
function setView(viewName) {
    appRoot.innerHTML = '';
    
    switch(viewName) {
        case 'home': renderHome(); break;
        case 'books': renderBooksHome(); break;
        case 'quiz': renderQuiz(); break;
        case 'plan': renderPlan(); break;
        case 'progress': renderProgress(); break;
        default: renderHome();
    }
}

function renderHome() {
    appRoot.innerHTML = `
        <div class="welcome-text">Welcome, User! 👋</div>
        <div class="nav-grid">
            <div class="card card-books" onclick="setView('books')">
                <div class="card-badge"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/></svg></div>
                <span>Books</span>
            </div>
            <div class="card card-quiz" onclick="setView('quiz')">
                <div class="card-badge"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg></div>
                <span>Quiz</span>
            </div>
            <div class="card card-progress" onclick="setView('progress')">
                <div class="card-badge"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg></div>
                <span>Progress</span>
            </div>
            <div class="card card-plan" onclick="setView('plan')">
                <div class="card-badge"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg></div>
                <span>Plan</span>
            </div>
        </div>
    `;
}

window.onload = () => {
    renderHome();
    
    const sendBtn = document.getElementById('send-trigger');
    const chatInput = document.getElementById('user-chat-input');
    const chatStream = document.getElementById('chat-stream');

    if (sendBtn && chatInput && chatStream) {
        const sendMessage = () => {
            const text = chatInput.value.trim();
            if (text) {
                const userMsg = document.createElement('div');
                userMsg.className = 'chat-bubble';
                userMsg.style.alignSelf = 'flex-start';
                userMsg.textContent = text;
                chatStream.appendChild(userMsg);
                chatInput.value = '';
                chatStream.scrollTop = chatStream.scrollHeight;
            }
        };
        sendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
    }
};
