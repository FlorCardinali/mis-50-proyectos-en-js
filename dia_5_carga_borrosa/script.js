const texto_porcentaje = document.querySelector('.texto_cargando')
const imagen = document.querySelector('.imagen')
// seteamos una variable que contenga el valor del porcentaje
let porcentaje = 0

//creamos un intervalo que ejecuta la funcion cada ciertos milisegundos
let intervalo = setInterval(enfocar, 30)

function enfocar() {
// en cada iteracion aumentamos el porcentaje
  porcentaje++
// si es mayor a 100, termina el intervalo
  if (porcentaje > 100) {
    clearInterval(intervalo)
  }
//actualisamos el porcentaje
  texto_porcentaje.innerText = `${porcentaje}%`
  //escalamos el valor que tiene porcentaje para ue sea opuesto
  // para poder setear el blur, es decir, si vas 20% 
  // necesitas el complemeto, 80% de blur
  texto_porcentaje.style.opacity = re_escalar(porcentaje, 0, 100, 1, 0)
  imagen.style.filter = `blur(${re_escalar(porcentaje, 0, 100, 30, 0)}px)`
}
// formula para escalar los valores
const re_escalar = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}