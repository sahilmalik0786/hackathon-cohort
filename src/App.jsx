
import Home from './pages/Home'
import { useTheme } from './theme_provider/ThemeProvider'

const App = () => {
 const{DarkTheme} = useTheme()

  return (
    <div className={`w-full h-screen ${DarkTheme && 'dark'}`}><Home/></div>
  )
}

export default App