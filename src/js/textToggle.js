let currentParagraph = 0;

function showParagraph(index) {
    const paragraphs = document.querySelectorAll('.content-paragraph');
    const dots = document.querySelectorAll('.dot');

    if (index >= 0 && index < paragraphs.length) {
        paragraphs[currentParagraph].style.display = 'none';
        dots[currentParagraph].classList.remove('active');

        currentParagraph = index;

        paragraphs[currentParagraph].style.display = 'block';
        dots[currentParagraph].classList.add('active');
    }
}

showParagraph(currentParagraph);
