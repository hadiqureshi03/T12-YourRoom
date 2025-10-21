// Funktion til at hente produkter fra en specifik kategori
async function fetchProductsByCategory(category) {
    try {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Fejl ved hentning af produkter:', error);
        return [];
    }
}

// Funktion til at vise produkter på siden
function displayProducts(products) {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = ''; // Ryd dummy produkter
    
    products.forEach(product => {
        // Lav produkt card
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <a href="product-detail.html?id=${product.id}">
                <div class="product-image">
                    <img src="${product.thumbnail}" alt="${product.title}">
                </div>
                <h3>${product.title}</h3>
                <p class="product-price">${product.price} kr</p>
                <button class="product-btn">Read more</button>
            </a>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Funktion til at bestemme hvilken kategori der skal hentes
function getCategoryFromPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    // Map side til DummyJSON kategori
    const categoryMap = {
        'livingroom.html': 'furniture',
        'bedroom.html': 'home-decoration',
        'kitchen.html': 'kitchen-accessories',
        'bathroom.html': 'skin-care'
    };
    
    return categoryMap[page] || 'furniture';
}

// Burger menu funktionalitet
function initBurgerMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const mainNav = document.querySelector('.main-nav');
    
    if (burgerMenu && mainNav) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
        
        // Luk menu når der klikkes på et link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }
}

// Kør når siden er loaded
document.addEventListener('DOMContentLoaded', async () => {
    const category = getCategoryFromPage();
    const products = await fetchProductsByCategory(category);
    displayProducts(products);
    initBurgerMenu();
});