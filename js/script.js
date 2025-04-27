
/* Add this to your script.js file */
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const windowBottom = window.pageYOffset + window.innerHeight;

        if (windowBottom > sectionTop && window.pageYOffset < sectionBottom) {
            section.classList.add('fade-in');
        }
    });
});