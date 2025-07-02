
// variable global para almacenar los productos seleccionados
let carrito = [];

fetch('https://dummyjson.com/products') //pidoslosdatosme retoma la promesa.
  .then(response => response.json())
  .then(data => {
    data.forEach((prod) => {

      let article = document.createElement('article');
      let titulo = document.createElement('h2');
      let precio = document.createElement('p');

      titulo.textContent = prod.title;
      precio.textContent = `$${prod.price}`;

      article.appendChild(titulo);
      article.appendChild(precio);

      postsContainer.appendChild(article);
    });
  })
  .catch(error => console.error('Error fetching posts:', error));
const agregarAlcarrito = (nombre,precio) =>{
    //agregar el producto como un objeto al carrito
    carrito.push({nombre,precio})

    // actualizar el contador visual del carrito
    actualizarContador()
    // muestra un alerta de confirmacion
    alert(`Agregaste : ${nombre} al carrito`)
}


// funcion para actualizar el contador del carrito
const actualizarContador = ()=>{
    //cambiamos el contenido del HTML con el ID contador-carrito
    document.getElementById("contador-carrito").textContent = carrito.length

}

// Guarda el contenido del carrito en el almacenamiento local antes de cerrar la pagina

window.addEventListener("beforeunload",()=>{
localStorage.setItem("carrito",JSON.stringify(carrito))
});