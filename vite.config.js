import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // globals: true is the Jest experience, no need to import describe() or test() in test code!
    environment: "jsdom", // tells the runner system that the code should simulate the browser 
    setupFiles: "src/setupTests.js" // perform any needed setup that won't fit in beforeEach() or beforeAll() 
  }
})
