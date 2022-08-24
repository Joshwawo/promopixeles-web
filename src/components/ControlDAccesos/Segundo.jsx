import React from 'react'
import Check from './Check'
import cel from '../../img/ControlDeAccesos/cel.webp'
import compu from '../../img/ControlDeAccesos/compu.webp'

const Segundo = () => {
  return (
    <div className='xl:flex container-95 pt-24 pb-12'>
        <div className="inzquierda xl:w-1/2  xl:text-xl ">
            
            <div className='mb-8 '>  
                <div className='flex'>
                    <Check/>  <p className='monserrat-bold'>Acceso controlado</p>
                </div>
                <p>Interfaz móvil para guardias de seguridad en el sitio</p>
            </div>
            <div className='mb-8'>
                <div className='flex'>
                    <Check/>  <p className='monserrat-bold'>Dashboards</p>
                </div>
                <p>Tableros para resumen directivo de información</p>
            </div>
            <div className='mb-8'>
                <div className='flex'>
                    <Check/>  <p className='monserrat-bold'>Administración de permisos de acceso</p>
                </div>
                <p>Solicitudes por usuario con requisitos configurables</p>
            </div>
            <div className='mb-8'>
                <div className='flex'>
                    <Check/>  <p className='monserrat-bold'>Practicidad para visitantes</p>
                </div>
                <p>Códigos QR para la identificación  digital del visitante</p>
            </div>

            <div className='mb-8'>
                <div className='flex'>
                    <Check/>  <p className='monserrat-bold'>Procesos configurables</p>
                </div>
                <p>Capacidad de configurar etapas en el proceso, niveles, prioridad y tiempos de atención preestablecidos</p>
            </div>
            <div className='mb-8'>
                <div className='flex'>
                    <Check/>  <p className='monserrat-bold'>Soporte Técnico</p>
                </div>
                <p>Mesa de ayuda para solicitudes de soporte técnico</p>
            </div>
            
            
            
            
        </div>

        <div className="derecha flex">
            <img src={compu} alt="Computadora" className='  w-[20rem] h-[20rem] xl:w-[40rem] xl:h-[35rem]' />
            <img src={cel} alt="Celular"  className='  w-[8rem] h-[15rem] mt-[10rem] relative right-[9rem] xl:mt-[20rem] ' />


        </div>
    </div>
  )
}

export default Segundo