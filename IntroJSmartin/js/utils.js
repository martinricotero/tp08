function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
    const fechaNacimientoArray = fechaNacimiento.split("-");
    const añoNacimiento = parseInt(fechaNacimientoArray[0]);
    const mesNacimiento = parseInt(fechaNacimientoArray[1]) - 1; 
    const diaNacimiento = parseInt(fechaNacimientoArray[2]);
    
    let edad = fechaActual.getFullYear() - añoNacimiento;
    if (fechaActual.getMonth() < mesNacimiento || (fechaActual.getMonth() === mesNacimiento && fechaActual.getDate() < diaNacimiento)) {
      edad--;
    }
    return edad;
}

function arrayFrutas(frutaElegida){
  const frutas = ["manzana", "naranja", "pera", "ciruela", "tomate", "sandia", "frutadragon", "carne", "banana", "frutilla"]
  let resultado = false;
  frutas.forEach(String => {
    if(String == frutaElegida){
      resultado = true
    }
  });
  return resultado;
}

function multiplicar(numeros){
  let numeros2 = []
  numeros.forEach(numero => {
    numeros2.push(numero * 2)
  })
  return numeros2
}

function empiezaconA(nombres){
  let nombresA = []  
  nombres.forEach(n => {
    if (n.startsWith("A")) { 
      nombresA.push(n); 
    }
  })
  return nombresA;
}

function calcularRecaudacion(valores) {
  var pedidos = valores.split(', ');
  var Recaudado = 0;
  for (var i = 0; i < pedidos.length; i++) {
    var pedido = pedidos[i].split(':');
    var total = parseFloat(pedido[1]);
    Recaudado += total;
  }
  return Recaudado
}