// js/books.js - FIYIT Safe Book Notes Integration

async function generateLessonNotes(unitTitle, subject, grade) {
    const notesContainer = document.getElementById('notes-container') || document.querySelector('.notes-content');
    if (!notesContainer) return;

    const savedKey = localStorage.getItem('fiyit_gemini_key') || "";
    if (!savedKey) {
        notesContainer.innerHTML = `
            <div style="background: #fff3cd; color: #856404; padding: 15px; border-radius: 8px; margin: 10px 0; border: 1px solid #ffeeba; font-size:14px;">
                <strong>⚙️ Setup Required:</strong><br>
                Please paste your Gemini API Key in the chat screen setup box first to unlock live notes!
            </div>
        `;
        return;
    }

    notesContainer.innerHTML = `<div class="loading-spinner" style="padding:20px; color:#666;">✨ Generating custom lesson overview...</div>`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${savedKey}`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ 
                        text: `You are an expert tutor for the Ethiopian National Curriculum. Create highly organized, clear lesson summary notes with bullet points for Grade ${grade} ${subject}, specifically covering the unit: "${unitTitle}". Write in simple English.` 
                    }]
                }]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || `Status ${response.status}`);
        }

        const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (aiText) {
            // Replaces newlines with HTML breaks to preserve formatting on mobile
            notesContainer.innerHTML = `<div class="markdown-body" style="line-height:1.6; color:#333;">${aiText.replace(/\n/g, '<br>')}</div>`;
        } else {
            notesContainer.innerHTML = `<p>⚠️ No readable note structure returned.</p>`;
        }

    } catch (error) {
        console.error("Generation Error:", error);
        notesContainer.innerHTML = `
            <div style="background: #f8d7da; color: #721c24; padding: 15px; border-radius: 8px; border: 1px solid #f5c6cb; font-size:13px;">
                <strong>⚠️ Connection Error Details:</strong>
                <code style="display:block; background:#fff; padding:8px; margin:8px 0; border-radius:4px; word-break:break-all;">${error.message}</code>
                Check your internet connection or verify the key saved in local storage.
            </div>
        `;
    }
}

// Make sure your existing local grade/region button navigation functions sit below this line unchanged!
