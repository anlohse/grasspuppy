# Developer Documentation

Welcome to the Grasspuppy developer portal. This directory contains detailed documentation about the application's internal architecture, content format, and APIs.

## 📁 Documentation Guide

- [Curriculum](curriculum.md) - Details of the 20-lesson beginner learning path.
- [Lesson Schema](lesson-schema.md) - How to author lessons using JSON and declarative validation rules.
- [Sandbox API](sandbox-api.md) - Reference for the JavaScript APIs (`print`, `drawBox`, etc.) exposed inside the user playground.
- [UX and Authoring](ux-and-authoring.md) - Design principles for the interactive tutorials and authoring workflow.

---

## 🛠️ System Overview

Grasspuppy is built with:

*   **Runtime:** [Electron](https://www.electronjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Bundler:** [Parcel 2](https://parceljs.org/)
*   **Editor:** [Monaco Editor](https://microsoft.github.io/monaco-editor/)

## 🏗️ Project Structure

*   `/main.ts` - The Electron main process entry point.
*   `/src/app.ts` - The main renderer process logic (UI, editor setup, lesson management).
*   `/src/library.ts` - The core Grasspuppy API injected into the user's runtime.
*   `/src/validator.ts` - The declarative execution validation engine.
*   `/src/i18n.ts` - Localization manager.
*   `/src/lessons.ts` - Definition of the standard beginner curriculum.
