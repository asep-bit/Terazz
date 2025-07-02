// Simple JS for cart functionality
        document.addEventListener('DOMContentLoaded', function() {
            const addButtons = document.querySelectorAll('.menu-item button');
            const cartNotification = document.querySelector('.cart-notification');
            let cartCount = 0;
            
            addButtons.forEach(button => {
                button.addEventListener('click', function() {
                    cartCount++;
                    cartNotification.textContent = cartCount;
                    cartNotification.classList.add('cart-notification');
                    
                    // Reset animation
                    setTimeout(() => {
                        cartNotification.classList.remove('cart-notification');
                        void cartNotification.offsetWidth; // Trigger reflow
                        cartNotification.classList.add('cart-notification');
                    }, 10);
                });
            });
            
            // Category switching - functional implementation
            const categoryButtons = document.querySelectorAll('.flex button');
            const menuItems = document.querySelectorAll('.menu-item');
            
            function filterMenu(category) {
                menuItems.forEach(item => {
                    if (category === 'all' || item.dataset.category === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }

            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    categoryButtons.forEach(btn => btn.classList.remove('active-category'));
                    this.classList.add('active-category');
                    
                    // Get category from button text
                    let category = this.textContent.toLowerCase().replace(' ', '-');
                    if(category === 'all-menu') category = 'all';
                    if(category === 'non-coffee') category = 'noncoffee'; // adjust if you add non-coffee items
                    
                    filterMenu(category);
                });
            });
        });