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

// 1. Render the Grade Selection Screen
function renderBooksHome() {
    appRoot.innerHTML = `
        <div class="back-btn" onclick="setView('home')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            Back to Home
        </div>
        <div class="welcome-text">Select Grade 🎓</div>
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
        <div class="welcome-text">Grade ${grade} Subjects 📚</div>
        <div class="nav-grid">
    `;
    
    // Dynamically assign card colors so it looks premium
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
        <div class="welcome-text">${subject} (G${grade}) 📖</div>
        <div class="nav-grid" style="grid-template-columns: 1fr; gap: 12px;">
    `;
    
    curriculum[grade][subject].forEach(unit => {
        html += `
            <div class="card card-books" style="flex-direction: row; justify-content: flex-start; padding: 20px 15px;" onclick="alert('Opening ${unit}...')">
                <span style="color: var(--gemini-blue); margin-right: 10px; font-size: 20px;">📄</span> 
                <span>${unit}</span>
            </div>
        `;
    });
    
    html += `</div>`;
    appRoot.innerHTML = html;
}
