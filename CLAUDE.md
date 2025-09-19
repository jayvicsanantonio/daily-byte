# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Testing
- Run all tests: `npm test` or `npm run test`
- Run tests with coverage: `npm run coverage`
- Tests use Vitest framework with workspace configuration

### Development
- Start development server: `npm run dev` (uses Vite)
- Build project: `npm run build`
- Preview production build: `npm run preview`
- Lint code: `npm run lint` (ESLint with React rules)

### CLI Tool
- The repository includes a notes CLI tool at `2023/day-28/notes/index.js`
- Can be run with the `note` command (defined in package.json bin)

## Repository Architecture

### Structure
- **Year-based organization**: Solutions are organized by year (2023/, 2024/, 2025/)
- **Daily practice format**: Each year contains days (day-1/, day-2/, etc.)
- **Problem-based structure**: Each day contains individual problem solutions
- **Consistent tooling**: Each major section has its own vite.config.js for workspace testing

### Testing Strategy
- **Vitest workspace**: Root vitest.workspace.js coordinates testing across all years
- **Individual test files**: Each solution includes a corresponding `.test.js` file
- **Comprehensive test coverage**: Tests include edge cases, input validation, and mutation checks
- **Test patterns**: Uses describe/test/expect structure with Vitest

### Code Patterns
- **ES6 modules**: Uses import/export syntax throughout
- **Default exports**: Most utility functions use default export
- **Functional programming**: Solutions favor pure functions with immutable approaches
- **React components**: UI solutions use React with Vite for development

### Frontend Solutions
- **React + Vite**: UI components use React with Vite for development and building
- **CSS organization**: Separate CSS files for styling (often in src/styles/ directories)
- **Component structure**: React components typically in src/components/ directories
- **Asset management**: Images and static assets in src/assets/ directories

### JavaScript Solutions
- **Utility functions**: Algorithm and data structure implementations
- **Test-driven approach**: Each function has comprehensive test coverage
- **Input validation**: Solutions handle edge cases like empty arrays, invalid inputs
- **Immutability**: Functions avoid modifying input parameters

## Development Workflow

When working on problems in this repository:

1. Navigate to the specific year/day/problem directory
2. Each problem contains its implementation file and corresponding test file
3. Run tests to verify solutions work correctly
4. For React projects, use `npm run dev` to start development server
5. Use `npm run lint` to ensure code style compliance

## Key Technologies
- **Vitest**: Testing framework for JavaScript/TypeScript
- **React**: UI library for frontend components
- **Vite**: Build tool and development server
- **ESLint**: Code linting with React-specific rules
- **Node.js**: Runtime for CLI tools and build processes