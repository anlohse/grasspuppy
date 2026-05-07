# Grasspuppy — Advanced Curriculum Specification v2

## Purpose

This document defines the long-term beginner curriculum for Grasspuppy.

The goal of the curriculum is not only to teach JavaScript syntax, but to teach computational thinking through immediate visual feedback, experimentation, interaction, and creativity.

Grasspuppy should feel approachable to complete beginners while gradually introducing real programming concepts in a structured and rewarding way.

This curriculum replaces the original lightweight 20-lesson curriculum with a more complete and pedagogically structured learning path.

---

# Core Philosophy

## Learning through visible feedback

Grasspuppy is built around the idea that programming becomes easier to understand when learners can immediately see the result of their code.

Instead of abstract console-only examples, learners interact with:

* colors
* shapes
* patterns
* text
* user input
* simple visual systems

Every lesson should produce visible or interactive output whenever possible.

---

## One concept at a time

Each lesson should focus on one primary learning objective.

A learner should never be forced to understand multiple new concepts simultaneously.

Good:

* learn loops while drawing boxes
* learn variables while customizing messages

Bad:

* learn loops, arrays, and functions all in the same beginner lesson

---

## Gradual complexity

The curriculum should move through four stages:

### Stage 1 — Discovery

The learner experiments with simple commands and sees results immediately.

### Stage 2 — Control

The learner starts controlling behavior using variables, conditions, and loops.

### Stage 3 — Abstraction

The learner creates reusable logic with functions and data structures.

### Stage 4 — Creation

The learner combines concepts to create small original projects.

---

## Friendly tone

Lesson text should feel:

* warm
* encouraging
* concise
* beginner-friendly

Avoid:

* academic wording
* long paragraphs
* overly technical explanations
* unexplained jargon

---

# Curriculum Structure

## Recommended progression

| Unit   | Theme                         | Approx. Lessons |
| ------ | ----------------------------- | --------------- |
| Unit 1 | Getting Started               | 10              |
| Unit 2 | Drawing and Patterns          | 10              |
| Unit 3 | Variables and Text            | 10              |
| Unit 4 | Input and Decisions           | 10              |
| Unit 5 | Loops and Repetition          | 14              |
| Unit 6 | Functions and Reuse           | 10              |
| Unit 7 | Arrays and Randomness         | 8               |
| Unit 8 | Debugging and Problem Solving | 8               |
| Unit 9 | Creative Projects             | 10              |

Estimated total:

* 90 lessons
* beginner-to-early-intermediate level

---

# Units Metadata Structure

Each lesson must belong to a unit.

Recommended structure:

```ts
export interface Unit {
  id: string;
  order: number;
  nameKey: string;
  descriptionKey: string;
  icon?: string;
}
```

Example:

```ts
{
  id: 'loops',
  order: 50,
  nameKey: 'units.loops.name',
  descriptionKey: 'units.loops.description'
}
```

---

# Lesson Metadata Structure

Recommended additions:

```ts
export interface Lesson {
  id: string;
  unitId: string;
  order: number;
  difficulty: 'beginner' | 'easy' | 'medium';
  estimatedMinutes: number;
  titleKey: string;
  summaryKey: string;
  learningObjectivesKeys: string[];
  tags: string[];
  sandbox: SandboxConfig;
  steps: LessonStep[];
}
```

---

# Localization Strategy

All user-facing text must use i18n keys.

Lesson files should not contain hardcoded educational text.

---

## Recommended file organization

```txt
src/
  curriculum/
    units.ts
    lessons/
      unit-01-getting-started.ts
      unit-02-drawing.ts
      unit-03-variables.ts
      ...

  i18n/
    en-US/
      units.json
      lessons/
        unit-01.json
        unit-02.json
        ...

    pt-BR/
      units.json
      lessons/
        unit-01.json
        unit-02.json
        ...
```

---

# Lesson Types

The original curriculum relied mostly on:

* content
* task

The new curriculum should support richer lesson types.

## Recommended lesson step types

| Type       | Purpose                       |
| ---------- | ----------------------------- |
| content    | explanation and orientation   |
| task       | coding exercise               |
| demo       | runnable example              |
| quiz       | quick conceptual check        |
| checkpoint | recap                         |
| challenge  | open-ended task               |
| debugging  | fix broken code               |
| predict    | predict output before running |
| compare    | compare two solutions         |
| reflection | explain what happened         |

---

# Pedagogical Structure of a Lesson

A strong beginner lesson should usually contain:

1. Context
2. Explanation
3. Example or demo
4. Guided task
5. Reinforcement
6. Optional challenge
7. Recap

---

# Unit 1 — Getting Started

## Goal

Introduce the interface, execution flow, and the idea that code produces visible results.

## Concepts

