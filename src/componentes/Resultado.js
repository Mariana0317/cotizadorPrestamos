import React from 'react'

const Resultado = (props) => 
    ( 
        <div className="u-full-width resultado">
      <h2>Resumen</h2>
      <p>La Cantidad solicitada es: $ {props.cantidad} </p>
       <p>A pagar en: {props.plazo} Meses</p>
       <p>Su pago mensual es de: $ {(props.total / props.plazo).toFixed(2)} </p>
       <p>Total a pagar: $ {(props.total).toFixed(2)} </p>
        </div>
     );

 
export default Resultado;