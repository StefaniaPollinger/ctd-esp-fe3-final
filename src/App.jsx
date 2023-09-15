import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
import { useContextGlobal } from './Components/utils/global.context';



function App() {
  const { state } = useContextGlobal(); // Obtenes el estado del contexto global
  const { theme } = state;

  // Aplica una clase CSS condicionalmente basada en el valor de 'theme'
  const appClassName = theme ? 'light' : 'dark';

  return (
      <div className={appClassName} >
          <Navbar/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
          <Footer/>
      </div>
  );
}

export default App;
