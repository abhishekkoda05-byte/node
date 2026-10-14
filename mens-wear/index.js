
fetch("http://localhost:3000/mens")
    .then((response) => {
        console.log("Response status:", response.status);

        if (!response.ok) {
            throw new Error("API request failed");
        }

        return response.json();
    })
    .then((products) => {
        console.log("Products received:", products);

        const container = document.getElementById("container");

        if (!container) {
            throw new Error("Element with id 'container' not found");
        }

        container.innerHTML = "";

        products.forEach((product) => {
            container.innerHTML += `
                <div>
                    <a href="mens-product.html?id=${product.product_id}">
                        <img src="${product.image}" alt="${product.title}" width="150">
                        <h3>${product.brand || "Fashion Store"}</h3>
                        <p>${product.title}</p>
                        <p>₹${product.price}</p>
                        <p>${product.product_id}</p>
                    </a>
                </div>
            `;
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });
