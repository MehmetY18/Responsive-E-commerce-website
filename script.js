
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', function() {
    // 1. Navbar'a active class'ını ekle/çıkar
    navbar.classList.toggle('active');
    
    // 2. Kapatma tuşu (X) kontrolü
    // Eğer active class'ı varsa X yap, yoksa hamburger yap
    if (navbar.classList.contains('active')) {
        this.innerText = '✕'; 
        console.log("Menü açıldı, X simgesi basıldı.");
    } else {
        this.innerText = '☰';
        console.log("Menü kapandı, Hamburger simgesi basıldı.");
    }
});

// Alt menüler için olan kısmın zaten çalışıyor, ona dokunma
const menuItems = document.querySelectorAll('.navbar li');
menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        const subMenu = this.querySelector('ul');
        if (subMenu) {
            e.stopPropagation(); 
            this.classList.toggle('submenu-open');
        }
    });
});
