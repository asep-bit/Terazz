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

       const searchInput = document.getElementById('searchInput');
  const categoryButtons = document.querySelectorAll('[data-filter]');
  const menuItems = document.querySelectorAll('.menu-item');

  let currentCategory = 'all'; // default: semua kategori

  // Fungsi utama untuk menyaring menu berdasarkan teks dan kategori
  function filterMenus() {
    const keyword = searchInput.value.trim().toLowerCase();

    menuItems.forEach(item => {
      const title = item.querySelector('h3').textContent.toLowerCase();
      const category = item.getAttribute('data-category');

      const matchesText = title.includes(keyword);
      const matchesCategory = currentCategory === 'all' || category === currentCategory;

      if (matchesText && matchesCategory) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Saat pengguna mengetik di input pencarian
  searchInput.addEventListener('input', filterMenus);

  // Saat pengguna klik kategori
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update kategori aktif
      categoryButtons.forEach(btn => btn.classList.remove('active-category'));
      button.classList.add('active-category');

      // Ambil kategori dari tombol
      currentCategory = button.getAttribute('data-filter');
      
      // Jalankan ulang filter
      filterMenus();
    });
  });

  // Tampilkan semua saat pertama kali load
  filterMenus();