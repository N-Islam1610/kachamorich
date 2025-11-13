document.addEventListener("DOMContentLoaded", function() {
    const animationElements = document.querySelectorAll('.animate-on-scroll');

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        animationElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for older browsers
        animationElements.forEach(el => {
            el.classList.add('is-visible');
        });
    }
});