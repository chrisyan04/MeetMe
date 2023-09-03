const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const relevantOthersItem = entry.target;

        if (entry.isIntersecting) {
            
            relevantOthersItem.classList.add('animate-fade-in');
        } else {
            
            relevantOthersItem.classList.remove('animate-fade-in');
            relevantOthersItem.classList.add('animate-fade-out');
        }
    });
}, options);

const relevantOthersItems = document.querySelectorAll('.relevant-others-item');
relevantOthersItems.forEach(item => {
    observer.observe(item);
});
