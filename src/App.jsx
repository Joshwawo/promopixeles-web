import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import Contacto from './pages/Contacto'
import ProductosYservicios from './pages/ProductosYservicios'
import Error404 from './pages/Error404'
import Codikash from './pages/services/Codikash'
import Cashless from './pages/services/Cashless'

function App() {

  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
      
        <div className=''>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/productos&servicios' element={<ProductosYservicios/>} />
            <Route path='/codikash' element={<Codikash/>}/>
            <Route path='/cashless' element={<Cashless/>} />
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='*' element={<Error404/>} />

          </Routes>
        </div>
        <Footer/>

      </BrowserRouter>
      
    </div>
  )
}

export default App
