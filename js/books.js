// ==========================================
// FIYIT 2.0 - BOOKS MODULE
// ==========================================

function renderBooksHome() {
    appRoot.innerHTML = `
        <div class="header-section"><h2>Select Your Grade</h2></div>
        <div class="nav-grid">
            ${[9, 10, 11, 12].map(grade => `
                <div class="card" onclick="selectGrade(${grade})">
                    <span>Grade ${grade}</span>
                </div>
            `).join('')}
        </div>
    `;
}

function selectGrade(grade) {
    if (grade === 11 || grade === 12) {
        // Ask for stream first
        appRoot.innerHTML = `
            <div class="header-section"><h2>Select Stream (Grade ${grade})</h2></div>
            <div class="nav-grid">
                <div class="card" onclick="renderSubjects(${grade}, 'Natural')"><span>Natural Sciences</span></div>
                <div class="card" onclick="renderSubjects(${grade}, 'Social')"><span>Social Sciences</span></div>
            </div>
        `;
    } else {
        // Go straight to subjects for 9 and 10
        renderSubjects(grade, null);
    }
}

function renderSubjects(grade, stream) {
    let subjects = [];
    if (stream) {
        // Combine Common + Stream specific
        const common = NationalCurriculum[grade].Common;
        const streamData = NationalCurriculum[grade][stream];
        subjects = [...Object.keys(common), ...Object.keys(streamData)];
    } else {
        subjects = Object.keys(NationalCurriculum[grade]);
    }

    appRoot.innerHTML = `
        <div class="header-section"><h2>Subjects - Grade ${grade} ${stream ? '(' + stream + ')' : ''}</h2></div>
        <div class="nav-grid">
            ${subjects.map(sub => `
                <div class="card" onclick="alert('Opening ${sub}...')">
                    <span>${sub}</span>
                </div>
            `).join('')}
        </div>
        <button class="back-btn" onclick="renderBooksHome()">Back</button>
    `;
}
