function slideAndDisappear(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
        } else {
            entry.target.style.transform = 'translateY(-100%)';
            entry.target.style.opacity = '0';
        }
    });
}

const observer = new IntersectionObserver(slideAndDisappear, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
});

const slideInElements = document.querySelectorAll('.slide-in');

slideInElements.forEach((element) => {
    observer.observe(element);
});
