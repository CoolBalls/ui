document.addEventListener('DOMContentLoaded', () => {
    const productsList = document.getElementById('products-list');

    // Example data (replace with API data)
    const products = [
        { name: 'Product 1', price: '$10' },
        { name: 'Product 2', price: '$20' },
        { name: 'Product 3', price: '$30' }
    ];

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerText = `${product.name} - ${product.price}`;
        productsList.appendChild(productItem);
    });
});
