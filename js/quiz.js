// ==========================================
// FIYIT 2.0 - QUIZ ENGINE
// ==========================================

let currentQ = 0;
let score = 0;

function renderQuiz() {
    const activeUnit = localStorage.getItem('activeUnit');
    
    if (!activeUnit) {
        appRoot.innerHTML = `<h2>Please select a unit from Books first!</h2><button onclick="setView('books')">Go to Books</button>`;
        return;
    }

    // Mock questions based on the selected unit
    const questions = [
        { q: `Question 1 about ${activeUnit}?`, a: ["Correct", "Wrong", "Wrong"], correct: 0 },
        { q: `Question 2 about ${activeUnit}?`, a: ["Wrong", "Correct", "Wrong"], correct: 1 }
    ];

    const q = questions[currentQ];
    
    appRoot.innerHTML = `
        <div class="quiz-header">Quiz: ${activeUnit}</div>
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
    buttons.forEach(b => b.disabled = true);
    
    if (selected === correct) {
        buttons[selected].style.background = "#4CAF50";
        score++;
    } else {
        buttons[selected].style.background = "#F44336";
        buttons[correct].style.background = "#4CAF50";
    }

    setTimeout(() => {
        currentQ++;
        if (currentQ < 2) {
            renderQuiz();
        } else {
            appRoot.innerHTML = `<h2>Finished! Score: ${score}</h2><button onclick="renderHome()">Home</button>`;
        }
    }, 1500);
}
