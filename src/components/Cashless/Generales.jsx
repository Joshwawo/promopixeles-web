import beneficios from '../../img/Cashless/Capa_16.webp'
import aumentoVentas from '../../img/Cashless/Capa_17.webp'
import Recompensas from '../../img/Cashless/Capa_18.webp'
import historialDatos from '../../img/Cashless/Capa_19.webp'
import analiticas from '../../img/Cashless/Capa_20.webp'
import intelNegocios from '../../img/Cashless/Capa_21.webp'
import celGrande from '../../img/Cashless/Capa_27.webp'
import celChikito from '../../img/Cashless/Capa_28.webp'
const Generales = () => {
  return (
    <div className='items flex container-95'>
        <div className="izquierda w-1/2">
            <p>Funcionales Generales</p>
            <div className="items-icons flex ">
                <div className="img1">
                    <img src={beneficios} alt="Beneficios" />
                    <p>Beneficios <br />Sanitarios COVID</p>

                </div>
                <div className="img2">
                    <img src={aumentoVentas} alt="" />
                    <p>Aumento de <br />Ventas</p>
                </div>
                <div className="img2">
                    <img src={Recompensas} alt="" />
                    <p>Recompensas</p>
                </div>
                <div className="img2">
                    <img src={historialDatos} alt="" />
                    <p>Historico de <br />datos</p>
                </div><div className="img2">
                    <img src={analiticas} alt="" />
                    <p>Analiticas</p>
                </div><div className="img2">
                    <img src={intelNegocios} alt="" />
                    <p>Inteligencia <br /> de negocios</p>
                </div>

            </div>

        </div>
        <div className="derecha w-1/2">
            <img src={celGrande} alt="Celular Grande" />
            <img src={celChikito} alt="Celular Chikito" />


        </div>
    </div>
  )
}

export default Generales