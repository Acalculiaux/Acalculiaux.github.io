import React from 'react'
import ReactDOM from 'react-dom/client'
import { Buffer } from 'buffer'
import App from './App.tsx'
import './styles/global.css'

// Polyfill Buffer for gray-matter/browser compatibility
window.Buffer = Buffer

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
