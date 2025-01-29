# Changelog

## Version 2.0.0 (Updated)

### New Features:
- **Changelog**:
  - Added a changelog file to keep a record of changes (partially generated with ChatGPT(Just to save time 😊)).

- **Voice Selection UI Update**:
  - The `voiceSelect` dropdown now populates with a formatted list showing both the voice language and name (e.g., `en-US [Google UK English]`).
  
- **Pause/Resume Button Icon Change**:
  - The `start` button now displays different icons based on the current state:
    - **Pause**: Displays an image (`pause.png`) when the speech is speaking or paused.
    - **Resume**: Displays an image (`resume.png`) when the speech is paused.
    - **Start**: Displays an image (`start.png`) when the speech has ended or is reset.

- **Speech State Handling**:
  - A more detailed check for the speech state was added (`speaking` vs. `paused`) to correctly handle play/pause/resume functionality.

- **Added a Favicon**:
  - Added a Favicon generated from Gemini AI Image generation.
  
### Enhancements:
- **Voice Initialization**:
  - The voices are now loaded asynchronously with a retry mechanism in case the voices are not available immediately (using `setTimeout`).
  - Voices are now loaded only when available (`loadVoices` function) and the `speech.voice` is set to the first available voice on load.

- **Voice Update on Selection**:
  - The voice is updated dynamically when the user selects a different option from the `voiceSelect` dropdown.
  - The dropdown index for the selected voice is saved and restored after speech ends.

- **Heading**;
 - Changed the Design of the heading.

### Code Structure Changes:
- **Refactoring Variables**:
  - `usrInput` is introduced as a more descriptive variable name for the `textarea`.
  - Introduced `currentVoice` to track the current voice index, which is used for restoring the voice after speech ends.
  
- **Button State Handling**:
  - The `start` button's text now updates dynamically based on whether speech is playing, paused, or stopped.
  
- **Event Handling**:
  - Added the `speech.onend` event handler to reset the button to its initial state after speech ends.
  - Changed `window.onload` to `window.addEventListener("load")` for consistency with other event listeners.
  
### Bug Fixes:
- **Voice Selection Issue**:
  - The voices were loaded more reliably with the new `setTimeout` retry mechanism if `getVoices()` didn’t return voices on the first call.
  
### Other Minor Changes:
- **Consistency**: Consistent usage of `let` and `const` for variable declarations throughout the script.
- **Code Formatting**: Improved readability by adjusting spacing and function definitions.
  
---

## Version 1.0.0 (Original)

### Features:
- Basic text-to-speech functionality with **SpeechSynthesisUtterance**.
- Voice selection dropdown populates with available voices after loading.
- Start button triggers the speech when clicked.
- No pause or resume functionality—speech continues uninterrupted.

---

