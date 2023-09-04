document.addEventListener("DOMContentLoaded", function () {
    const showContactFormButton = document.getElementById("showContactForm");
    const showSocialsButton = document.getElementById("showSocials");
    const contactFormContent = document.getElementById("contact-form-content");
    const socialsContent = document.getElementById("socials-content");

    function showContactForm() {
        contactFormContent.style.display = "block";
        socialsContent.style.display = "none";
        contactFormContent.style.opacity = 1;
        socialsContent.style.opacity = 0;

        showContactFormButton.classList.add("active");
        showSocialsButton.classList.remove("active");
    }

    function showSocials() {
        socialsContent.style.display = "block";
        contactFormContent.style.display = "none";

        socialsContent.style.opacity = 1;
        contactFormContent.style.opacity = 0;

        showSocialsButton.classList.add("active");
        showContactFormButton.classList.remove("active");
    }

    showContactForm();

    showContactFormButton.addEventListener("click", showContactForm);
    showSocialsButton.addEventListener("click", showSocials);
});


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    contactForm.style.animationPlayState = "running";
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(contactForm);
});
