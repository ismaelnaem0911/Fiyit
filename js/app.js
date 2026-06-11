// ============================================
// FIYIT — app.js
// Interactive Curriculum Explorer UI
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main-content");

    // Guard rail safety: make sure the main element and curriculum object exist
    if (!mainContent) {
        console.error("Error: Element with ID 'main-content' not found in HTML.");
        return;
    }

    if (!window.CURRICULUM_DATA) {
        mainContent.innerHTML = `<p style="color: #ff4d4d; padding: 20px;">Error: Curriculum data failed to load. Check that data.js runs correctly.</p>`;
        return;
    }

    // Initialize UI Rendering
    renderDashboard(window.CURRICULUM_DATA);
});

/**
 * Main dashboard renderer that loops through curriculum levels
 */
function renderDashboard(data) {
    const mainContent = document.getElementById("main-content");
    let htmlOutput = "";

    // Loop through each grade level (9, 10, 11, 12)
    for (const grade in data) {
        const gradeInfo = data[grade];
        
        htmlOutput += `
            <section class="grade-section" style="margin-bottom: 40px; border-bottom: 1px solid #333; padding-bottom: 20px;">
                <h2 class="grade-title" style="color: #00adb5; font-size: 1.8rem; margin-bottom: 15px;">Grade ${grade} Curriculum</h2>
        `;

        if (!gradeInfo.hasStream) {
            // General Stream (Grades 9 & 10)
            htmlOutput += `<div class="subjects-grid" style="display: grid; gap: 15px; margin-top: 10px;">`;
            htmlOutput += buildSubjectsHTML(gradeInfo.subjects);
            htmlOutput += `</div>`;
        } else {
            // Streamed Grade (Grades 11 & 12)
            for (const streamName in gradeInfo.streams) {
                const cleanStreamName = streamName.charAt(0).toUpperCase() + streamName.slice(1);
                htmlOutput += `
                    <div class="stream-container" style="margin-top: 20px; padding-left: 15px; border-left: 3px solid #00adb5;">
                        <h3 class="stream-title" style="color: #ffde59; font-size: 1.3rem; margin-bottom: 10px;">${cleanStreamName} Stream</h3>
                        <div class="subjects-grid" style="display: grid; gap: 15px;">
                `;
                htmlOutput += buildSubjectsHTML(gradeInfo.streams[streamName]);
                htmlOutput += `
                        </div>
                    </div>
                `;
            }
        }

        htmlOutput += `</section>`;
    }

    mainContent.innerHTML = htmlOutput;
}

/**
 * Builds standard layout formatting for individual subject arrays
 */
function buildSubjectsHTML(subjectsObject) {
    let subjectsHTML = "";

    for (const subjectName in subjectsObject) {
        const subject = subjectsObject[subjectName];
        
        subjectsHTML += `
            <div class="subject-card" style="background: #111; border: 1px solid #222; border-radius: 8px; padding: 15px; margin-bottom: 10px;">
                <h4 class="subject-header" style="margin: 0 0 10px 0; color: #fff; font-size: 1.2rem; display: flex; align-items: center; gap: 10px;">
                    <span class="icon-${subject.icon}" style="background: #222; padding: 4px 8px; border-radius: 4px; font-size: 0.9rem;">📚</span>
                    ${subjectName}
                </h4>
                <div class="units-list" style="padding-left: 10px;">
        `;

        // Render Units
        subject.units.forEach(unit => {
            subjectsHTML += `
                <div class="unit-item" style="margin-top: 10px;">
                    <h5 class="unit-name" style="margin: 0 0 5px 0; color: #ccc; font-size: 1rem;">${unit.name}</h5>
                    <ul class="subunits-list" style="margin: 0; padding-left: 20px; color: #888; font-size: 0.9rem; line-height: 1.4;">
            `;

            // Render Subunits
            unit.subunits.forEach(subunit => {
                subjectsHTML += `<li style="margin-bottom: 2px;">${subunit}</li>`;
            });

            subjectsHTML += `
                    </ul>
                </div>
            `;
        });

        subjectsHTML += `
                </div>
            </div>
        `;
    }

    return subjectsHTML;
}
