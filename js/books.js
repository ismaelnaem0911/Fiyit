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
        appRoot.innerHTML = `
            <div class="header-section"><h2>Select Stream (Grade ${grade})</h2></div>
            <div class="nav-grid">
                <div class="card" onclick="renderSubjects(${grade}, 'Natural')"><span>Natural Sciences</span></div>
                <div class="card" onclick="renderSubjects(${grade}, 'Social')"><span>Social Sciences</span></div>
            </div>
            <button class="back-btn" onclick="renderBooksHome()">Back</button>
        `;
    } else {
        renderSubjects(grade, null);
    }
}

function renderSubjects(grade, stream) {
    let subjects = [];
    if (stream) {
        const common = NationalCurriculum[grade].Common;
        const streamData = NationalCurriculum[grade][stream];
        subjects = [...Object.keys(common), ...Object.keys(streamData)];
    } else {
        subjects = Object.keys(NationalCurriculum[grade]);
    }

    appRoot.innerHTML = `
        <div class="header-section"><h2>Subjects</h2></div>
        <div class="nav-grid">
            ${subjects.map(sub => `
                <div class="card" onclick="renderUnits('${sub}', ${grade}, '${stream || 'null'}')">
                    <span>${sub}</span>
                </div>
            `).join('')}
        </div>
        <button class="back-btn" onclick="renderBooksHome()">Back</button>
    `;
}

function renderUnits(subject, grade, stream) {
    // Logic to find the unit list based on grade/stream/subject
    const data = (stream !== 'null') ? 
                 (NationalCurriculum[grade].Common[subject] || NationalCurriculum[grade][stream][subject]) : 
                 NationalCurriculum[grade][subject];

    appRoot.innerHTML = `
        <div class="header-section"><h2>${subject} Units</h2></div>
        <div class="nav-grid">
            ${data.map(unit => `
                <div class="card" onclick="renderUnitContent('${unit}')">
                    <span>${unit}</span>
                </div>
            `).join('')}
        </div>
        <button class="back-btn" onclick="renderSubjects(${grade}, ${stream !== 'null' ? `'${stream}'` : null})">Back</button>
    `;
}

function renderUnitContent(unitName) {
    // This is the Reading View
    appRoot.innerHTML = `
        <div class="header-section"><h2>${unitName}</h2></div>
        <div class="content-box" style="padding:20px; color:white;">
            <p>Here is the content for ${unitName}... (AI will generate this later).</p>
        </div>
        <button class="start-quiz-btn" onclick="startQuizFromUnit('${unitName}')">Start Quiz</button>
    `;
}

function startQuizFromUnit(unitName) {
    // Save the unit so the quiz engine knows what to generate
    localStorage.setItem('activeUnit', unitName);
    setView('quiz');
}
