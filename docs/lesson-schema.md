# Lesson Schema

Lessons in Grasspuppy are authored as structured data (JSON-like objects in TypeScript) to separate educational content from the application engine.

## 📄 Top-Level Shape

```json
{
  "id": "lesson-id",
  "title": "Lesson Title",
  "summary": "Brief description of the lesson.",
  "sandbox": {
    "allowedApis": ["print", "drawBox"],
    "starterCode": ""
  },
  "steps": []
}
```

## 🪜 Step Types

A lesson is composed of one or more steps.

-   **`content`**: Instructional text or visuals. No code execution required.
-   **`task`**: A coding exercise. Requires the user to run code and pass validation rules.
-   **`demo`**: Pre-filled runnable example to illustrate a concept.
-   **`checkpoint`**: Summary or reflection at the end of a milestone.

### Common Step Fields

```json
{
  "id": "step-1",
  "type": "task",
  "title": "Task Title",
  "body": "Instructions for the user.",
  "starterCode": "// start here",
  "focus": [
    { "target": "runButton", "style": "pulse" }
  ],
  "validation": {
    "mode": "all",
    "rules": []
  }
}
```

---

## ✅ Validation Rules

The `Validator` class checks the user's `ExecutionLog` and source code against declarative rules.

### Output Rules
-   `printedTextEquals`: Checks if the last printed message matches a string.
-   `printedTextContains`: Checks if any printed message contains a substring.
-   `printedTextExists`: Checks if anything was printed.
-   `boxCountEquals`: Validates the total number of `drawBox` calls.
-   `boxColorCountEquals`: Validates the number of boxes of a specific color.
-   `boxCountAtLeast`: Ensures a minimum number of boxes were drawn.
-   `renderMatchesRows`: Validates complex patterns (e.g., flag rows).

### Logic & Flow Rules
-   `usedForLoop`: Checks for the presence of a `for` loop or `repeat` call.
-   `usedIfStatement`: Checks for the presence of an `if` block.
-   `usedElseStatement`: Checks for an `else` block.
-   `declaredVariable`: Ensures a specific variable name was used.
-   `declaredFunction`: Ensures a custom function was declared.
-   `usedArrayLiteral`: Checks for `[]` in the source code.

### Interaction Rules
-   `readLineCalled`: Verifies that `readLine()` was executed.
-   `calledFunctionCount`: Verifies how many times a specific function was called.

---

## 🎯 Focus Targets

The tutorial UI can highlight specific elements using the `focus` array:
-   `editor`: Highlights the code editor area.
-   `resultPane`: Highlights the visual output area.
-   `runButton`: Highlights/pulses the execution button.
-   `css:#id`: Any custom CSS selector.

Available styles: `highlight`, `pulse`.
