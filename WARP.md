# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Overview
- This repo is a collection of frontend practice problems organized by year. Each year contains multiple day/problem folders. Many problems are plain JS/TS utilities with tests; some are small React + Vite apps.
- Tests are aggregated via a Vitest workspace at vitest.workspace.js, which points to per-year Vite configs: 2023/vite.config.js, 2024/vite.config.js, 2025/vite.config.js.
- Linting is heterogeneous: older JS projects use .eslintrc.cjs, newer TS/React projects use flat eslint.config.js (ESLint v9). The root lint script targets JS only.
- A small Notes CLI lives at 2023/day-28/notes (see below).

Common commands
- Install root deps (Vitest, Vite, ESLint for JS):
  - npm install

- Run all tests (Vitest workspace):
  - npm test

- Run tests with coverage:
  - npm run coverage

- Run a single test file:
  - npm run test -- 2024/half-2/day-15/size/size.test.ts
  - npm run test -- 2023/day-16/unique-array/unique-array.test.js

- Filter by test name (substring match):
  - npm run test -- -t "function-length"

- Lint (JS only, repo-wide):
  - npm run lint
  - For TS projects that use flat ESLint (v9), run within that app, e.g.:
    - npm --prefix 2025/3/20/counter run lint

- Develop, build, and preview a specific React app (run within the app directory or via --prefix):
  - npm --prefix 2024/half-2/day-15/flight-booker install
  - npm --prefix 2024/half-2/day-15/flight-booker run dev
  - npm --prefix 2024/half-2/day-15/flight-booker run build
  - npm --prefix 2024/half-2/day-15/flight-booker run preview

Notes CLI (2023/day-28/notes)
- Entrypoint: 2023/day-28/notes/index.js (uses yargs). Example commands:
  - node 2023/day-28/notes/index.js new "Buy milk" -t grocery,urgent
  - node 2023/day-28/notes/index.js all
  - node 2023/day-28/notes/index.js find milk
  - node 2023/day-28/notes/index.js remove 3
  - node 2023/day-28/notes/index.js clean
  - node 2023/day-28/notes/index.js web 5000
- package.json also declares a bin named "note", but its path points to ./day-28/...; use the node commands above unless the bin path is updated or the package is linked globally.

Architecture and structure
- Year-centric layout with multiple styles:
  - 2023/day-XX/... (JS-focused utilities and some React samples)
  - 2024/half-1/day-XX/... and 2024/half-2/day-XX/... (mix of JS/TS utilities and React apps)
  - 2024/11/1, 2025/3/20, etc. (calendar-style folders). Many of these use TypeScript + Vite + React 19.
- Tests:
  - Vitest workspace (vitest.workspace.js) aggregates per-year projects by referencing their Vite configs.
  - Test files live beside solutions, named *.test.js or *.test.ts.
  - You can target a file path or filter by name via -t; coverage is supported via npm run coverage.
- Build/dev for UI apps:
  - Each app folder contains its own package.json with scripts: dev, build, preview, lint.
  - Typical Vite React layout: src/components, src/assets (images and react.svg), and (for some) src/styles.
  - Some apps (e.g., 2024/half-2/day-15/flight-booker) use Tailwind (tailwind.config.js + postcss.config.js). Use the per-app scripts above.
- Linting patterns:
  - Root ESLint is v8 and configured for JS only (eslint . --ext js,jsx). It will not lint TS files.
  - TS/React apps include eslint.config.js (flat config, ESLint v9). Run lint from inside those app folders (or via npm --prefix) to apply the flat config.
- Module system:
  - Root package.json sets "type": "module". Prefer ESM (import/export) at the root level.

Key references from existing docs
- README.md clarifies repo purpose and the year/day/problem hierarchy and recommends running tests via npm install && npm run test.
- CLAUDE.md lists the same core commands (test, coverage, dev, build, preview, lint) and mentions the Notes CLI at 2023/day-28/notes.

Tips for working efficiently here
- Use root-level tests to validate algorithmic problems across years; drop to a specific app directory only when you need to run a dev server.
- For TS-based apps, rely on each app’s local toolchain (TypeScript, ESLint v9) by running scripts via npm --prefix <app-path>.
