import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AnecdoteApp from './AnecdoteApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnecdoteApp />
  </StrictMode>,
)
