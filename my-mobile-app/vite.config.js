import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.js
// vite.config.js
export default {
  server: {
    proxy: {
      '/': {
        target: 'https://script.google.com/macros/s/AKfycbzpopdfgibiZ-LAg44n6vOa4nmzgHTBG7VJVwwGGB4J8hGmFWhVeOHKulUYaR2SjjDtSg/exec',
        changeOrigin: true,
        secure: false,
      },
    },
  },
};



