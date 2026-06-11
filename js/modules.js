// FIYIT 2.0 - Features Logic
function renderQuiz() {
    appRoot.innerHTML = `
        <div class="back-btn" onclick="setView('home')">← Back</div>
        <h2>Quiz Section</h2>
        <div class="nav-grid">
            <div class="card" onclick="alert('Starting Quiz...')">Daily Challenge</div>
            <div class="card" onclick="alert('History...')">Past Quizzes</div>
        </div>
    `;
}

function renderPlan() {
    appRoot.innerHTML = `
        <div class="back-btn" onclick="setView('home')">← Back</div>
        <h2>My Study Plan</h2>
        <div class="nav-grid">
            <div class="card">Weekly Schedule</div>
            <div class="card">Set Goal</div>
        </div>
    `;
}

function renderProgress() {
    appRoot.innerHTML = `
        <div class="back-btn" onclick="setView('home')">← Back</div>
        <h2>Your Progress</h2>
        <div class="nav-grid">
            <div class="card">Stats Overview</div>
            <div class="card">Achievements</div>
        </div>
    `;
}
