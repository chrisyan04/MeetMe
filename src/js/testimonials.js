var testimonials = document.querySelectorAll(".testimonial");
var animationDone = false;

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= window.innerHeight
  );
}

function animateTestimonials() {
  testimonials.forEach(function (testimonial) {
    if (isElementInViewport(testimonial) && !animationDone) {
      testimonial.classList.add("slide-in");
    } else {
      testimonial.classList.remove("slide-in");
    }
  });
}

window.addEventListener("scroll", function () {
  animateTestimonials();
});

window.addEventListener("resize", function () {
  animateTestimonials();
});

// Initial animation check
animateTestimonials();
