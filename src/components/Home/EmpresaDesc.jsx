import TFWebp from '../../img/transformacion-digital-800x600.webp'
import Aliansa from '../../img/aliansa-800x600.webp'
import ModeloIntegral from '../../img/modelo-integral-800x600.webp'

const EmpresaDesc = () => {
  return (
    <div className='md:flex font-semibold  container mx-auto justify-between gap-10 py-10 mb-56'>
        <div className="">
            <img src={TFWebp} alt=" TFD" />
            <p className='pt-7 pb-20'>Empresa especialista en transformacion digital con enfoque de negocio</p>
        </div>
        <div className="s">
        <img src={Aliansa} alt="ALIANSA" />

            <p className='pt-7 pb-20'>Aliazas estratégicas con empresas lideres en tecnologia</p>
        </div>
        
        <div className="s">
        <img src={ModeloIntegral} alt="MODELO DE NEGOCIO" />

            <p className='pt-7 pb-20'>Nuestro modelo de negocio es integral</p>
        </div>
    </div>
  )
}

export default EmpresaDesc