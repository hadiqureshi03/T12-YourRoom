// Funktion til at hente produkt-ID fra URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Funktion til at hente produkt fra API
async function fetchProduct(productId) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const product = await response.json();
        return product;
    } catch (error) {
        console.error('Fejl ved hentning af produkt:', error);
        return null;
    }
}

// Funktion til at vise produkt detaljer
function displayProductDetails(product) {
    if (!product) {
        console.error('Produkt ikke fundet');
        return;
    }
    
    // Opdater produktinfo
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-sku').textContent = product.sku;
    document.getElementById('product-desc').textContent = product.description;
    document.getElementById('product-price').textContent = `${product.price} kr`;
    
    // Vis hovedbillede
    const imageCircle = document.querySelector('.image-circle');
    imageCircle.innerHTML = `<img src="${product.thumbnail}" alt="${product.title}" id="main-product-image">`;
    
    // Vis thumbnail billeder
    displayThumbnails(product.images);
}

// Funktion til at vise thumbnail billeder
function displayThumbnails(images) {
    const thumbnailsContainer = document.querySelector('.thumbnails');
    thumbnailsContainer.innerHTML = '';
    
    images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        
        thumbnail.innerHTML = `<img src="${image}" alt="Product image ${index + 1}">`;
        
        // Klik event til at skifte hovedbillede
        thumbnail.addEventListener('click', () => {
            const mainImage = document.getElementById('main-product-image');
            mainImage.src = image;
            
            // Opdater active state
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        });
        
        thumbnailsContainer.appendChild(thumbnail);
    });
}

// Pile til at navigere mellem billeder
function initThumbnailNavigation() {
    const prevBtn = document.querySelector('.thumbnail-btn.prev');
    const nextBtn = document.querySelector('.thumbnail-btn.next');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            const thumbnails = document.querySelectorAll('.thumbnail');
            const activeIndex = Array.from(thumbnails).findIndex(t => t.classList.contains('active'));
            const prevIndex = activeIndex > 0 ? activeIndex - 1 : thumbnails.length - 1;
            thumbnails[prevIndex].click();
        });
        
        nextBtn.addEventListener('click', () => {
            const thumbnails = document.querySelectorAll('.thumbnail');
            const activeIndex = Array.from(thumbnails).findIndex(t => t.classList.contains('active'));
            const nextIndex = activeIndex < thumbnails.length - 1 ? activeIndex + 1 : 0;
            thumbnails[nextIndex].click();
        });
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
        
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }
}

// Kør når siden loader
document.addEventListener('DOMContentLoaded', async () => {
    const productId = getProductIdFromURL();
    
    if (productId) {
        const product = await fetchProduct(productId);
        displayProductDetails(product);
        initThumbnailNavigation();
    } else {
        console.error('Intet produkt-ID fundet i URL');
    }
    
    initBurgerMenu();
});