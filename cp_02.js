// Step 3 making fetchProcuctsThen

function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error reported: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Products logged: ");
        data.forEach(product => console.log(product.fields.name));
    })
    .catch(error => {
        handleError(error);
    });
}

// Step 4 fetchProductsAsync

async function fetchProductsAsync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products');
        if(!response.ok) {
            throw new Error(`Error reported: ${response.status}`);
        }
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

// Step 5 displayProducts(products)

function displayProducts(products) {
    const container = document.getElementById('product-container');

    const firstFive = products.slice(0,5);

    firstFive.forEach(product => {
        const {name, price, image} = product.fields;

        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = 
                    `<img src="${image[0].url}" alt="${name}">
                    <h3>${name}</h3>
                    <p>$${(price / 100).toFixed(2)}</p>`;

                    container.appendChild(card);
    })
}

// Step 6 Error handling

function handleError(error) {
    console.error(`Error Reported : ${error.message}`);
}

// Step 7 Images

fetchProductsThen(); 
fetchProductsAsync();