# Pennywise expense tracker

A small React expense tracker built with Vite. Add and remove expenses, filter by category, and see the total and count for the currently displayed expenses.

## Requirements

- Node.js 20 (see `.nvmrc`)
- npm

## Run locally

```sh
npm install
npm run dev
```

### PowerShell on Windows

If PowerShell blocks `npm.ps1` because script execution is disabled, use the Windows command launcher by adding `.cmd`:

```powershell
npm.cmd install
npm.cmd run dev
```

Use the same form for project checks, for example `npm.cmd run test:run` and `npm.cmd run build`. This avoids changing your PowerShell execution policy.

## Checks

```sh
npm run lint
npm run test:run
npm run test:coverage
npm run build
```

For browser tests, start the dev server with `npm run dev` in one terminal, then run `npm run cy:run` in another. Use `npm run cy:open` to open the Cypress UI.

See [AGENTS.md](./AGENTS.md) for repository conventions and [prompts.md](./prompts.md) for the coding-agent prompt templates.
