// Application State Management
let appState = {
    currentGrade: null,
    currentStream: null,
    currentSubject: null,
    currentUnit: null
};

// DOM Elements
const appRoot = document.getElementById('app-dynamic-view-root');
const settingsModal = document.getElementById('settings-overlay-modal');
const chatInput = document.getElementById('chat-text-input-field');
const chatSubmitBtn = document.getElementById('chat-submit-trigger-btn');
const chatStream = document.getElementById('chat-conversation-stream');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    renderGradesView();
    setupChatListeners();
});

// View Renderers
function renderGradesView() {
    appState = { currentGrade: null, currentStream: null, currentSubject: null, currentUnit: null };
    
    appRoot.innerHTML = `
        <h1 class="view-heading-title">Select Grade</h1>
        <div class="app-quad-grid">
            <button class="glowing-action-card card-books" onclick="handleGradeSelection('9')">
                <div class="card-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                </div>
                <span class="card-label-text">Grade 9</span>
            </button>
            <button class="glowing-action-card card-quiz" onclick="handleGradeSelection('10')">
                <div class="card-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                </div>
                <span class="card-label-text">Grade 10</span>
            </button>
            <button class="glowing-action-card card-plan" onclick="handleGradeSelection('11')">
                <div class="card-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                </div>
                <span class="card-label-text">Grade 11</span>
            </button>
            <button class="glowing-action-card card-progress" onclick="handleGradeSelection('12')">
                <div class="card-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                </div>
                <span class="card-label-text">Grade 12</span>
            </button>
        </div>
    `;
    addAIChatMessage("Please select your grade to begin.");
}

function handleGradeSelection(grade) {
    appState.currentGrade = grade;
    const gradeData = CURRICULUM_DATA[grade];

    if (gradeData.isStreamed) {
        renderStreamSelectionView();
    } else {
        renderSubjectsView(gradeData);
    }
}

function renderStreamSelectionView() {
    appRoot.innerHTML = `
        <h1 class="view-heading-title">Select Stream</h1>
        <div class="app-quad-grid">
            <button class="glowing-action-card card-books" onclick="handleStreamSelection('Natural Science')">
                <div class="card-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m14-6h2m-2 6h2M7 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"></path></svg>
                </div>
                <span class="card-label-text">Natural Science</span>
            </button>
            <button class="glowing-action-card card-quiz" onclick="handleStreamSelection('Social Science')">
                <div class="card-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <span class="card-label-text">Social Science</span>
            </button>
        </div>
        <button class="glowing-back-button" onclick="renderGradesView()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Grades
        </button>
    `;
    addAIChatMessage("Choose Natural Science or Social Science.");
}

function handleStreamSelection(stream) {
    appState.currentStream = stream;
    const subjects = CURRICULUM_DATA[appState.currentGrade].streams[stream];
    renderSubjectsView(subjects);
}

function renderSubjectsView(subjectsArray) {
    let listHtml = '<div class="app-vertical-list">';
    subjectsArray.forEach((sub, index) => {
        listHtml += `
            <div class="list-row-item" onclick="handleSubjectSelection(${index})" style="cursor: pointer;">
                <span class="list-row-item-title">${sub.subject}</span>
                <span class="list-row-item-desc">${sub.units.length} Units Available</span>
            </div>
        `;
    });
    listHtml += '</div>';

    const backAction = appState.currentStream ? 'renderStreamSelectionView()' : 'renderGradesView()';

    appRoot.innerHTML = `
        <h1 class="view-heading-title">Subjects</h1>
        ${listHtml}
        <button class="glowing-back-button" onclick="${backAction}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back
        </button>
    `;
}

function handleSubjectSelection(subjectIndex) {
    let subjectObj;
    if (appState.currentStream) {
        subjectObj = CURRICULUM_DATA[appState.currentGrade].streams[appState.currentStream][subjectIndex];
    } else {
        subjectObj = CURRICULUM_DATA[appState.currentGrade][subjectIndex];
    }
    appState.currentSubject = subjectObj;
    renderUnitsView(subjectObj);
}

