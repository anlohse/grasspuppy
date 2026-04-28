# Sandbox API Reference

The Grasspuppy runtime exposes a curated set of JavaScript functions and constants to learners. All user code is executed in an `async` wrapper, allowing for seamless use of timing and input functions.

## 🎨 Visual API

### `drawBox(color)`
Draws a colored 20x20 pixel square.
- **Arguments:** `color` (string or constant).
- **Example:** `drawBox(red)`

### `drawBoxes(pattern)`
Draws a sequence of boxes from a string pattern. Spaces trigger a `newLine()`.
- **Example:** `drawBoxes("rrr ggg bbb")`

### `newLine()`
Moves the drawing cursor and text output to the next line.

### `clearOutput()`
Clears all content from the result pane.

---

## 💬 Communication API

### `print(message)`
Displays text in the result pane. Automatically handles line breaks if following a visual element.
- **Example:** `print("Hello!")`

### `readLine()` (Async)
Prompts the user for text input via an input field in the result pane.
- **Returns:** `Promise<string>`
- **Example:** `let name = await readLine()`

---

## ⚙️ Logic & Control API

### `repeat(count, callback)` (Async)
A beginner-friendly alternative to `for` loops.
- **Example:**
  ```js
  await repeat(5, (i) => {
    drawBox(blue);
  })
  ```

### `pause(ms)` (Async)
Delays execution for the specified milliseconds.
- **Example:** `await pause(500)`

### `pickRandom(array)`
Returns a random element from the provided list.

---

## 🎨 Built-in Constants

### Colors
Available as global variables:
- `red`, `green`, `blue`, `yellow`, `white`, `black`, `purple`, `orange`, `pink`, `gray`.

### The `color` Array
An array containing the standard color names followed by 100 randomly generated hex colors.
