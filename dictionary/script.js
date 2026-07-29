const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");


btn.addEventListener("click", async () => {
    const inpWord = document.getElementById("input-word").value.trim();
    if (!inpWord) {
        result.innerHTML = `<h3 class="error">Please enter a word</h3>`;
        return;
    }

    result.innerHTML = `<h3 class="loading">Loading...</h3>`; 

    try {
        const response = await fetch(`${url}${inpWord}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const { meanings, phonetics } = data[0] || {};
        const partOfSpeech = meanings?.[0]?.partOfSpeech || "N/A";
        const definition = meanings?.[0]?.definitions[0]?.definition || "Definition not available.";
        const example = meanings?.[0]?.definitions[0]?.example || "No example available.";
        const phoneticText = phonetics?.[0]?.text || "N/A";
        const audioSrc = phonetics?.find(p => p.audio)?.audio || ""; 

        result.innerHTML = `
            <div class="word">
                <h3>${inpWord}</h3>
                <button onclick="playSound()">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${partOfSpeech}</p>
                <p>${phoneticText}</p>
            </div>
            <p class="word-meaning">${definition}</p>
            <p class="word-example">${example}</p>`;

        if (audioSrc) {
            sound.setAttribute("src", audioSrc);
        } else {
            sound.setAttribute("src", ""); 
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        result.innerHTML = `<h3 class="error">Couldn't find the word. Please try again.</h3>`;
    }
});

function playSound() {
    if (sound.src) {
        sound.play().catch(error => {
            console.error("Error playing sound:", error);
        });
    }
}

