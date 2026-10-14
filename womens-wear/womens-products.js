let params = new URLSearchParams(window.location.search);
let id = params.get("id");

fetch(`http://localhost:3000/womens/${id}`)
.then((response) => response.json())
.then((product) => {
  let container = document.getElementById("container-details");
  container.innerHTML = `
   <div>
      <h1>${product.title}</h1>
      <img src="${product.image}" width="100"/>
      <h1>${product.product_id}</h1>
    </div>
  `;
  })
.catch((error) =>{
  console.error(error);
});
