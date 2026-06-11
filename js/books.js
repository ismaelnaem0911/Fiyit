// ==========================================
// FIYIT 2.0 - PREMIUM BOOKS MODULE
// ==========================================

// Helper function to keep code clean: returns SVG paths based on the type of card
function getPremiumSVG(type) {
    if (type === 'grade') {
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>`;
    }
    if (type === 'stream') {
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>`;
    }
    if (type === 'subject') {
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`;
    }
    // Default to Unit (Document Icon)
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`;
}

// Array of our neon classes to make lists look colorful
const neonColors = ['glow-blue', 'glow-green', 'glow-orange', 'glow-purple', 'glow-cyan', 'glow-yellow'];

function renderBooksHome() {
    appRoot.innerHTML = `
        <div class="header-section">Select Grade</div>
        <div class="nav-grid">
            ${[9, 10, 11, 12].map((g, index) => `
                <div class="card-wrapper ${neonColors[index % neonColors.length]}" onclick="selectGrade(${g})">
                    <div class="card-content">
                        <div class="card-icon-box">${getPremiumSVG('grade')}</div>
                        <span>Grade ${g}</span>
                    </div>
                </div>
            `).join('')}
        </div>
        <button class="back-btn" onclick="setView('home')">Back to Home</button>
    `;
}

function selectGrade(grade) {
    if (grade === 11 || grade === 12) {
        appRoot.innerHTML = `
            <div class="header-section">Select Stream (Grade ${grade})</div>
            <div class="nav-grid">
                <div class="card-wrapper glow-cyan" onclick="renderSubjects(${grade}, 'Natural')">
                    <div class="card-content">
                        <div class="card-icon-box">${getPremiumSVG('stream')}</div>
                        <span>Natural Science</span>
                    </div>
                </div>
                <div class="card-wrapper glow-orange" onclick="renderSubjects(${grade}, 'Social')">
                    <div class="card-content">
                        <div class="card-icon-box">${getPremiumSVG('stream')}</div>
                        <span>Social Science</span>
                    </div>
                </div>
            </div>
            <button class="back-btn" onclick="renderBooksHome()">Back to Grades</button>
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
        <div class="header-section">Grade ${grade} ${stream ? stream : ''} Subjects</div>
        <div class="nav-grid">
            ${subjects.map((sub, index) => `
                <div class="card-wrapper ${neonColors[index % neonColors.length]}" onclick="renderUnits('${sub}', ${grade}, '${stream || 'null'}')">
                    <div class="card-content">
                        <div class="card-icon-box">${getPremiumSVG('subject')}</div>
                        <span>${sub}</span>
                    </div>
                </div>
            `).join('')}
        </div>
        <button class="back-btn" onclick="renderBooksHome()">Back to Grades</button>
    `;
}

function renderUnits(subject, grade, stream) {
    const data = (stream !== 'null') ? 
                 (NationalCurriculum[grade].Common[subject] || NationalCurriculum[grade][stream][subject]) : 
                 NationalCurriculum[grade][subject];

    appRoot.innerHTML = `
        <div class="header-section">${subject} Units</div>
        <div class="nav-grid">
            ${data.map((unit, index) => `
                <div class="card-wrapper ${neonColors[index % neonColors.length]}" onclick="alert('Opening reading view for: ${unit}')">
                    <div class="card-content">
                        <div class="card-icon-box">${getPremiumSVG('unit')}</div>
                        <span>${unit}</span>
                    </div>
                </div>
            `).join('')}
        </div>
        <button class="back-btn" onclick="renderSubjects(${grade}, ${stream !== 'null' ? `'${stream}'` : null})">Back to Subjects</button>
    `;
}
