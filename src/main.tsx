// import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename='/zustand_tutorial/'>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<h1 style={{width: '100vw', textAlign: 'center', marginTop: '2rem' }}>404 Not Found</h1>} />
        </Routes>
    </BrowserRouter>
)
