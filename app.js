let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("#voice");
document.querySelector("textarea").innerText="Enter any Text, Select a voice pack and then, click START";
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(`${voice.name} (${voice.lang})`, i);
  });
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});
const text = document.querySelector("textarea");
const start = document.querySelector("button");
start.addEventListener("click", () => {
  speech.text = text.value;
  window.speechSynthesis.speak(speech);
});
window.onload = () => {
  setTimeout(() => {
    start.click();
  }, 3000);
};
