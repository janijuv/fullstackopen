import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UniCafeApp from './UniCafeApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UniCafeApp />
  </StrictMode>,
)
