// Define the options for the Intersection Observer
const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.5, // Trigger when 50% of the element is visible
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const relevantOthersItem = entry.target;

        if (entry.isIntersecting) {
            // Element is in the viewport, trigger fade-in animation
            relevantOthersItem.classList.add('animate-fade-in');
        } else {
            // Element is out of the viewport, trigger fade-out animation
            relevantOthersItem.classList.remove('animate-fade-in');
            relevantOthersItem.classList.add('animate-fade-out');
        }
    });
}, options);

// Observe all relevant others items
const relevantOthersItems = document.querySelectorAll('.relevant-others-item');
relevantOthersItems.forEach(item => {
    observer.observe(item);
});
