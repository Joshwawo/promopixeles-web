import  casodeuso  from "../../img/Cashless/recopilacion-de-datos.webp";

const CasoDeUso = () => {
  return (
    <div className="w-full">
      <img src={casodeuso} alt="Caso de uso" className="w-full" />
      <div className="items flex justify-around gap-2">
       <p>Usuario se registra</p>
       <p>Ingresa saldo a su cuenta</p>
       <p>Proceso de compra-venta <br />Autoriza pago por QR</p>
       <p>Sincroniza transacciones <br />en sistema</p>
       <p>Métricas/Informacion de valor <br />Inteligencia de negocio</p>
      </div>
    </div>
  );
};

export default CasoDeUso;
