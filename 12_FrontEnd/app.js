fetch('https://dummyjson.com/products') //pidoslosdatosme retoma la promesa.
  .then(response => response.json())
  .then(data => {
    data.forEach((prod) => {

      let article = document.createElement('article');
      let titulo = document.createElement('h2');
      let titulo = document.createElement('h2');
     
      postsContainer.appendChild(postElement);
    });
  })
  .catch(error => console.error('Error fetching posts:', error));