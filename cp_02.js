// Step 3 making fetchProcuctsThen

function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error reported: ${response.status}`);
        }
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