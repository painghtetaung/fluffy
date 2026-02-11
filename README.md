# Fluffy HüGs

An interactive, scroll-driven canvas animation experience featuring adorable cats and dynamic visual effects. Built with React, TypeScript, and GSAP.

## Features

- **Interactive Canvas Animation**: Smooth, performant animations rendered on HTML5 Canvas
- **Scroll-Driven Stages**: Multiple animation stages triggered by scroll/swipe gestures
- **Floating Elements**: Animated bubbles and cats that respond to user interaction
- **Hover Effects**: Interactive cat elements that scale up when your cursor approaches
- **Smooth Transitions**: Powered by GSAP for fluid animations and transitions
- **Loading Screen**: Custom loading experience before revealing the main animation

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **GSAP** - Animation library
- **Tailwind CSS** - Styling
- **HTML5 Canvas** - Graphics rendering
- **Biome** - Code formatting and linting

## Installation

1. Clone the repository:
```bash
git clone git@github.com:painghtetaung/fluffy.git
cd fluffy
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Biome
- `npm run format:check` - Check code formatting
- `npm run check` - Run Biome checks and apply fixes
- `npm run check:ci` - Run Biome checks for CI

## Project Structure

```
fluffy/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Header component
│   │   ├── Footer.tsx          # Footer component
│   │   ├── LoadingScreen.tsx   # Initial loading screen
│   │   ├── ScrollIndicator.tsx # Visual scroll progress indicator
│   │   └── JapaneseText.tsx    # Japanese text overlay
│   ├── config/
│   │   └── imagesConfig.ts     # Image positions and animation configs
│   ├── App.tsx                 # Main app component
│   ├── CanvasApp.tsx           # Canvas animation logic
│   ├── App.css                 # App styles
│   ├── index.css               # Global styles
│   └── main.tsx                # App entry point
├── public/                     # Static assets (images, icons)
├── index.html
└── package.json
```

## How It Works

### Animation Stages

The application features three distinct animation stages controlled by scroll/swipe gestures:

**Stage 0 (Initial)**: All elements in their default positions with bounce animations

**Stage 1**: Elements transition to new positions, title appears, bubbles start floating vertically

**Stage 2**: Horizontal cat carousel activates, bubbles move horizontally, title fades out


### Interactive Features

- **Cat Hover Effect**: Cats scale up when your cursor gets close (desktop only)
- **Continuous Animations**: Bubbles and cats have infinite looping animations
- **Bounce Animation**: All main elements have subtle floating bounce effects


### Styling

The project uses Tailwind CSS 4.x with PostCSS for styling. Global styles are defined in `index.css` and `App.css`.