* editor
* run button
* output pane
* functions
* simple output
* errors are normal

## Lessons

### 1. Welcome to Grasspuppy

Meet the editor and result pane.

### 2. Running Your First Program

Click Run and observe output.

### 3. What Functions Do

Introduce the idea of commands.

### 4. Printing Text

Use `print()`.

### 5. Printing Multiple Messages

Top-to-bottom execution.

### 6. Your First Visual Output

Use `drawBox(red)`.

### 7. Colors as Values

Pass different arguments.

### 8. Reading Error Messages

Friendly introduction to mistakes.

### 9. Fix the Broken Program

First debugging lesson.

### 10. Mini Challenge — Draw a Rainbow Row

Combine everything learned.

---

# Unit 2 — Drawing and Patterns

## Goal

Build confidence with sequencing and visual composition.

## Concepts

* ordering
* repetition by copy-paste
* rows
* patterns
* layout
* structure

## Lessons

### 11. Commands Happen in Order

### 12. Draw a Row of Boxes

### 13. Starting a New Line

### 14. Building Rows and Columns

### 15. Drawing a Flag

### 16. Symmetry with Colors

### 17. Repeating Patterns

### 18. Pixel Art Basics

### 19. Challenge — Create a Badge

### 20. Mini Project — Tiny Pixel Poster

---

# Unit 3 — Variables and Text

## Goal

Teach how programs store and reuse information.

## Concepts

* variables
* strings
* numbers
* expressions
* reassignment
* personalization

## Lessons

### 21. What Is a Variable?

### 22. Storing Text

### 23. Printing Variables

### 24. Changing Variable Values

### 25. Combining Text

### 26. Personalized Messages

### 27. Storing Numbers

### 28. Simple Calculations

### 29. Variables Inside Patterns

### 30. Mini Project — Personalized Greeting Card

---

# Unit 4 — Input and Decisions

## Goal

Teach interaction and conditional logic.

## Concepts

* input
* `await`
* conditions
* comparisons
* branching
* user-driven behavior

## Lessons

### 31. Asking Questions

### 32. Reading Input with `readLine`

### 33. Using the User's Answer

### 34. Yes or No Programs

### 35. Introduction to `if`

### 36. Comparing Values

### 37. Using `else`

### 38. Multiple Choices

### 39. Interactive Quiz Program

### 40. Mini Project — Mood Responder

---

# Unit 5 — Loops and Repetition

## Goal

Teach automated repetition and pattern generation.

This should be the largest and most reinforced unit.

## Concepts

* repetition
* counters
* iteration
* loop variables
* nested repetition
* generated structures

## Lessons

### 41. Why Loops Matter

### 42. Your First `for` Loop

### 43. Counting with Loops

### 44. Loop Variables

### 45. Drawing Rows Automatically

### 46. Creating Squares

### 47. Growing Patterns

### 48. Counting Backwards

### 49. Alternating Colors

### 50. Nested Loops Introduction

### 51. Drawing Grids

### 52. Checkerboard Patterns

### 53. Pyramid Patterns

### 54. Debugging Broken Loops

### 55. Loop Challenge — Pattern Machine

### 56. Mini Project — Animated Pattern Generator

---

# Unit 6 — Functions and Reuse

## Goal

Teach abstraction and reusable logic.

## Concepts

* custom functions
* parameters
* reusable code
* composition
* decomposition

## Lessons

### 57. Why Functions Exist

### 58. Creating Your First Function

### 59. Calling Your Function

### 60. Reusing Logic

### 61. Function Parameters

### 62. Functions with Different Colors

### 63. Functions Calling Functions

### 64. Building Shape Helpers

### 65. Challenge — Create a Drawing Toolkit

### 66. Mini Project — Banner Generator

---

# Unit 7 — Arrays and Randomness

## Goal

Introduce collections and randomness.

## Concepts

* arrays
* lists
* indexing
* random selection
* data-driven behavior

## Lessons

### 67. Lists of Values

### 68. Arrays of Colors

### 69. Arrays of Words

### 70. Picking Random Values

### 71. Random Color Patterns

### 72. Random Story Generator

### 73. Challenge — Fortune Generator

### 74. Mini Project — Random Banner Creator

---

# Unit 8 — Debugging and Problem Solving

## Goal

Teach learners how to read, analyze, and repair code.

## Concepts

* syntax errors
* runtime errors
* logic mistakes
* prediction
* reading code

## Lessons

### 75. Errors Are Part of Programming

### 76. Missing Parentheses

### 77. Wrong Variable Names

### 78. Broken Loops

### 79. Predict the Output

### 80. Find the Bug

### 81. Compare Two Solutions

### 82. Mini Project — Repair a Broken Drawing Program

---

# Unit 9 — Creative Projects

## Goal

