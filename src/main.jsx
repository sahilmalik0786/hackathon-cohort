
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './theme_provider/ThemeProvider.jsx'
import SmoothScrollProvider from './components/SmoothScrollProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(

  <ThemeProvider>
    <SmoothScrollProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </SmoothScrollProvider>
  </ThemeProvider>


)
