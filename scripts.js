document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para los enlaces del menú
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Cambiar cursor a mano y redireccionar al hacer clic en los proyectos
    const portfolioItems = document.querySelectorAll('#portfolio .portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });

        item.addEventListener('mouseleave', function() {
            this.style.cursor = 'initial';
        });

        item.addEventListener('click', function() {
            const projectLink = this.querySelector('h3 a');
            if (projectLink) {
                window.open(projectLink.href, '_blank');
            }
        });
    });

    
    
});
