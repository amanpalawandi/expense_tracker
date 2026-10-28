# Coding agent prompt library

## New feature
Context: [relevant files and current behavior]. Goal: [single feature]. Constraints: [stack, conventions, and files to avoid]. Acceptance criteria: [observable, testable outcomes]. Examples: [input and expected result]. First inspect the code and propose a plan; wait for approval before editing. After implementation, run relevant checks and summarize the diff.

## Bug fix
Context: [where the issue occurs]. Goal: reproduce and fix [specific bug]. Constraints: make the smallest safe change and preserve existing behavior. Acceptance criteria: [reproduction now passes; regression test added]. Examples: [steps and actual versus expected]. Plan first, then wait for approval.

## Refactor
Context: [files and behavior]. Goal: improve [specific structure]. Constraints: no behavior changes and no new dependencies. Acceptance criteria: existing tests pass and [measurable result]. Examples: [before/after structure]. Plan first and wait for approval.

## Generate tests
Context: [implementation and current tests]. Goal: test [behavior]. Constraints: tests must fail for a broken implementation; don't edit production code. Acceptance criteria: cover [cases], assert user-visible behavior, and show the command/output. Examples: [valid and invalid cases]. Plan first and wait for approval.

## Review diff
Review this diff for correctness, regressions, accessibility, and missing tests. Report findings first with file/line and severity. Do not edit files. Verify whether each acceptance criterion is covered and whether the tests would catch a broken feature.

## Commit message
Given this diff and task summary, suggest one concise imperative commit message. Do not commit or change files. Mention the main behavior changed and avoid claiming checks that were not run.

## Add expense feature prompt (five parts)
**Context:** This React/Vite expense tracker stores expenses in App state and renders `ExpenseForm` and `ExpenseList`.
**Goal:** Let a person add an expense with a title, amount, and one of Food, Travel, Bills, or Other.
**Constraints:** Keep one component per file, keep list state in App, add no dependencies, validate in a pure helper, and make controls accessible. Reject blank titles, non-numeric/empty amounts, zero/negative amounts, and amounts above 100,000.
**Acceptance criteria:** (1) A valid trimmed title, positive amount up to 100,000, and selected category add exactly one visible row. (2) The amount is stored as a number and displayed to two decimals. (3) Blank title, non-numeric/empty amount, non-positive amount, and amount above 100,000 show an error and do not add a row. (4) Successful submission clears the title and amount. Each criterion must have a test.
**Examples:** `Lunch`, `250`, `Food` adds `Lunch` and `$250.00`; blank title and `-5` do not add an expense.

Ask for a plan and wait for approval before coding. Then implement only this feature, run focused tests, and report changed files and results.
