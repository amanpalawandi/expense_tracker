# Agent instructions

## Stack and layout
- React with Vite, JavaScript, Vitest, React Testing Library, and Cypress.
- `src/App.jsx` owns application state and page composition.
- `src/components/` contains one component per file.
- `src/logic.js` contains pure validation and calculation helpers.
- `src/**/*.test.jsx` contains unit and component tests; `cypress/e2e/` contains browser tests.

## Commands
- Install: `npm install`
- Development: `npm run dev`
- Production build: `npm run build`
- Lint: `npm run lint`
- Unit tests: `npm run test:run`
- Coverage: `npm run test:coverage`
- Cypress: start `npm run dev`, then run `npm run cy:open` or `npm run cy:run`.

## Conventions
- Keep app-level expense and filter state in `App`.
- Keep each React component in its own file and add a short comment describing its props/state.
- Do not add dependencies without asking.
- Work on a branch for each task and summarize changes for its pull request.
- Ask for a plan and wait for approval before writing code; keep acceptance criteria testable.
