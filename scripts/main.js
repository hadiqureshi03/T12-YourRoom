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

// Funktion til at hente alle produkter
async function fetchAllProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Fejl ved hentning af produkter:', error);
        return [];
    }
}

// Funktion til at beregne den højeste rabat i en kategori
function calculateMaxDiscount(products) {
    if (products.length === 0) return 0;
    const maxDiscount = Math.max(...products.map(product => product.discountPercentage));
    return Math.round(maxDiscount);
}

// Funktion til at populere kategori-cirkler på forsiden
async function populateCategories() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    for (const card of categoryCards) {
        const category = card.getAttribute('data-category');
        const products = await fetchProductsByCategory(category);
        
        if (products.length > 0) {
            // Hent første produkt til at vise billede
            const firstProduct = products[0];
            
            // Indsæt produktbillede
            const iconDiv = card.querySelector('.category-icon');
            iconDiv.innerHTML = `<img src="${firstProduct.thumbnail}" alt="${firstProduct.title}">`;
            
            // Beregn og indsæt rabat
            const maxDiscount = calculateMaxDiscount(products);
            const discountText = card.querySelector('.discount-text');
            discountText.textContent = `Save up to ${maxDiscount}%`;
        }
    }
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

// Kør funktioner når siden er loaded
document.addEventListener('DOMContentLoaded', () => {
    populateCategories();
    initBurgerMenu();
});