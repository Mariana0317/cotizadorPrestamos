import React, { Fragment, useState } from "react";
import { calcularTotal } from "../helpers";

const Formulario = (props) => {
  //pero podemos aplicar destructuring y pner ({cantidad, setCantidad}) o (props) pero co los props no me funciona la funcion setCantidad
  const {
    cantidad,
    setCantidad,
    plazo,
    setPlazo,
    setTotal,
    setCargando,
  } = props; //cuando crece demasiando el destructing en parentesis de arriba en la funcion pasamos solo props y lo destructuramos abajo
  const [error, setError] = useState(false); //cuando tienes un error inicia con false porque no hay error hasta que el usuario haga algo mal entonces ahi lo cambiamos a true
  //cuanado el ususario hace click en submit el boton del formulario
  const calcularPrestamo = (e) => {
    e.preventDefault();
    //primero debemos validar
    if (cantidad === 0 || plazo === "") {
      console.log("hay un error");
      //si hay error le cambiamos el state error a true y ademas muestre un mensaje de error
      setError(true);
      return; //el return es porqe se ejecuta error true e inmendiamente error false
      // para mostrar algo aqui definimos un state
    }
    //luego realizar la cotización luego este paso de realizar la cotizacion
    //el usuario corrige su error entonces el state pasa a false y elimina el error previo
    setError(false);
    //habilitar el spinner
    setCargando(true);
    setTimeout(() => {
      //aqui hacemos uso de la funcion de helpers
      const total = calcularTotal(cantidad, plazo); //obtenemos la cantidad de interses que el usuario tendira que pagar
      //aqui guradamos el total una vez calculado
      setTotal(total);

      //desabilitar el spinner
      setCargando(false);
    }, 3000);
  };

  return (
    <Fragment>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
              onChange={(e) => setPlazo(parseInt(e.target.value))}
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      {error ? (
        <p className="error">Todos los campos son obligatorios</p>
      ) : null}
    </Fragment>
  );
};

export default Formulario;
