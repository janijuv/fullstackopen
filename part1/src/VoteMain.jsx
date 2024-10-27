import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import VoteApp from './VoteApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VoteApp />
  </StrictMode>,
)
