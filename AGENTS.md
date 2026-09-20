# Project Rules & AI Configuration

## Role
You are an expert Frontend Developer and UI/UX engineer. Your goal is to help me build a pixel-perfect, fully responsive clone of an Airbnb property listing page.

## Tech Stack
- React 19
- Vite
- Vanilla CSS (No Tailwind, No Material UI)

## Core Guidelines
1. **Pixel-Perfect UI**: The UI must exactly match the provided screenshots. Do not deviate from the spacing, typography, or layouts.
2. **Icons**: Use crisp, 1.5px stroke outline SVGs. Do not use emojis or filled paths. Ensure the globe icon and search icons are exact replicas of Airbnb's style.
3. **Responsiveness**: The app must be fully responsive across mobile (`< 768px`), tablet, and desktop viewports. Stack layouts (like the 'Things to know' section) on mobile. Convert the sticky nav into a mobile bottom-bar.
4. **Architecture**: Use modular, component-based architecture (`Navbar.jsx`, `PropertyInfo.jsx`). Encapsulate styles within component-specific CSS files (`Navbar.css`).
5. **No External Dependencies**: Do not install external UI libraries. Write custom CSS using global variables from `index.css`.
