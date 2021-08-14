//aqui tenemos funciones que podemos reutilizar muchas veces y ademas no cargamos tanto los componentes de mucho codigo

export function calcularTotal(cantidad, plazo) {
  //cantidades
  // si el usuario pide de 0-1000 entonces el interes va a ser del 25%
  // 1001-5000 = 20%
  //5001-10000 = 15%
  //+10000 = 10%
  let totalCantidad; //es decir si yo pido mil va aumentar el 25% y se va a guardar esa cantidad
  if (cantidad <= 1000) {
    totalCantidad = cantidad * 0.25; // es decir si el usuario pide mil se multiplican esos mil por .25 y ese va a ser su interes es decir 250 de interes
  } else if (cantidad > 1000 && cantidad <= 5000) {
    totalCantidad = cantidad * 0.2;
  } else if (cantidad > 5000 && cantidad <= 10000) {
    totalCantidad = cantidad * 0.15;
  } else {
    totalCantidad = cantidad * 0.1;
  }
  //calcular el plazo
  //si el usuario pide pagar en tres meses solo va a pagar el 5 %
  //6 = 10%
  //12 = 15%
  //24 = 20%

  let totalPlazo = 0;

  switch (plazo) {
    case 3:
      totalPlazo = cantidad * 0.05;
      break;
    case 6:
      totalPlazo = cantidad * 0.1;
      break;
    case 12:
      totalPlazo = cantidad * 0.15;
      break;
    case 24:
      totalPlazo = cantidad * 0.2;
      break;
    default:
      break;
  }
  return totalPlazo + totalCantidad + cantidad;
}
