document.addEventListener('DOMContentLoaded', function () {
    const typedTextElement = document.querySelector('.typed-text');

    // using the Typed.js library
    const typed = new Typed(typedTextElement, {
        strings: ["I am a Student", "I am a Software Developer", "I am a budding Data Scientist", "I am a Machine Learning enthusiast", "I am a Hockey lover", "I am a Camping aficionado"],
        typeSpeed: 60,
        backSpeed: 40,
        startDelay: 2500,
        loop: true,
        smartBackspace: true,
        onStringTyped: function(arrayPos, self) {
            const currentString = self.strings[arrayPos];

            if (currentString.includes("I am a")) {
                const beforeIamA = currentString.substring(0, currentString.indexOf("I am a") + 6);
                const afterIamA = currentString.substring(currentString.indexOf("I am a") + 6);

                const formattedStringArray = afterIamA.split('').map((letter, index) => {
                    const color = `bisque`;
                    return `<span style='color: ${color}; text-shadow: 2px 2px 2px #00bcd4;'>${letter}</span>`;
                });

                const finalFormattedString = `${beforeIamA}${formattedStringArray.join('')}`;
                typedTextElement.innerHTML = finalFormattedString;
            }
        },
    });
});
