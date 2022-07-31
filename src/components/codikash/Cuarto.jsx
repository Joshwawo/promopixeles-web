import izquierda from '../../img/PYS/Celderecha.webp'
import derecha from '../../img/PYS/celiquierda.webp'

const Cuarto = () => {
  return (
   <div className='bg-cashless-5 pb-10'>
     <div className=' container-95 md:flex pt-32'>
         <div className="izquierda text-white xl:w-1/6 ">
          <p className='monserrat-bold text-3xl'>¡Solo <span className='text-[#e3c330]'>instala</span> y<br /><span className='text-[#e3c330]'>regístrate!</span></p>
          <div className='p-4 pb-10 monserrat-regular'>
            <p><span className=" font-bold text-2xl">· </span>Introduce tu email</p>
            <p><span className=" font-bold text-2xl">· </span>Crea una contraseña.</p>
            <p><span className=" font-bold text-2xl">· </span>¡listo!</p>
          </div>

          <div className='bg-[#e3c330] py-14 px-40 relative right-[2rem] xl:right-[6rem] bottom-4 inline-block '>
          </div>
            <p className='monserrat-bold-italic text-blac relative bottom-[8rem] text-black text-2xl '>¡Y empieza a <br /> generar puntos <br /> en tus compras!</p>
          
         </div>
         <div className="derecha flex gap-4 w-1/2 mx-auto mb-20">
          <img src={izquierda} alt="imagen izquierda" className='w-[60%] h-[50%] md:w-[60%] md:h-[90%] xl:w-[20rem] xl:h-[40rem]' />
          <img src={derecha} alt="imagen derecha" className='w-[50%] h-[50%] md:w-[0%] md:h-[70%] xl:w-[20rem] xl:h-[40rem] mt-10 md:mt-0' />

         </div>
     </div>
   </div>
  )
}

export default Cuarto