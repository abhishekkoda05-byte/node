fetch("http://localhost:3000/womens")
.then((response) => response.json())
.then((products) => {
  
    let container = document.getElementById("container");
    products.forEach((product) => {
      
        container.innerHTML += `
        <a href="womens-products.html?id=${product.product_id}">
         <div>
          <h1>${product.title}</h1>
          <img src="${product.image}" width=150/>
          <p>${product.product_id}</p>
         </div>
        </a>
        `
    });
})