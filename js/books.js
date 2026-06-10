// js/books.js - FIYIT Safe Book Notes Integration

// Fetch key safely from local storage instead of exposing it to GitHub
const API_KEY = localStorage.getItem('fiyit_gemini_key') || "";
const MODEL_NAME = "gemini-1.5-flash"; 

async function generateLessonNotes(unitTitle, subject, grade) {
    const notesContainer = document.getElementById('notes-container');
    if (!notesContainer) return;

    // Check if the developer setup has been completed on the phone
    if (!API_KEY) {
        notesContainer.innerHTML = `
            <div style="background: #fff3cd; color: #856404; padding: 15px; border-radius: 8px; margin: 10px 0; border: 1px solid #ffeeba;">
                <strong>⚙️ Setup Required:</strong><br>
                Please paste your Gemini API Key in the chat interface settings box first to activate live notes!
            </div>
        `;
        return;
    }

    notesContainer.innerHTML = `<div class="loading-spinner">✨ Creating lesson summary with AI...</div>`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ 
                        text: `You are an expert tutor for the Ethiopian National Curriculum. Create clear, concise, well-structured study notes with bullet points for Grade ${grade} ${subject}, specifically covering the unit: "${unitTitle}". Write in simple English.` 
                    }]
                }]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || `API Error Status: ${response.status}`);
        }

        const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (aiText) {
            notesContainer.innerHTML = `<div class="markdown-body">${aiText.replace(/\n/g, '<br>')}</div>`;
        } else {
            notesContainer.innerHTML = `<p>⚠️ Couldn't read the AI generation structure.</p>`;
        }

    } catch (error) {
        console.error("Generation Error:", error);
        notesContainer.innerHTML = `
            <div style="background: #f8d7da; color: #721c24; padding: 15px; border-radius: 8px; border: 1px solid #f5c6cb;">
                <strong>⚠️ Connection Error Details:</strong><br><br>
                <code style="display:block; background:#fff; padding:8px; margin:5px 0; border-radius:4px;">${error.message}</code><br>
                Please ensure your API Key format is correct in local storage settings.
            </div>
        `;
    }
}
