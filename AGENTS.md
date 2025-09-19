# Repository Guidelines

## Project Structure & Module Organization
Daily Byte is organized chronologically: directories `2023/`, `2024/`, and `2025/` hold daily challenges. Each date folder (for example `2025/4/24/find-index/`) keeps the solution module (`*.ts`), matching tests, and an optional `dist/` with compiled JS—treat `dist/` as generated. Some UI-heavy days (see `2023/day-10/flight-booker/`) bundle a standalone Vite app with its own `src/`, `public/`, and local `package.json`. Shared tooling lives at the repo root alongside `package.json`, `vitest.workspace.js`, and `node_modules/`. Add new work under the correct year/day path to preserve the timeline.

## Build, Test, and Development Commands
Install dependencies once at the root: `npm install`. Run the Vitest workspace with `npm run test`, or compute coverage using `npm run coverage`. Enforce lint rules before committing via `npm run lint`. Targeted runs are encouraged—`npx vitest run 2025/4/24/find-index/find-index.test.ts` trims feedback to a single kata. For UI projects enter their folder and rely on local scripts (`npm run dev`, `npm run build`, `npm run preview`); root scripts accept `--config 2025/vite.config.js` if you prefer to stay at the top level.

## Coding Style & Naming Conventions
Use modern ES modules and TypeScript by default. Follow the prevailing two-space indentation, single-quote strings, and kebab-case file and directory names (`chunk/chunk.ts`, `chunk/chunk.test.ts`). Export a single public function per kata; keep helper utilities local unless reused across multiple days. `npm run lint` surfaces ESLint rules (React presets in UI folders) and must pass without warnings. Do not hand-edit `dist/` output—regenerate it via the relevant build script when needed.

## Testing Guidelines
Vitest drives all exercises. Colocate tests next to implementations using the `feature.test.ts` suffix and mirror the module name to keep discovery automatic. Prefer descriptive `describe`/`it` blocks and async-friendly assertions (`await`, `vi.useFakeTimers()`) as shown in `2025/4/11/sleep/sleep.test.ts`. Run `npm run coverage` when adding or refactoring logic and aim to leave coverage at or above the current baseline.

## Commit & Pull Request Guidelines
Keep commits tight and imperative, mirroring the existing history (`Find Index`, `Drop While`). Reference the date or kata when it clarifies scope, and avoid bundling unrelated challenges. Pull requests should include a short summary, test notes (`npm run test`, `npm run lint`), and screenshots or GIFs for UI changes. Link any tracked issues or Daily Byte prompts so reviewers understand the context quickly.
