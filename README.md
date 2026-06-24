# Hope For Life Ministry Website

Welcome to the codebase for the **Hope For Life Ministry** website. This is a modern, fast, and responsive web application built with React, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide Icons](https://lucide.dev/)

## 💻 Getting Started

Follow these steps to run the website locally on your computer:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. Open your terminal and navigate to the project folder.
2. Install the dependencies by running:
   ```bash
   npm install
   ```

### Running the Development Server

Start the local development server by running:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal) to view the website. It will automatically reload when you make changes to the code.

## 🛠️ Building for Production

When you are ready to deploy the website to production, run the following command:
```bash
npm run build
```
This will compile and optimize your code into a `dist` folder. 

## 🌍 Deployment

This website is configured to be easily deployed on modern edge networks. We recommend hosting it on one of the following free platforms:

1. **Cloudflare Pages** (Recommended)
2. **Vercel**
3. **Netlify**

Simply push this repository to GitHub, sign in to your preferred hosting provider, and import the repository. The provider will automatically detect the Vite setup and handle the build and deployment process.

## 📁 Project Structure

- `src/` - Contains the main source code.
  - `components/` - Reusable UI components (Headers, Footers, Buttons, etc.).
  - `routes/` - The different pages of the website (Home, About, Events, Sermons, Give, Contact).
  - `assets/` - Images and local media.
- `public/` - Static assets that don't need to be processed (like local video files).

## 📄 License

This project is intended for the use of Hope For Life Ministry. All rights reserved.
