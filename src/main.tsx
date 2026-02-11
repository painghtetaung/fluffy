import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CanvasApp from './CanvasApp.tsx'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <CanvasApp />
    <Footer />
  </StrictMode>
)
