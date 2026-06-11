// ==========================================
// FIYIT 2.0 - HIGH SCHOOL LIBRARY (Grades 9-12)
// ==========================================

const curriculum = {
    9: {
        "Mathematics": ["Unit 1: The Number System", "Unit 2: Algebra", "Unit 3: Geometry"],
        "Physics": ["Unit 1: Vectors & Kinematics", "Unit 2: Dynamics", "Unit 3: Work & Energy"],
        "Biology": ["Unit 1: Biology & Technology", "Unit 2: Cell Biology"]
    },
    10: {
        "Mathematics": ["Unit 1: Relations & Functions", "Unit 2: Polynomials", "Unit 3: Exponential"],
        "Chemistry": ["Unit 1: Introduction to Organic Chemistry", "Unit 2: Hydrocarbons"],
        "English": ["Unit 1: Education", "Unit 2: Traditional Practices"]
    },
    11: {
        "Mathematics": ["Unit 1: Coordinate Geometry", "Unit 2: Reasoning", "Unit 3: Statistics"],
        "Physics": ["Unit 1: Thermodynamics", "Unit 2: Oscillations & Waves"],
        "Biology": ["Unit 1: The Science of Biology", "Unit 2: Biochemical Molecules"]
    },
    12: {
        "Mathematics": ["Unit 1: Sequences & Series", "Unit 2: Intro to Calculus"],
        "Chemistry": ["Unit 1: Solutions", "Unit 2: Acid-Base Equilibria"],
        "English": ["Unit 1: Family Life", "Unit 2: Communication"]
    }
};

const iconCap = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 8px;"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z"/></svg>`;
const iconBooks = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 8px;"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/></svg>`;
const iconDoc = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="color: var(--gemini-blue); margin-right: 12px; flex-shrink: 0;"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>`;

// 1. Render the Grade Selection Screen
function renderBooksHome() {
    appRoot.innerHTML = `
        <div class="back-btn" onclick="setView('home')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            Back to Home
        </div>
        <div class="welcome-text">${iconCap}Select Grade</div>
        <div class="nav-grid">
            <div class="card card-books" onclick="selectGrade(9)">
                <div class="card-badge" style="font-size: 24px; font-weight: 800;">9</div>
                <span>Grade 9</span>
            </div>
            <div class="card card-quiz" onclick="selectGrade(10)">
                <div class="card-badge" style="font-size: 24px; font-weight: 800;">10</div>
                <span>Grade 10</span>
            </div>
            <div class="card card-progress" onclick="selectGrade(11)">
                <div class="card-badge" style="font-size: 24px; font-weight: 800;">11</div>
                <span>Grade 11</span>
            </div>
            <div class="card card-plan" onclick="selectGrade(12)">
                <div class="card-badge" style="font-size: 24px; font-weight: 800;">12</div>
                <span>Grade 12</span>
            </div>
        </div>
    `;
}

// 2. Render Subjects for a specific grade
function selectGrade(grade) {
    let html = `
        <div class="back-btn" onclick="renderBooksHome()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            Back to Grades
        </div>
        <div class="welcome-text">${iconBooks}Grade ${grade} Subjects</div>
        <div class="nav-grid">
    `;
    
    const styles = ['card-books', 'card-quiz', 'card-progress', 'card-plan'];
    
    Object.keys(curriculum[grade]).forEach((subject, index) => {
        let styleClass = styles[index % styles.length];
        html += `
            <div class="card ${styleClass}" onclick="selectSubject(${grade}, '${subject}')">
                <span>${subject}</span>
            </div>
        `;
    });
    
    html += `</div>`;
    appRoot.innerHTML = html;
}

// 3. Render Units for a specific subject
function selectSubject(grade, subject) {
    let html = `
        <div class="back-btn" onclick="selectGrade(${grade})">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            Back to Subjects
        </div>
        <div class="welcome-text">${iconBooks}${subject} (G${grade})</div>
        <div class="nav-grid" style="grid-template-columns: 1fr; gap: 12px;">
    `;
    
    curriculum[grade][subject].forEach(unit => {
        html += `
            <div class="card card-books" style="flex-direction: row; justify-content: flex-start; padding: 20px 15px;" onclick="alert('Opening ${unit}...')">
                ${iconDoc}
                <span style="text-align: left;">${unit}</span>
            </div>
        `;
    });
    
    html += `</div>`;
    appRoot.innerHTML = html;
}
