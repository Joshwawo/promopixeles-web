import Y from '../components/Home/Y'
import {NavLink} from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
      <Y/>
      
        <div className='py-40 xl:py-64 text-center h-screen'>
          <p className=' font-bold text-9xl'>404</p>
          <p  className=' font-bold text-4xl'>  Page Not Found </p>
          <NavLink to="/">
            <button className=' font-semibold hover:underline text-xl mt-10 bg-yellow-400 rounded-md py-2 px-2  '> {"</"}Regresar al Inicio {">"}</button>
          </NavLink>
        </div>
        
    </div>
  )
}

export default Error404