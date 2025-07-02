document.addEventListener('DOMContentLoaded', () => {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  const renderizarProductos = () => {
    url = "https://dummyjson.com/products"; //"https://dummyjson.com/products/category/groceries"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let contenedorProductos = document.getElementById('contenedor-productos');

        for (const producto of data.products){
            let tarjetaProducto = document.createElement('article');
            tarjetaProducto.classList.add('tarjeta-producto');

            let imagenProducto = document.createElement('img');
            imagenProducto.classList.add('imagen-producto');
            imagenProducto.src = producto.image[0];
            imagenProducto.alt = producto.description;


            let tituloProducto = document.createElement('h3');
            tituloProducto.classList.add('titulo-producto'); 
            tituloProducto.textContent = producto.title;

            let PrecioProducto = document.createElement('p');
            PrecioProducto.textContent = `$${producto.price}`;

            let btnAgregar = document.createElement('button');
            btnAgregar.textContent = 'Agregar al carrito';
            btnAgregar.addEventListener('click', () => { 
                alert(`${producto.title} agregado al carrito`);
                agregarProducto()
                actualizarProducto();

            
            });


        tarjetaProducto.appendChild(imagenProducto);
        tarjetaProducto.appendChild(tituloProducto);
        tarjetaProducto.appendChild(PrecioProducto);    

        contenedorProductos.appendChild(tarjetaProducto);
        }
        });
  /*     .catch((err) => console.log("Error al cargar los productos: ", err));*/
        }; 
        const agregarProducto = (producto) => {
            carrito.push(producto);
            localStorage.setItem('carrito', JSON.stringify(carrito));

            const contadorCarrito = document.getElementById('contador-carrito');
            contadorCarrito.textContent = carrito.length;

        };

         actualizarProducto();
  });
        