const barra_progreso = document.getElementById("barra-progreso");
const boton_antes = document.getElementById("boton-anterior");
const boton_proximo = document.getElementById("boton-proximo");
const circulos = document.querySelectorAll(".circulo");

let circulo_activo = 1;
//control del boton proximo
boton_proximo.addEventListener('click', () => {
    //si ahcen click avansamos el contador
    circulo_activo++
    console.log(circulo_activo,circulos.length)
    //controlamos que no se vaya de mambo el contador
    if (circulo_activo > circulos.length){
            circulo_activo = circulos.length;
    }
    update()
})
//comtrol del boton antes
boton_antes.addEventListener('click', () => {
    //reducir el contador cuando se presiona el boton antes
    circulo_activo--
    //controlar que el contador no des-setee el
    // estado inicial del contador
    if(circulo_activo < 1) {
        circulo_activo = 1
    }
    update()
})

function update() {
    //por cada circulo, si su key es menor a la key activa,
    // agregale el estado activo, sino quitaselo
    circulos.forEach((circulo, id) => {
        if(id < circulo_activo) {
            circulo.classList.add('activo')
        } else {
            circulo.classList.remove('activo')
        }

        if (id === circulo_activo-1){
            circulo.style.transform = 'scale(1.5)';
            circulo.classList.add("senialado");
        } else {
            circulo.style.transform = 'scale(1)';
            circulo.classList.remove("senialado");
        }
    })
    //obtenemos todos los activos
    const activos = document.querySelectorAll('.activo')
    //aumenta el ancho de la barra de progreso haciendo la cantidad de activos sobre la cnatida
    //de circulos totales para sacar la cantidad de progrecion y luego 
    //se multiplico por 100 para sacar el porcentaje para
    //mndarselo al width
    barra_progreso.style.width = (activos.length - 1) / (circulos.length - 1) * 100 + '%'

    //control de disable de los botones
    if(circulo_activo === 1) {
        boton_antes.disabled = true
    } else if(circulo_activo === circulos.length) {
        boton_proximo.disabled = true
    } else {
        boton_antes.disabled = false
        boton_proximo.disabled = false
    }

    
}