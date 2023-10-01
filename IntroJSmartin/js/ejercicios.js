function ejercicio1(){
  const nombre = prompt("Ingresa tu nombre:");
  const fechanacimiento = prompt("Ingresa tu fecha de nacimiento (año/mes/dia):");
  const edad = calcularEdad(fechanacimiento);
  const mensaje = documento.getElementById('msj1')
  mensaje.innerHTML = "Hola " + nombre + ", tenes " + edad + " años!"
}   
  
function ejercicio2(){
  const frutaElegida = prompt("Ingrese una fruta:")
  const resultado = arrayFrutas(frutaElegida);
  const mensaje = documento.getElementById('msj2')
  if(resultado == true){
    mensaje.innerHTML = "Tenemos " + frutaElegida
  }else{
    mensaje.innerHTML = "No tenemos " + frutaElegida
  }
} 

function ejercicio3(){
  const numero1 = 10
  const numero2 = '10'
  let resultado1 = false
  let resultado2 = false
  if(numero1 == numero2){
    resultado1 = true
  }
  if(numero1 === numero2){
    resultado2 = true
  }
  const mensaje = documento.getElementById('msj3')
  mensaje.innerHTML = "10 == '10' es " + resultado1 + " y 10 === '10' es " + resultado2 + "10.6 es de tipo number" + "true == 1 porque false == 0"
}

function ejercicio4(){
  const ciudad = {
    nombre: "Buenos Aires",
    fechaFundacion: "1536",
    poblacion: "3.120.000",
    extencion: "45654m²"
  } 
  const mensaje = document.getElementById('msj4')
  mensaje.innerHTML = " La ciudad se llama " + ciudad.nombre + "<br>se fundó en " + ciudad.fechaFundacion + "<br>Sus habitantes son " + ciudad.poblacion + "<br>Y su extensión es de " + ciudad.extencion
}

function ejercicio5(){
  const numeros = [20, 5 ,3, 17, 54, 6]
  const numeros2 = multiplicar(numeros)
  const mensaje = document.getElementById('msj5')
  mensaje.innerHTML = numeros2
}

function ejercico6(){
  const piso1 = ["*", "**", "***", "****", "*****"]
  const piso2 = ["----*----", "---***---", "--*****--", "-*******-", "*********"]
  for(const string of piso1){
    console.log(string)
  }
  for(const string of piso2){
    console.log(string1)
  }
}

function ejercicio7(){
  const nombrelist = prompt("Ingrese una lista de nombres separados por coma")
  let nombres = nombrelist.split(',')
  let nombresA = empiezaconA(nombres)
  console.log(nombresA)
  const mensaje = document.getElementById('msj7')
  mensaje.innerHTML = nombresA 
}

function ejercicio8(){
  const cadena = prompt("Ingrese una oración")
  const palabraRemplazable = prompt("Ingrese una palabra de la oración anterior que quieras remplazar")
  const palabraRemplazo = prompt("Ingrese una palabra para usar de remplazo")
  const cadena2 = cadena.replace(palabraRemplazable, palabraRemplazo)
  const mensaje = document.getElementById('msj8')
  mensaje.innerHTML = cadena2
}

function ejercicio9(){
  const cadena = prompt("Ingrese una oración")
  const numero = prompt("Ingrese un numero")
  const cadena2 = cadena.slice(numero)
  const mensaje = document.getElementById('msj9')
  mensaje.innerHTML = cadena2
}

function ejercicio10(){
  const cadena = prompt("Escribi una lista de palabras y separalas por una coma")
  const cadena2 = cadena.replaceAll(',', '-')
  const mensaje = document.getElementById('msj10')
  mensaje.innerHTML = cadena2
}

function ejercicio11(){
  const valores = prompt("Ingresa una lista de pedidos en el foomato 'nombre:total' y separalos con comas")
  total = calcularRecaudacion(valores);
  const mensaje = document.getElementById('msj11');
  mensaje.innerHTML = total
}