// Feature Action Handler for the 4 Main Module Buttons
// This script intercepts the clicks on Books, Quiz, Progress, and Plan.

function handleFeatureAction(featureName) {
    if (!appState.currentUnit) {
        console.error("No unit selected for feature action.");
        return;
    }

    const unitName = appState.currentUnit.name;
    const subjectName = appState.currentSubject.subject;

    switch(featureName) {
        case 'Books':
            loadBooksView(unitName, subjectName);
            break;
        case 'Quiz':
            loadQuizView(unitName, subjectName);
            break;
        case 'Progress':
            loadProgressView(unitName, subjectName);
            break;
        case 'Plan':
            loadPlanView(unitName, subjectName);
            break;
        default:
            console.warn("Unknown feature triggered:", featureName);
    }
}

function loadBooksView(unit, subject) {
    // Renders the study material layout
    const appRoot = document.getElementById('app-dynamic-view-root');
    appRoot.innerHTML = `
        <h1 class="view-heading-title">Study Materials</h1>
        <div class="app-vertical-list">
            <div class="list-row-item">
                <span class="list-row-item-title">Chapter Summary</span>
                <span class="list-row-item-desc">Concise notes for ${unit}</span>
            </div>
            <div class="list-row-item">
                <span class="list-row-item-title">Full Textbook PDF</span>
                <span class="list-row-item-desc">Official Ministry of Education standard</span>
            </div>
        </div>
        <button class="glowing-back-button" onclick="handleUnitSelection(appState.currentSubject.units.indexOf(appState.currentUnit))">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Tools
        </button>
    `;
    
    if (typeof addAIChatMessage === "function") {
        addAIChatMessage(`Loading reading materials for ${subject}: ${unit}.`);
    }
}

function loadQuizView(unit, subject) {
    const appRoot = document.getElementById('app-dynamic-view-root');
    appRoot.innerHTML = `
        <h1 class="view-heading-title">Assessment</h1>
        <div class="app-vertical-list">
            <div class="list-row-item">
                <span class="list-row-item-title">Start Practice Quiz</span>
                <span class="list-row-item-desc">10 multiple choice questions</span>
            </div>
            <div class="list-row-item">
                <span class="list-row-item-title">Past National Exams</span>
                <span class="list-row-item-desc">Questions relevant to ${unit}</span>
            </div>
        </div>
        <button class="glowing-back-button" onclick="handleUnitSelection(appState.currentSubject.units.indexOf(appState.currentUnit))">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Tools
        </button>
    `;
    if (typeof addAIChatMessage === "function") {
        addAIChatMessage("Ready to test your knowledge?");
    }
}

function loadProgressView(unit, subject) {
    const appRoot = document.getElementById('app-dynamic-view-root');
    appRoot.innerHTML = `
        <h1 class="view-heading-title">Performance Analytics</h1>
        <div class="app-vertical-list">
            <div class="list-row-item">
                <span class="list-row-item-title">Current Mastery</span>
                <span class="list-row-item-desc">You have completed 0% of this unit.</span>
            </div>
        </div>
        <button class="glowing-back-button" onclick="handleUnitSelection(appState.currentSubject.units.indexOf(appState.currentUnit))">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Tools
        </button>
    `;
    if (typeof addAIChatMessage === "function") {
        addAIChatMessage("Here is your progress data.");
    }
}

function loadPlanView(unit, subject) {
    const appRoot = document.getElementById('app-dynamic-view-root');
    appRoot.innerHTML = `
        <h1 class="view-heading-title">Study Planner</h1>
        <div class="app-vertical-list">
            <div class="list-row-item">
                <span class="list-row-item-title">Generate Schedule</span>
                <span class="list-row-item-desc">AI will plan your study sessions for ${unit}</span>
            </div>
        </div>
        <button class="glowing-back-button" onclick="handleUnitSelection(appState.currentSubject.units.indexOf(appState.currentUnit))">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Tools
        </button>
    `;
    if (typeof addAIChatMessage === "function") {
        addAIChatMessage("Let's build a timeline for your studies.");
    }
}
