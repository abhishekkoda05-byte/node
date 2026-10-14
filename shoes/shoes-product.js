let params = new URLSearchParams(window.location.search);
let id = params.get("id");

console.log("Full URL:", window.location.href);
console.log("Product ID:", id);

fetch(`http://localhost:3000/shoes/${id}`)
.then((response) => response.json())
.then((product) =>{
    let container = document.getElementById("container");
    container.innerHTML = `
     <div>
          <h1>${product.title}</h1>
          <img src="${product.image}" width=150 />
          <p>${product.product_id}</p>
          </div>
    `
})
