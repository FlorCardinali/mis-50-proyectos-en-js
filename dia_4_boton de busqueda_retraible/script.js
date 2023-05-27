const barra_de_busueda = document.querySelector(".input");
const boton_busqueda = document.querySelector(".btn");
const contenedor = document.querySelector(".container");

boton_busqueda.addEventListener('click', () => {
    if (contenedor.classList.contains("active")){
        contenedor.classList.remove("active");
    }else{
        contenedor.classList.add("active");
    }
    barra_de_busueda.focus();
})
const contenedor_mensajes = document.querySelector(".messages");




function mostrarTexto(event) {
    
    if (event.key === "Enter") {
      var texto = barra_de_busueda.value;
      const mensajito = document.createElement("p");
      mensajito.innerHTML = texto;
      if (barra_de_busueda.value !== ""){
        contenedor_mensajes.appendChild(mensajito);
        barra_de_busueda.value = "";
      }
      mensajito.scrollIntoView({ behavior: "smooth", block: "end" })
    }
    if(contenedor_mensajes.childElementCount > 0){
        contenedor_mensajes.classList.add("con-algo");
    }
  }