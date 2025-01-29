const speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("#voice");
let usrInput = document.querySelector("textarea");
usrInput.value = "Enter any Text, Select a voice pack and then, click START";
const start = document.querySelector("button");
let icon = document.querySelector(".icon");
let currentVoice = 0;
const loadVoices = () => {
  voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    speech.voice = voices[0];
    voiceSelect.innerHTML = voices
      .map(
        (voice, i) =>
          `<option value="${i}">${voice.lang} [${voice.name}]</option>`
      )
      .join("");
  } else {
    setTimeout(loadVoices, 100);
  }
};
voiceSelect.addEventListener("change", () => {
  currentVoice = voiceSelect.value;
  speech.voice = voices[Number(voiceSelect.value)];
});
start.addEventListener("click", () => {
  if (!window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
    speech.text = usrInput.value;
    window.speechSynthesis.speak(speech);
    start.innerHTML = '<img class="icon"src="pause.png">Pause';
  } else if (window.speechSynthesis.speaking && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    start.innerHTML = '<img class="icon"src="pause.png">Pause';
  } else {
    window.speechSynthesis.pause();
    start.innerHTML = '<img src="resume.png">Resume';
  }
});
speech.onend = () => {
  start.innerHTML = '<img src="start.png">Start';
  voiceSelect.value = currentVoice;
};
window.addEventListener("load", () => {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
});
