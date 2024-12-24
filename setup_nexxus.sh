#!/bin/bash

# setup_nexxus.sh
# A comprehensive script to set up the Nexxus project

set -e

# Function to display informational messages
echo_info() {
  echo -e "\033[1;34m[INFO]\033[0m $1"
}

# Function to display warning messages
echo_warning() {
  echo -e "\033[1;33m[WARNING]\033[0m $1"
}

PROJECT_ROOT=$(pwd)
echo_info "Project Root: $PROJECT_ROOT"

echo_info "Removing existing node_modules and package-lock.json..."
rm -rf node_modules package-lock.json

echo_info "Installing React and React-DOM..."
npm install react@^18.2.0 react-dom@^18.2.0

echo_info "Installing dev dependencies..."
npm install --save-dev \
  @eslint/eslintrc@^2.1.4 \
  eslint@^8.57.0 \
  eslint-plugin-react@^7.33.2 \
  eslint-plugin-react-hooks@^4.6.0 \
  prettier@^3.1.0 \
  @vitejs/plugin-react@^4.2.1 \
  vite@^5.0.12 \
  @types/react@^18.2.48 \
  @types/react-dom@^18.2.18

echo_info "Creating ESLint configuration..."
cat > .eslintrc.js <<EOL
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
EOL

echo_info "Creating Vite configuration..."
cat > vite.config.js <<EOL
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
EOL

echo_info "Creating src directory and main App component..."
mkdir -p src
cat > src/App.jsx <<EOL
import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Welcome to Nexxus</h1>
      <p>Your application is set up and ready to go!</p>
    </div>
  )
}

export default App
EOL

echo_info "Creating main.jsx entry point..."
cat > src/main.jsx <<EOL
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
EOL

echo_info "Creating index.html..."
cat > index.html <<EOL
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nexxus</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOL

echo_info "Adding scripts to package.json..."
npm pkg set scripts.dev="vite" \
            scripts.build="vite build" \
            scripts.lint="eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0" \
            scripts.preview="vite preview"

echo_info "Setup complete. You can now run 'npm run dev' to start your development server."

