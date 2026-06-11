// FIYIT 2.0 - Core Navigation Brain
const appRoot = document.getElementById('app-root');

// Main navigation function
function setView(viewName) {
    // This is where we load the dynamic content
    switch(viewName) {
        case 'home':
            renderHome();
            break;
        case 'books':
            loadPage('books.html');
            break;
        case 'quiz':
            loadPage('quiz.html');
            break;
        case 'plan':
            loadPage('plan.html');
            break;
        case 'progress':
            loadPage('progress.html');
            break;
        default:
            renderHome();
    }
}

// Function to render the home grid
function renderHome() {
    appRoot.innerHTML = `
        <h1 class="welcome-text">Welcome, User! 👋</h1>
        <div class="nav-grid">
            <div class="card card-books" onclick="setView('books')">📚 My Books</div>
            <div class="card card-quiz" onclick="setView('quiz')">📝 Quizzes</div>
            <div class="card card-plan" onclick="setView('plan')">📅 My Plan</div>
            <div class="card card-progress" onclick="setView('progress')">📈 Progress</div>
        </div>
    `;
}

// Function to load external HTML pages into the root
async function loadPage(pageName) {
    try {
        const response = await fetch(`pages/${pageName}`);
        const html = await response.text();
        appRoot.innerHTML = `<div class="back-btn" onclick="setView('home')">← Back</div>` + html;
    } catch (error) {
        console.error("Could not load page:", error);
    }
}

// Initialize on load
renderHome();
