import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {  
    https: {  
      key: fs.readFileSync('./server.key'), // Ruta a server.key  
      cert: fs.readFileSync('./server.cert'), // Ruta a server.cert  
    },  
    port: 5173,  
  },
})
