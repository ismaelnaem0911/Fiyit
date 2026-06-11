// ==========================================
// FIYIT 2.0 - FEATURE MODULES
// ==========================================

// Shared Icons
const backIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 5px;"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>`;
const checkIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 8px;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;
const chartIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="color: var(--gemini-green); margin-right: 12px;"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`;
const rocketIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="color: var(--gemini-blue); margin-right: 12px;"><path d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19zM5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5zM21.61 2.39C21.61 2.39 16.66 .269 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.79 17.45 10.61 17.63 11.36 17.35C13.47 16.5 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39z"/></svg>`;
const calendarIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 8px;"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>`;
const clockIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="color: var(--gemini-purple); margin-right: 12px;"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`;
const targetIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="color: var(--gemini-orange); margin-right: 12px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>`;
const trendingIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 8px;"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>`;
const flameIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="color: var(--gemini-orange); margin-right: 12px;"><path d="M11.71 1.29a.998.998 0 00-1.42 0c-3.32 3.32-4.29 5.86-4.29 8.21 0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.35-.97-4.89-4.29-8.21zm-1.42 12.3c-.6-.6-.94-1.39-.94-2.24 0-1.12.59-2.34 1.65-3.56.32-.37.89-.37 1.22 0 1.06 1.22 1.65 2.44 1.65 3.56 0 .85-.34 1.64-.94 2.24-.6.6-1.39.94-2.24.94s-1.64-.34-2.24-.94z"/></svg>`;
const trophyIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="color: var(--gemini-blue); margin-right: 12px;"><path d="M19 5h-2V3c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-3.96C19.08 11.63 21 9.55 21 7V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>`;

function renderQuiz() {
    appRoot.innerHTML = `
        <div class="back-btn" onclick="setView('home')">${backIcon} Back to Home</div>
        <div class="welcome-text">${checkIcon}Quizzes</div>
        <div class="nav-grid" style="grid-template-columns: 1fr; gap: 12px;">
            <div class="card card-quiz" style="flex-direction: row; justify-content: flex-start; padding: 20px;" onclick="alert('Starting Daily Challenge...')">
                ${rocketIcon}
                <span>Daily AI Challenge</span>
            </div>
            <div class="card card-books" style="flex-direction: row; justify-content: flex-start; padding: 20px;" onclick="alert('Loading History...')">
                ${chartIcon}
                <span>Past Results</span>
            </div>
        </div>
    `;
}

function renderPlan() {
    appRoot.innerHTML = `
        <div class="back-btn" onclick="setView('home')">${backIcon} Back to Home</div>
        <div class="welcome-text">${calendarIcon}Study Plan</div>
        <div class="nav-grid" style="grid-template-columns: 1fr; gap: 12px;">
            <div class="card card-plan" style="flex-direction: row; justify-content: flex-start; padding: 20px;">
                ${clockIcon}
                <span>Weekly Schedule</span>
            </div>
            <div class="card card-progress" style="flex-direction: row; justify-content: flex-start; padding: 20px;">
                ${targetIcon}
                <span>Set New Goal</span>
            </div>
        </div>
    `;
}

function renderProgress() {
    appRoot.innerHTML = `
        <div class="back-btn" onclick="setView('home')">${backIcon} Back to Home</div>
        <div class="welcome-text">${trendingIcon}Progress</div>
        <div class="nav-grid" style="grid-template-columns: 1fr; gap: 12px;">
            <div class="card card-progress" style="flex-direction: row; justify-content: flex-start; padding: 20px;">
                ${flameIcon}
                <span>7 Day Streak!</span>
            </div>
            <div class="card card-books" style="flex-direction: row; justify-content: flex-start; padding: 20px;">
                ${trophyIcon}
                <span>View Badges</span>
            </div>
        </div>
    `;
}
