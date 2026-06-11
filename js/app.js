const appRoot = document.getElementById('app-root');

// SVG Path Helpers
const iconBooks = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`;
const iconQuiz = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`;
const iconProgress = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`;
const iconPlan = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;

window.onload = () => {
    renderHome();
    setupChat();
};

function setupChat() {
    const sendBtn = document.getElementById('send-trigger');
    const input = document.getElementById('user-chat-input');
    const stream = document.getElementById('chat-stream');

    const sendMsg = () => {
        if(input.value.trim() !== "") {
            const div = document.createElement('div');
            div.className = 'msg user';
            div.textContent = input.value;
            stream.appendChild(div);
            input.value = "";
            stream.scrollTop = stream.scrollHeight; // Auto scroll
        }
    };

    sendBtn.onclick = sendMsg;
}

function renderHome() {
    appRoot.innerHTML = `
        <div class="welcome-text">Welcome, User! 👋</div>
        <div class="nav-grid">
            <div class="card-wrapper glow-blue" onclick="setView('books')">
                <div class="card-content">
                    <div class="card-icon-box">${iconBooks}</div>
                    <span>My Books</span>
                </div>
            </div>
            
            <div class="card-wrapper glow-green" onclick="alert('Quiz Section Coming Soon')">
                <div class="card-content">
                    <div class="card-icon-box">${iconQuiz}</div>
                    <span>Quizzes</span>
                </div>
            </div>

            <div class="card-wrapper glow-yellow" onclick="alert('Plan Section Coming Soon')">
                <div class="card-content">
                    <div class="card-icon-box">${iconPlan}</div>
                    <span>My Plan</span>
                </div>
            </div>

            <div class="card-wrapper glow-purple" onclick="alert('Progress Section Coming Soon')">
                <div class="card-content">
                    <div class="card-icon-box">${iconProgress}</div>
                    <span>Progress</span>
                </div>
            </div>
        </div>
    `;
}

function setView(view) {
    if(view === 'home') renderHome();
    else if(view === 'books') renderBooksHome();
}
