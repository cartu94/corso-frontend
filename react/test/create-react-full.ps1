#!/bin/bash

param(
    [string]$projectName
)

# Create a new React project with Vite
npm create vite@latest $projectName -- --template react
cd $projectName

# Install dependencies
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install additional dependencies
npm install react-router-dom

# Replace the content of tailwind.config.js
echo -n '/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}' > tailwind.config.js

echo -n '@tailwind base;
@tailwind components;
@tailwind utilities;' > src/index.css

echo -n '' > src/App.css