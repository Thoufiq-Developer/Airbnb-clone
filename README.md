# Playpower labs test project

A pixel-perfect, fully responsive clone of the Airbnb frontend design, built from the ground up using **React**, **Vite**, and **Vanilla CSS**. This project focuses on exact UI matching, fluid responsive behavior across all devices, and an optimized component architecture.

## 🚀 Live Demo
*https://airbnb-clone-lovat-alpha.vercel.app/*

## ✨ Key Features
- **Pixel-Perfect UI**: Exact replication of typography, spacing, SVG icons, and layouts used by Airbnb.
- **Dynamic Sticky Navigation**: A secondary navigation bar that smoothly appears when scrolling past the image gallery, tracking active sections dynamically.
- **Mobile First & Fully Responsive**: 
  - Adapts flawlessly to mobile, tablet, and desktop screens.
  - The sticky navigation seamlessly transforms into a fixed mobile bottom bar (price + reserve button).
  - Responsive Grid layouts for calendars, amenities, and image galleries.
- **No UI Libraries**: Built entirely with custom CSS and modular React components for maximum control and performance.
- **Interactive Elements**: Image lightbox modals, expanding text sections, and interactive calendars.

## 🛠️ Tech Stack
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (CSS Modules & Global Variables)
- **Deployment**: Configured for seamless [Vercel](https://vercel.com/) hosting.

## 📦 Project Architecture
The application is built using a highly modular component architecture to ensure maintainability:
- **`App.jsx`**: The main orchestrator that handles global layout and wrapper containers.
- **Component Isolation**: Each distinct UI section (e.g., `Navbar`, `StickyNav`, `PropertyInfo`, `ReviewsSection`, `ReserveCard`) is encapsulated in its own `.jsx` file with a dedicated `.css` file.
- **Data Flow**: Static and mock data is managed centrally and passed down via props to avoid unnecessary prop drilling.
- **Global Tokens**: Shared design tokens (colors, fonts, breakpoints) are managed centrally in `index.css`.

## 💻 Getting Started locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) installed.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Thoufiq-Developer/Airbnb-clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd airbnb-clone
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173`.

## 🏗️ Build for Production
To generate a production-ready build:
```bash
npm run build
```
The optimized files will be located in the `dist` folder, ready to be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.