Allow learners to combine everything into open-ended creations.

## Concepts

* planning
* combining ideas
* creativity
* experimentation
* iterative improvement

## Lessons

### 83. Build a Flag Generator

### 84. Build a Pixel Badge Creator

### 85. Build a Random Pattern Machine

### 86. Build a Name Banner Generator

### 87. Build a Color Quiz

### 88. Build a Tiny Story Generator

### 89. Build an Interactive Pixel Toy

### 90. Final Project — Interactive Pixel Artist

---

# Lesson Difficulty Strategy

## Beginner

* highly guided
* small tasks
* explicit hints
* limited APIs

## Easy

* small open-ended exercises
* less starter code
* multiple valid solutions

## Medium

* project-style exercises
* broader validation
* creative freedom

---

# Lesson Writing Guidelines

## Text length

Keep instructional text short.

Good:

* 2–4 short paragraphs
* one idea at a time
* examples included

Avoid:

* giant explanations
* dense theory

---

## Starter code philosophy

Starter code should:

* remove unnecessary typing
* focus attention on the new concept
* avoid giving away the solution entirely

---

## Hint philosophy

Hints should escalate gradually.

### Hint level 1

Direction only.

### Hint level 2

Structural help.

### Hint level 3

Almost-complete solution.

---

## Validation philosophy

Validation should check:

1. Correct output
2. Intended concept usage
3. Basic code structure

Example:

* correct pattern
* used `for`
* no runtime error

---

# Recommended Validation Rules

## Output validation

* `printedTextEquals`
* `printedTextContains`
* `printedTextExists`
* `renderMatchesRows`
* `renderMatchesPattern`
* `boxCountEquals`
* `boxColorCountEquals`
* `boxCountAtLeast`

## Execution validation

* `calledFunction`
* `calledFunctionCount`
* `usedForLoop`
* `usedIfStatement`
* `usedElseStatement`
* `declaredVariable`
* `declaredFunction`
* `usedArrayLiteral`
* `readLineCalled`

## Advanced validation

* `functionHasParameter`
* `usedNestedLoop`
* `usedAwait`
* `sourceMatchesRegex`
* `onlyAllowedApisUsed`

---

# Recommended Sandbox APIs

## Core beginner APIs

* `print`
* `drawBox`
* `drawBoxes`
* `newLine`
* `readLine`
* `pickRandom`

## Recommended additional APIs

* `drawGrid`
* `pause`
* `clearOutput`
* `setBoxSize`
* `setGap`

## Optional advanced APIs

* `repeat`
* `drawCircle`
* `setCursor`
* `drawAt`

---

# Debugging Curriculum Philosophy

Most beginner platforms delay debugging too long.

Grasspuppy should normalize mistakes early.

Learners should understand:

* errors are expected
* debugging is part of programming
* reading errors is a skill

Debugging lessons should appear as early as Unit 1.

---

# Project Philosophy

Projects should:

* have clear goals
* feel playful
* allow creativity
* reuse previous concepts
* support multiple valid solutions

Projects should NOT:

* require exact solutions
* become too large
* introduce brand-new concepts

---

# Recommended UI Features for Curriculum Mode

## Required

* unit sidebar
* lesson progress
* step progress
* hints panel
* recap cards
* validation feedback
* lesson restart button

## Recommended

* achievement badges
* streak tracking
* completed lesson markers
* API quick-reference chips
* lesson search

---

# Example Unit Metadata

```ts
export const units: Unit[] = [
  {
    id: 'getting-started',
    order: 10,
    nameKey: 'units.gettingStarted.name',
    descriptionKey: 'units.gettingStarted.description'
  },
  {
    id: 'drawing-patterns',
    order: 20,
    nameKey: 'units.drawingPatterns.name',
    descriptionKey: 'units.drawingPatterns.description'
  }
]
```

---

# Example Localization Keys

```txt
units.gettingStarted.name
units.gettingStarted.description

lessons.lesson-001.title
lessons.lesson-001.summary
lessons.lesson-001.objectives.1
lessons.lesson-001.steps.intro.title
lessons.lesson-001.steps.intro.body
```

---

# Recommended Lesson Ordering Strategy

Use gaps of 10 for insertion flexibility.

Example:

```ts
order: 10
order: 20
order: 30
```

---

# Long-Term Expansion Ideas

## Intermediate curriculum

Future curriculum could include:

* objects
* maps/dictionaries
* recursion
* events
* simple games
* state machines
* animations

## Multiplayer/community ideas

* shared projects
* challenge sharing
* pattern contests
* collaborative lessons

---

# Final Recommendation

Grasspuppy should evolve from:

> a JavaScript sandbox with exercises

into:

> a complete visual-first programming learning environment.

The curriculum is the backbone of that transformation.
