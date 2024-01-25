import { useCookies } from 'react-cookie';
import { Routes, Route, useParams } from 'react-router-dom';
import NewSearchPage from './pages/NewSearch';
import ShowWeatherPage from './pages/ShowWeather';

function App() {

  
  
  return (
      <Routes>
        <Route path='/' element={<NewSearchPage/>} />
        <Route path='/:location' element={<ShowWeatherPage/>} />
      </Routes>
  )
  
}

export default App
