# CodeSpeak

CodeSpeak is a simple yet powerful text-to-speech (TTS) application built using JavaScript and the Web Speech API. With CodeSpeak, users can convert text into speech effortlessly and select different voices for a personalized experience.

---

## Features

- **Real-Time Text-to-Speech**: Converts text entered by the user into speech.
- **Voice Selection**: Choose from multiple voices available in your browser.
- **Simple Interface**: Clean and user-friendly layout.
- **Cross-Browser Support**: Works on most modern browsers that support the Web Speech API.

---
## Limitations

**Dependent on device and browser voice packs**
- May not work properly on some browsers depending on how the browser handles Web Speech API.

---

## Link
**https://akm2006.github.io/CodeSpeak/**

## Demo

Click on the link or Try CodeSpeak in your browser by cloning this repository and opening the `index.html` file locally.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/codespeak.git
   ```

2. Navigate to the project directory:
   ```bash
   cd codespeak
   ```

3. Open `index.html` in your preferred browser:
   ```
   Open index.html
   ```

---

## Usage

1. Enter text into the provided text area.
2. Select a voice from the dropdown menu.
3. Click the **Start** button to hear the text read aloud.

---

## Prerequisites

- A modern browser with support for the Web Speech API (e.g., Google Chrome, Microsoft Edge, or Firefox).

---

## File Structure

```
CodeSpeak/
├── index.html       # Main HTML file
├── style.css        # Styles for the app
├── app.js           # Core JavaScript functionality
├── speaking.png     # Icon for the button
└── README.md        # Documentation (this file)
```

---

## Browser Compatibility

CodeSpeak is compatible with the following browsers:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox (partial support for voices may apply)
- Safari (requires permissions for speech synthesis)

---

## Future Enhancements

- Add pitch and rate controls.
- Save user preferences for voice and pitch.
- Support for additional languages and accents.
- Remove the dependency on device language packs.

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the license terms.

---

## Contributing

Contributions are welcome! If you have ideas for improvements or want to fix bugs, feel free to fork the repository and create a pull request.

---

## Acknowledgments

- Thanks to the Web Speech API for enabling speech synthesis in modern browsers.
- Inspired by the simplicity of browser-based utilities.
