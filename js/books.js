// FIYIT 2.0 - Books Curriculum Logic

// This is where we store the data structure
const curriculum = {
    6: {
        "Oromia": ["Mathematics", "English", "Science"],
        "Addis": ["Mathematics", "English", "Science"]
    },
    7: {
        "Oromia": ["Mathematics", "English", "Science"],
        "Addis": ["Mathematics", "English", "Science"]
    }
};

// Function to handle book selection flow
function selectGrade(grade) {
    let html = `<h2>Select Region</h2><div class="nav-grid">`;
    // Logic to show regions based on grade
    Object.keys(curriculum[grade]).forEach(region => {
        html += `<div class="card" onclick="selectRegion(${grade}, '${region}')">${region}</div>`;
    });
    html += `</div>`;
    appRoot.innerHTML = `<div class="back-btn" onclick="setView('home')">← Back</div>` + html;
}

function selectRegion(grade, region) {
    let html = `<h2>Select Subject</h2><div class="nav-grid">`;
    curriculum[grade][region].forEach(subject => {
        html += `<div class="card" onclick="alert('Loading ${subject}...')">${subject}</div>`;
    });
    html += `</div>`;
    appRoot.innerHTML = `<div class="back-btn" onclick="selectGrade(${grade})">← Back</div>` + html;
}
