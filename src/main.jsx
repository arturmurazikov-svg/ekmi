import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mebel from './Mebel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Mebel/>
  </StrictMode>,
)
