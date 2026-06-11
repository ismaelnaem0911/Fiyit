// ==========================================
// FIYIT 2.0 - MASTER CONTROLLER (WITH LOGIN)
// ==========================================

const appRoot = document.getElementById('app-root');

// 1. AUTHENTICATION LOGIC
window.onload = () => {
    const user = localStorage.getItem('fiyit_user');
    if (!user) {
        renderLogin();
    } else {
        renderHome();
    }
};

function renderLogin() {
    appRoot.innerHTML = `
        <div class="login-overlay">
            <div class="card" style="margin: 20% auto; padding: 20px; max-width: 300px; background: white; color: black;">
                <h2>Login to FIYIT</h2>
                <input type="text" id="login-user" placeholder="Username" style="width: 100%; margin-bottom: 10px; padding: 8px;">
                <input type="password" id="login-pass" placeholder="Password" style="width: 100%; margin-bottom: 10px; padding: 8px;">
                <button onclick="handleLogin()" style="width: 100%; padding: 10px; background: #007bff; color: white; border: none; border-radius: 5px;">Sign In</button>
            </div>
        </div>
    `;
}

function handleLogin() {
    const user = document.getElementById('login-user').value;
    const pass = document.getElementById('login-pass').value;
    if (user && pass) {
        localStorage.setItem('fiyit_user', user);
        renderHome();
    } else {
        alert("Please enter a username and password.");
    }
}

// 2. ROUTING LOGIC
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
        <div class="welcome-text">Welcome, ${localStorage.getItem('fiyit_user')}! 👋</div>
        <div class="nav-grid">
            <div class="card" onclick="setView('books')">Books</div>
            <div class="card" onclick="setView('quiz')">Quiz</div>
            <div class="card" onclick="setView('progress')">Progress</div>
            <div class="card" onclick="setView('plan')">Plan</div>
        </div>
    `;
}
