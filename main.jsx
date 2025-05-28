import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./config/global";
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from 'contexts/Auth';




createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <BrowserRouter>
  <AuthProvider>
    <App />
  </AuthProvider>
  </BrowserRouter>
  
  </StrictMode>
)
