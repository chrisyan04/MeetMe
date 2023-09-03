// slide in from top
function slideAndDisappear(entries1, observer1) {
    entries1.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
        } else {
            entry.target.style.transform = 'translateY(-100%)';
            entry.target.style.opacity = '0';
        }
    });
}

const observer1 = new IntersectionObserver(slideAndDisappear, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
});

const slideInElements1 = document.querySelectorAll('.slide-in');

slideInElements1.forEach((element) => {
    observer1.observe(element);
});


// slide in from bottom
function slideInFromBottom(entries2, observer2) {
    entries2.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
        } else {
            entry.target.style.transform = 'translateY(100%)';
            entry.target.style.opacity = '0';
        }
    });
}

const observer2 = new IntersectionObserver(slideInFromBottom, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
});

const slideInElements2 = document.querySelectorAll('.slide-in-from-bottom');

slideInElements2.forEach((element) => {
    observer2.observe(element);
});
