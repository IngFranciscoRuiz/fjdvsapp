import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingFabrikApp from './LandingFabrikApp'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingFabrikApp />
  </React.StrictMode>
)
