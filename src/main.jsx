import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ThemeProvider} from './theme_provider/ThemeProvider.jsx'
import SmoothScrollProvider from './components/SmoothScrollProvider.jsx'
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <ThemeProvider>
      <SmoothScrollProvider>
          <App />
      </SmoothScrollProvider>
    </ThemeProvider>
    </BrowserRouter>,
  
)
