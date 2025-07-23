
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './theme_provider/ThemeProvider.jsx'
import SmoothScrollProvider from './components/SmoothScrollProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'

createRoot(document.getElementById('root')).render(

  <ThemeProvider>
    <SmoothScrollProvider>
   
        <RouterProvider router={router} />
     
    </SmoothScrollProvider>
  </ThemeProvider>


)