function renderUnitsView(subjectObj) {
    let listHtml = '<div class="app-vertical-list">';
    subjectObj.units.forEach((unit, index) => {
        listHtml += `
            <div class="list-row-item" onclick="handleUnitSelection(${index})" style="cursor: pointer;">
                <span class="list-row-item-title">${unit.name}</span>
                <span class="list-row-item-desc">${unit.desc}</span>
            </div>
        `;
    });
    listHtml += '</div>';

    appRoot.innerHTML = `
        <h1 class="view-heading-title">${subjectObj.subject}</h1>
        ${listHtml}
        <button class="glowing-back-button" onclick="goBackToSubjects()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Subjects
        </button>
    `;
}

function goBackToSubjects() {
    if (appState.currentStream) {
        renderSubjectsView(CURRICULUM_DATA[appState.currentGrade].streams[appState.currentStream]);
    } else {
        renderSubjectsView(CURRICULUM_DATA[appState.currentGrade]);
    }
}

function handleUnitSelection(unitIndex) {
    appState.currentUnit = appState.currentSubject.units[unitIndex];
    
    // Render the exact 4 grid layout from the screenshot
    appRoot.innerHTML = `
        <h1 class="view-heading-title" style="font-size: 18px; line-height: 1.3;">${appState.currentUnit.name}</h1>
        <div class="app-quad-grid">
            <button class="glowing-action-card card-books" onclick="handleFeatureAction('Books')">
                <div class="card-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                </div>
                <span class="card-label-text">Books</span>
            </button>
            <button class="glowing-action-card card-quiz" onclick="handleFeatureAction('Quiz')">
                <div class="card-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <span class="card-label-text">Quiz</span>
            </button>
            <button class="glowing-action-card card-plan" onclick="handleFeatureAction('Progress')">
                <div class="card-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                </div>
                <span class="card-label-text">Progress</span>
            </button>
            <button class="glowing-action-card card-progress" onclick="handleFeatureAction('Plan')">
                <div class="card-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <span class="card-label-text">Plan</span>
            </button>
        </div>
        <button class="glowing-back-button" onclick="renderUnitsView(appState.currentSubject)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Units
        </button>
    `;
    addAIChatMessage(`You selected ${appState.currentUnit.name}. What would you like to do?`);
}

// Settings and Profile Modals
function openSettingsModal() {
    settingsModal.style.display = 'flex';
}

function closeSettingsModal() {
    settingsModal.style.display = 'none';
}

function handleSettingsOption(option) {
    closeSettingsModal();
    addAIChatMessage(`Settings: Opened ${option} panel. (Feature in development)`);
}

function openProfileTab() {
    addAIChatMessage("Profile management view triggered.");
}

// Bottom Action Triggers
function handleMicTrigger() {
    addAIChatMessage("Voice input triggered. Microphone access requested.");
}

function handlePlusTrigger() {
    addAIChatMessage("Attachment menu opened.");
}

// Chat Interface Logic
function setupChatListeners() {
    chatSubmitBtn.addEventListener('click', handleUserSubmit);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserSubmit();
        }
    });
}

function handleUserSubmit() {
    const text = chatInput.value.trim();
    if (!text) return;
    
    // Add user bubble
    const userRow = document.createElement('div');
    userRow.className = 'chat-bubble-row user-bubble-row';
    userRow.innerHTML = `<div class="chat-bubble user-bubble">${text}</div>`;
    chatStream.appendChild(userRow);
    
    chatInput.value = '';
    scrollToBottom();

    // Simulated AI response for UI testing without API
    setTimeout(() => {
        addAIChatMessage("Understood. Generating response based on curriculum data...");
    }, 800);
}

function addAIChatMessage(text) {
    const aiRow = document.createElement('div');
    aiRow.className = 'chat-bubble-row ai-bubble-row';
    aiRow.innerHTML = `<div class="chat-bubble ai-bubble">${text}</div>`;
    chatStream.appendChild(aiRow);
    scrollToBottom();
}

function scrollToBottom() {
    chatStream.scrollTop = chatStream.scrollHeight;
}
