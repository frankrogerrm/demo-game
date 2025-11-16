# Demo Game – Conway's Game of Life (React)

## 📑 Index

- [Problem Statement](#-problem-statement)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Assumptions & Edge Cases](#-assumptions--edge-cases)
- [Testing](#-testing)
- [Code Quality & Recommendations](#-code-quality--recommendations)
- [Checklist](#-checklist-from-challenge-recommendations)
- [License](#-license)

---

## 📌 Problem Statement

This project implements **Conway's Game of Life** as a React front‑end application.  
The app simulates the evolution of a grid of cells according to Conway's rules, with controls to interact and test different states.

The challenge required:

1. A board that allows **turning on and off squares**.
2. A way to **advance to the next state**.
3. A way to **play continuously** (forever advancing states).
4. A way to **advance X number of states**.
5. Treat the simulation logic as if it were an **API** (no backend required).
6. **Production‑ready** implementation, with tests and documentation.
7. No authentication/authorization needed.

---

## 🚀 Installation

### Requirements

- **Node.js** (>=16)
- **npm** or **yarn**

### Steps

```bash
# Clone the repository
git clone https://github.com/frankrogerrm/demo-game.git
cd demo-game

# Install dependencies
npm install

# Run locally
npm start

# Open in browser
http://localhost:3000
```

---

## 🎮 Usage

- **Click on cells** to toggle alive/dead.
- Press **Next** to advance one generation.
- Press **Play** to run automatically; use **Pause** to stop.
- Enter a number and press **Advance X** to jump forward that many generations (must be >= 1).
- Press **Clear** to reset the board.
- The game stops automatically if the grid becomes empty or stagnant.

---

## 🧩 Project Structure

### Code Organization

```
src/
├─ components/
│  ├─ Board.tsx                    # Grid with clickable cells
│  └─ Controls.tsx                 # Buttons and input controls
├─ hooks/
│  ├─ useGameOfLife.ts             # React hook with game logic
│  └─ useGameOfLife.test.ts        # Tests for game hook
├─ services/
│  ├─ gameService.ts               # Pure functions for Conway's rules
│  └─ gameService.test.ts          # Tests for game logic
├─ utils/
│  └─ constants.ts                 # Configurable grid size
├─ App.tsx                         # Main app layout
├─ App.test.tsx                    # UI component tests
├─ App.integration.test.tsx        # Integration tests
├─ index.tsx                       # Entry point
├─ index.css                       # Global styles
├─ App.css                         # App component styles
├─ setupTests.ts                   # Jest configuration
└─ react-app-env.d.ts             # TypeScript environment types
```

### File Descriptions

**Components:**

- **components/Board.tsx**: Renders the interactive grid with clickable cells for toggling state.
- **components/Controls.tsx**: Provides UI buttons and input controls for game interaction.

**Hooks:**

- **hooks/useGameOfLife.ts**: Custom React hook encapsulating game state and logic.
- **hooks/useGameOfLife.test.ts**: Unit tests for hook functions (toggleCell, next, clear, advanceX).

**Services:**

- **services/gameService.ts**: Pure functions implementing Conway's Game of Life rules.
- **services/gameService.test.ts**: Unit tests for Conway's rules (birth, survival, death).

**Utilities & Configuration:**

- **utils/constants.ts**: Configuration constants for grid dimensions and other settings.

**Main Application:**

- **App.tsx**: Main application layout and component composition.
- **App.test.tsx**: Tests for UI component rendering and initial state.
- **App.integration.test.tsx**: Integration tests for user interactions (click, Next, Clear).
- **index.tsx**: Application entry point and React DOM rendering.

**Styling & Configuration:**

- **index.css**: Global application styles.
- **App.css**: Component-specific styles.
- **setupTests.ts**: Jest test environment configuration.
- **react-app-env.d.ts**: TypeScript environment type definitions.

---

## 🧠 Assumptions & Edge Cases

### Configurable Settings

- Grid size is configurable via `DEFAULT_ROWS` and `DEFAULT_COLS` in `constants.ts`.

### Input Validation

- Input for "Advance X" is validated (must be >= 1).
- Invalid inputs are rejected with user feedback.

### Auto-Stop Conditions

The game stops automatically when:

- **All cells are dead** (empty grid - no more life).
- **The grid does not change** between generations (stagnant state).

### Performance Considerations

- Performance is fine for small to medium grids (default 10x10).
- Algorithm scales efficiently with larger sizes if needed.
- No backend API required; logic is encapsulated in services/hooks as if exposed by an API.

### Grid Wrapping

- The grid is treated as a finite 2D space (no wrapping at edges).
- Cells at boundaries have fewer neighbors to check.

---

## 🧪 Testing

Run tests with:

```bash
npm test
```

### Unit Tests

- **gameService.test.ts**: Validates Conway's rules (birth, survival, death).

  - Tests for correct neighbor counting.
  - Tests for cell birth, survival, and death conditions.
  - Tests for various grid configurations.

- **useGameOfLife.test.ts**: Validates hook functions (toggleCell, next, clear, advanceX).
  - Tests state management.
  - Tests generation advancement logic.
  - Tests edge cases (empty grid, invalid input).

### Integration Tests

- **App.test.tsx**: Validates that UI renders correctly.

  - Tests component rendering.
  - Tests initial state setup.

- **App.integration.test.tsx**: Validates that clicking Next or Clear updates the board.
  - Tests user interactions.
  - Tests state changes reflected in UI.
  - Tests multiple operations in sequence.

### Test Coverage

- Functional correctness tested for all use cases.
- Edge cases handled and validated.
- User interactions verified.

---

## 📐 Code Quality & Recommendations

### Code Standards

- **Readable code**: Clear variable names, modular structure, logical organization.
- **Avoid hardcoding**: Grid size and configuration in `constants.ts`.
- **Comments**: Added in complex logic (auto‑stop in play mode, neighbor calculation).
- **Error handling**: Input validation for Advance X, graceful stop on empty/stagnant grid.

### Testing & Validation

- **Testing**: Comprehensive unit and integration tests included.
- **Coverage**: High test coverage for critical paths.

### Performance & Optimization

- **Performance**: Efficient O(n × m) algorithm, suitable for challenge scope.
- **Algorithm**: Optimized Conway's Game of Life implementation.

### Security & Deployment

- **Security**: No backend, no sensitive data exposed.
- **Deployment readiness**: Simple `npm start`, environment configurable.

### Documentation & Maintenance

- **Documentation**: README with problem, usage, assumptions, trade‑offs, and tests.
- **Version control**: Meaningful commit messages, branching strategy recommended (`feature/<task>`).
- **Inline comments**: Complex logic well-documented.

### Extensibility

- **Modular design** allows future features:
  - Variable cell size
  - Preset patterns
  - Speed controls
  - Theme customization
  - Export/import grid states
  - Sound effects

---

## ✅ Checklist (from Challenge Recommendations)

- [x] **Functional correctness** tested for all use cases
- [x] **Code quality** adheres to best practices
- [x] **Comprehensive error handling** implemented
- [x] **Unit and integration tests** included with high coverage
- [x] **Optimized for performance and scalability**
- [x] **Properly documented** (README, inline comments, and API docs)
- [x] **Ready for deployment** with environment configurations
- [ ] **Dockerfile** (optional, not included)

---

## 📄 License

This project is for demonstration and interview purposes.
