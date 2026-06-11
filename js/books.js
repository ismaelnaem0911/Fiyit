const iconGrade = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`;

const neonArray = ['glow-blue', 'glow-green', 'glow-orange', 'glow-purple', 'glow-yellow'];

function renderBooksHome() {
    appRoot.innerHTML = `
        <div class="header-section">Select Your Grade</div>
        <div class="nav-grid">
            ${[9, 10, 11, 12].map((g, i) => `
                <div class="card-wrapper ${neonArray[i]}" onclick="renderSubjects(${g})">
                    <div class="card-content">
                        <div class="card-icon-box">${iconGrade}</div>
                        <span>Grade ${g}</span>
                    </div>
                </div>
            `).join('')}
        </div>
        <button class="back-btn" onclick="setView('home')">⬅ Back to Home</button>
    `;
}

function renderSubjects(grade) {
    // Fallback if data.js isn't ready, so it doesn't crash
    const subjects = ['Math', 'English', 'Physics', 'Biology', 'Chemistry']; 

    appRoot.innerHTML = `
        <div class="header-section">Grade ${grade} Subjects</div>
        <div class="nav-grid">
            ${subjects.map((sub, i) => `
                <div class="card-wrapper ${neonArray[i % 5]}" onclick="renderUnits('${sub}', ${grade})">
                    <div class="card-content">
                        <div class="card-icon-box">${iconBooks}</div>
                        <span>${sub}</span>
                    </div>
                </div>
            `).join('')}
        </div>
        <button class="back-btn" onclick="renderBooksHome()">⬅ Back to Grades</button>
    `;
}

function renderUnits(subject, grade) {
    const units = ['Unit 1: Intro', 'Unit 2: Basics', 'Unit 3: Advanced'];

    appRoot.innerHTML = `
        <div class="header-section">${subject} (Grade ${grade})</div>
        <div class="nav-grid">
            ${units.map((unit, i) => `
                <div class="card-wrapper ${neonArray[i % 5]}" onclick="alert('Opening unit...')">
                    <div class="card-content">
                        <div class="card-icon-box">${iconQuiz}</div>
                        <span>${unit}</span>
                    </div>
                </div>
            `).join('')}
        </div>
        <button class="back-btn" onclick="renderSubjects(${grade})">⬅ Back to Subjects</button>
    `;
}
