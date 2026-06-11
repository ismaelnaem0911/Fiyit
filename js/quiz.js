// ==========================================
// FIYIT 2.0 - QUIZ ENGINE
// ==========================================

let currentQ = 0;
let score = 0;

function renderQuiz() {
    // For demo, we'll pull from our NationalCurriculum data
    const questions = [
        { q: "What is the capital of Ethiopia?", a: ["Addis Ababa", "Nairobi", "Cairo"], correct: 0 },
        { q: "Which is a core subject in Grade 11?", a: ["Mathematics", "History", "Physics"], correct: 0 }
    ];

    const q = questions[currentQ];
    
    appRoot.innerHTML = `
        <div class="quiz-header">Question ${currentQ + 1} / ${questions.length}</div>
        <div class="question-box">${q.q}</div>
        <div class="options-grid">
            ${q.a.map((opt, i) => `
                <button class="opt-btn" onclick="checkAnswer(${i}, ${q.correct})">${opt}</button>
            `).join('')}
        </div>
    `;
}

function checkAnswer(selected, correct) {
    const buttons = document.querySelectorAll('.opt-btn');
    
    // Disable all buttons so user can't spam
    buttons.forEach(b => b.disabled = true);
    
    if (selected === correct) {
        buttons[selected].style.background = "#4CAF50"; // Green for success
        score++;
    } else {
        buttons[selected].style.background = "#F44336"; // Red for fail
        buttons[correct].style.background = "#4CAF50";  // Highlight correct
    }

    // Auto-transition after 1 second
    setTimeout(() => {
        currentQ++;
        if (currentQ < 2) {
            renderQuiz();
        } else {
            appRoot.innerHTML = `<h2>Quiz Finished! Score: ${score}</h2><button onclick="renderHome()">Go Home</button>`;
        }
    }, 1000);
}
