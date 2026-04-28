# UX and Authoring Guidelines

Grasspuppy is designed to be a friendly, non-intimidating entry point into programming. This document outlines the user experience principles and the workflow for creating new educational content.

## 🖥️ UX Principles

1.  **Immediate Feedback**: Every action should produce a visible result in the result pane.
2.  **Guided Discovery**: Use the `focus` system to point users toward the right UI elements (Editor, Run Button, etc.) at the right time.
3.  **Friendly Error Handling**: Replace cryptic technical errors with human-readable explanations (Layer 1) while keeping stack traces available (Layer 2) for curiosity.
4.  **Progressive Disclosure**: Only introduce new API functions when they are needed for the current lesson module.

---

## ✍️ Authoring Workflow

To create a new lesson for the Grasspuppy curriculum:

1.  **Define the Objective**: What single concept is being taught? (e.g., "Variables").
2.  **Add Translation Keys**: Add the title, summary, and step instructions to `src/i18n.ts` for all supported languages.
3.  **Define Lesson Data**: Create the lesson object in `src/lessons.ts`.
4.  **Configure Validation**: Select the appropriate rules from the [Lesson Schema](lesson-schema.md) to verify the learner's success.
5.  **Test the Flow**: Run the application and verify that the "Next" and "Previous" logic works as expected.

---

## 🔍 Feedback Philosophy

Validation feedback should be constructive, not just corrective.

-   **Bad:** "Wrong box count."
-   **Good:** "You drew 4 blue boxes. The goal is 5. Try adding one more `drawBox(blue)` call!"

Use the `onFail` field in validation rules to provide these specific hints.
