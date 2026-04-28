# Grasspuppy

**Grasspuppy** is a lightweight, Electron-based interactive JavaScript playground designed for learning and rapid prototyping. It features a built-in code editor (Monaco Editor) and a custom graphics/utility library that allows beginners to learn programming concepts through visual feedback.

---

## 🚀 Core Features

*   **Integrated Code Editor**: Powered by Monaco Editor (the same engine as VS Code) with custom IntelliSense for the Grasspuppy API.
*   **Guided Lesson Mode**: A full 20-lesson Beginner Curriculum divided into 5 modules, featuring declarative validation and real-time feedback.
*   **Multi-language Support**: Full support for **Portuguese (BR)** and **English (US)**, including system language detection and preference persistence.
*   **Live Execution**: User code runs in an asynchronous environment, supporting `await` for input and timing operations automatically.
*   **Visual Output**: A dedicated result pane for drawing colored boxes, grids, and printing text.
*   **Friendly Error System**: Two-layer error presentation providing beginner-friendly explanations alongside technical details.

---

## 📚 Beginner Curriculum

The application includes a structured learning path:
1.  **Module 1: First Steps**: Introduction to output, function calls, and colors.
2.  **Module 2: Sequences & Patterns**: Command ordering, rows, and visual composition.
3.  **Module 3: Variables & Input**: Storing data and interacting with users via `readLine`.
4.  **Module 4: Decisions & Loops**: Logic branching (`if/else`) and automated repetition (`for`).
5.  **Module 5: Functions & Arrays**: Code reuse and list management.

---

## 🛠️ API Reference

### Tier 1: Visual & Basic Utility
- `print(message)`: Displays text in the result pane.
- `drawBox(color)`: Renders a 20x20 pixel square.
- `newLine()`: Moves output to the next line.
- `pickRandom(array)`: Returns a random element from an array.
- `readLine()`: (Async) Prompts the user for text input.

### Tier 2: Composition & Control
- `repeat(count, callback)`: (Async) Repeats an action multiple times.
- `pause(ms)`: (Async) Delays execution for a specific time.
- `drawGrid(rows)`: Renders a grid from an array of pattern strings.
- `setBoxSize(px)` / `setGap(px)`: Customizes the appearance of visual elements.
- `clearOutput()`: Wipes the result pane.

---

## 💻 Technical Architecture

*   **Runtime**: Electron.
*   **Language**: TypeScript.
*   **Bundler**: Parcel 2 (Multi-target for Main and Renderer processes).
*   **UI Framework**: Bootstrap 4 & jQuery (CDN-based).
*   **State Management**: Custom `LessonManager` and `Validator` modules.
*   **I18n**: Custom dictionary-based localization system.

---

## 📖 Developer Documentation

Looking to contribute or understand the internals? Check out our [Developer Portal](docs/README.md) for:
- [Sandbox API Reference](docs/sandbox-api.md)
- [Lesson Schema & Validation](docs/lesson-schema.md)
- [Curriculum Design](docs/curriculum.md)
- [UX & Authoring Guidelines](docs/ux-and-authoring.md)

---

## 🛠️ Development

### Prerequisites
- Node.js & npm

### Commands
```bash
# Install dependencies
npm install

# Build the project (TypeScript compilation and bundling)
npm run build

# Launch the application
npm run execute

# Clean build artifacts
npm run clean
```

---

## 📝 License
GPL-3 License - Alan N. Lohse
