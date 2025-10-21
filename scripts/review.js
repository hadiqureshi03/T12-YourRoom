// Burger menu funktionalitet
function initBurgerMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const mainNav = document.querySelector('.main-nav');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    
    if (burgerMenu && mainNav) {
        // Åbn/luk med burger menu
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
        
        // Luk med X knap
        if (closeMenuBtn) {
            closeMenuBtn.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                mainNav.classList.remove('active');
            });
        }
        
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

// Form håndtering
function initReviewForm() {
    const form = document.getElementById('reviewForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Her kunne vi sende data til en server
            // For nu viser vi bare en bekræftelse
            alert('Thank you for your review!');
            form.reset();
        });
    }
}

// Kør når siden loader
document.addEventListener('DOMContentLoaded', () => {
    initBurgerMenu();
    initReviewForm();
});