const products = [
    { name: 'Phone', price: 800, category: 'electronics' },
    { name: 'Laptop', price: 1500, category: 'electronics' },
    { name: 'Tablet', price: 400, category: 'electronics' },
    { name: 'Chair', price: 200, category: 'furniture' },
    { name: 'Sofa', price: 700, category: 'furniture' },
    { name: 'Desk', price: 300, category: 'furniture' },
    { name: 'Monitor', price: 300, category: 'electronics' },
    { name: 'Mouse', price: 50, category: 'electronics' },
    { name: 'Keyboard', price: 100, category: 'electronics' },
    { name: 'Bed', price: 1000, category: 'furniture' },
    { name: 'Wardrobe', price: 1200, category: 'furniture' },
    { name: 'Dining Table', price: 900, category: 'furniture' },
    { name: 'Headphones', price: 150, category: 'electronics' },
    { name: 'Bookshelf', price: 400, category: 'furniture' },
    { name: 'Gaming Console', price: 500, category: 'electronics' },
    { name: 'Refrigerator', price: 1800, category: 'appliances' },
    { name: 'Washing Machine', price: 1500, category: 'appliances' },
    { name: 'Microwave', price: 300, category: 'appliances' },
    { name: 'Air Conditioner', price: 2500, category: 'appliances' },
    { name: 'Blender', price: 100, category: 'appliances' }
];

let currentPage = 1;
const productsPerPage = 3;

// Filter, Sort, and Pagination Logic
function renderProducts() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const sortBy = document.getElementById('sortBy').value;

    // Filter products by category
    let filteredProducts = products.filter(product => {
        return !categoryFilter || product.category === categoryFilter;
    });

    // Sort products
    filteredProducts.sort((a, b) => {
        if (sortBy === 'name_asc') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'name_desc') {
            return b.name.localeCompare(a.name);
        } else if (sortBy === 'price_asc') {
            return a.price - b.price;
        } else if (sortBy === 'price_desc') {
            return b.price - a.price;
        }
        return 0;
    });

    // Pagination
    const totalProducts = filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

    // Render product items
    const gallery = document.getElementById('productGallery');
    gallery.innerHTML = '';
    productsToDisplay.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
        `;
        gallery.appendChild(productItem);
    });

    // Handle pagination buttons
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;
}

function changePage(direction) {
    if (direction === 'next' && currentPage < Math.ceil(products.length / productsPerPage)) {
        currentPage++;
    } else if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    }
    renderProducts();
}

document.getElementById('categoryFilter').addEventListener('change', renderProducts);
document.getElementById('sortBy').addEventListener('change', renderProducts);
document.getElementById('prevPage').addEventListener('click', () => changePage('prev'));
document.getElementById('nextPage').addEventListener('click', () => changePage('next'));

// Initial render
renderProducts();
