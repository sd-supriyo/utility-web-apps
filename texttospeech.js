

const speech = new SpeechSynthesisUtterance();


let voices = [];
const voiceSelect = document.querySelector("select");

function populateVoices() {
    voices = window.speechSynthesis.getVoices();

    if (!voices.length) return;

    
    speech.voice = voices[0];

   
    voiceSelect.innerHTML = "";

    
    voices.forEach((voice, index) => {
        const option = new Option(voice.name, index);
        voiceSelect.add(option);
    });
}


if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
}


voiceSelect.addEventListener("change", () => {
    const selectedIndex = parseInt(voiceSelect.value);
    if (!isNaN(selectedIndex)) {
        speech.voice = voices[selectedIndex];
    }
});


document.querySelector("button").addEventListener("click", () => {
    const text = document.querySelector("textarea").value.trim();
    if (text) {
        speech.text = text;
        window.speechSynthesis.speak(speech);
    }
});

