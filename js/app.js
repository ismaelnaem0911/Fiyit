// Strict State Management
const appState = {
    history: ['dashboard'], // Stack to track where we are
    currentMode: null, // books, quiz, progress, plan
    grade: null,
    stream: null,
    subject: null,
    unit: null,
    subUnit: null
};

const appRoot = document.getElementById('app-root');

// Main Router
function render() {
    const currentView = appState.history[appState.history.length - 1];
    
    if (currentView === 'dashboard') renderDashboard();
    else if (currentView === 'gradeSelection') renderGrades();
    else if (currentView === 'streamSelection') renderStreams();
    else if (currentView === 'subjectSelection') renderSubjects();
    else if (currentView === 'unitSelection') renderUnits();
    else if (currentView === 'aiContent') renderAiContent();
}

// Navigation Logic
function navigateTo(view) {
    appState.history.push(view);
    render();
}

function goBack() {
    if (appState.history.length > 1) {
        appState.history.pop();
        render();
    }
}

// --- Views --- //

function renderDashboard() {
    appRoot.innerHTML = `
        <header>
            <i class="ph ph-gear" style="font-size: 24px;"></i>
            <div class="logo">Fiyit</div>
            <i class="ph ph-user-circle" style="font-size: 28px;"></i>
        </header>
        <div class="welcome-text">Welcome, User! 👋</div>
        <div class="dashboard-grid">
            <div class="card books" onclick="handleModeSelection('books')">
                <div class="card-content"><i class="ph ph-book-bookmark"></i><span>Books</span></div>
            </div>
            <div class="card quiz" onclick="handleModeSelection('quiz')">
                <div class="card-content"><i class="ph ph-list-checks"></i><span>Quiz</span></div>
            </div>
            <div class="card progress" onclick="handleModeSelection('progress')">
                <div class="card-content"><i class="ph ph-trend-up"></i><span>Progress</span></div>
            </div>
            <div class="card plan" onclick="handleModeSelection('plan')">
                <div class="card-content"><i class="ph ph-calendar-blank"></i><span>Plan</span></div>
            </div>
        </div>
    `;
}

function handleModeSelection(mode) {
    appState.currentMode = mode;
    if (mode === 'books' || mode === 'quiz') {
        navigateTo('gradeSelection');
    } else {
        alert(`${mode.toUpperCase()} section coming soon!`);
    }
}

function renderGrades() {
    const grades = [9, 10, 11, 12];
    appRoot.innerHTML = `
        <header>
            <i class="ph ph-caret-left" onclick="goBack()" style="font-size: 28px;"></i>
            <h2>Select Grade</h2>
            <div style="width: 28px;"></div>
        </header>
        <div class="list-container">
            ${grades.map(g => `<div class="list-item" onclick="selectGrade(${g})">Grade ${g} <i class="ph ph-caret-right"></i></div>`).join('')}
        </div>
    `;
}

function selectGrade(g) {
    appState.grade = g;
    if (g === 11 || g === 12) navigateTo('streamSelection');
    else navigateTo('subjectSelection');
}

function renderStreams() {
    appRoot.innerHTML = `
        <header>
            <i class="ph ph-caret-left" onclick="goBack()" style="font-size: 28px;"></i>
            <h2>Select Stream</h2>
            <div style="width: 28px;"></div>
        </header>
        <div class="list-container">
            <div class="list-item" onclick="selectStream('Natural Science')">Natural Science <i class="ph ph-caret-right"></i></div>
            <div class="list-item" onclick="selectStream('Social Science')">Social Science <i class="ph ph-caret-right"></i></div>
        </div>
    `;
}

function selectStream(stream) {
    appState.stream = stream;
    navigateTo('subjectSelection');
}

function renderSubjects() {
    // Determine data path based on grade/stream
    let subjectsData;
    if (appState.grade === 11 || appState.grade === 12) {
        subjectsData = CURRICULUM_DATA[appState.grade][appState.stream];
    } else {
        subjectsData = CURRICULUM_DATA[appState.grade];
    }

    const subjectNames = Object.keys(subjectsData || {});

    appRoot.innerHTML = `
        <header>
            <i class="ph ph-caret-left" onclick="goBack()" style="font-size: 28px;"></i>
            <h2>Subjects</h2>
            <div style="width: 28px;"></div>
        </header>
        <div class="list-container">
            ${subjectNames.map(sub => `<div class="list-item" onclick="selectSubject('${sub}')">${sub} <i class="ph ph-caret-right"></i></div>`).join('')}
        </div>
    `;
}

function selectSubject(sub) {
    appState.subject = sub;
    navigateTo('unitSelection');
}

function renderUnits() {
    let unitsData;
    if (appState.grade >= 11) {
        unitsData = CURRICULUM_DATA[appState.grade][appState.stream][appState.subject];
    } else {
        unitsData = CURRICULUM_DATA[appState.grade][appState.subject];
    }

    const unitNames = Object.keys(unitsData || {});

    appRoot.innerHTML = `
        <header>
            <i class="ph ph-caret-left" onclick="goBack()" style="font-size: 28px;"></i>
            <h2>Units</h2>
            <div style="width: 28px;"></div>
        </header>
        <div class="list-container">
            ${unitNames.map(unit => `<div class="list-item" onclick="selectUnit('${unit}')">${unit} <i class="ph ph-caret-right"></i></div>`).join('')}
        </div>
    `;
}

function selectUnit(unit) {
    appState.unit = unit;
    navigateTo('aiContent');
}

// Golden Logic #1 & #3: AI Generates Content inside colorful container
function renderAiContent() {
    appRoot.innerHTML = `
        <header>
            <h2>AI Learning Mode</h2>
        </header>
        
        <div class="ai-container">
            <div class="ai-content-inner">
                <h3 style="color: var(--neon-blue); margin-bottom: 10px;">${appState.subject} - ${appState.unit}</h3>
                <p style="color: var(--text-muted); line-height: 1.6;">
                    [AI Generated Content goes here. The AI will explain what this unit means, why it matters, and how it works based on the sub-units.]
                </p>
                
                <div class="ai-buttons">
                    <button onclick="goBack()"><i class="ph ph-arrow-left"></i> Back</button>
                    <button onclick="alert('Generates next sub-unit')">Next <i class="ph ph-arrow-right"></i></button>
                    <button class="btn-quiz" onclick="alert('Generates quiz based on reading')">Take Quiz</button>
                </div>
            </div>
        </div>
    `;
}

// Initialize App
render();
