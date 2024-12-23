// Smooth Scroll Implementation
// Mengaplikasikan efek scroll halus untuk tautan internal (anchor links)
document.addEventListener('DOMContentLoaded', function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Mencegah perilaku default tautan

            const targetId = this.getAttribute('href').substring(1); // Ambil ID target dari href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Scroll dengan efek halus
                    block: 'start' // Scroll ke bagian awal elemen
                });
            }
        });
    });
});

