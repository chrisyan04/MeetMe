document.addEventListener('DOMContentLoaded', function () {
    const jots = document.querySelectorAll('.jot');
    jots.forEach(jot => {
        jot.addEventListener('click', () => {
            jots.forEach(j => {
                j.classList.remove('active');
            });
            jot.classList.add('active');
        });
    });
});

function toggleSkills(sectionToShow) {
    const technologies = document.querySelector('.technologies');
    const relevantOthers = document.querySelector('.relevant-others');
    
    if (sectionToShow === 'technologies') {
        technologies.style.display = 'block';
        relevantOthers.style.display = 'none';
    } else {
        technologies.style.display = 'none';
        relevantOthers.style.display = 'block';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const otherSkills = document.querySelectorAll('.other-skill');
    const descriptionBox = document.querySelector('.description-box');
    const defaultActiveSkill = document.querySelector('.other-skill.active');

    otherSkills.forEach(skill => {
        skill.addEventListener('click', () => {
            const skillId = skill.getAttribute('data-skill-id');
            const description = getDescriptionForSkill(skillId);

            descriptionBox.innerHTML = description;

            otherSkills.forEach(skill => {
                skill.classList.remove('active-skill');
            });

            skill.classList.add('active-skill');
        });
    });

    function getDescriptionForSkill(skillId) {
        switch (skillId) {
            case 'statistical-analysis':
                return "Proficient in statistical analysis techniques including regression analysis and data interpretation.";
            case 'data-visualization':
                return "Skilled in creating compelling data visualizations using tools like Matplotlib, Seaborn, and R programming.";
            case 'communication':
                return "Strong communication skills in 3 languages, both written and verbal, enabling effective collaboration and cooperation.";
            case 'problem-solving':
                return "Adept at identifying complex problems, analyzing root causes, and developing innovative solutions.";
            case 'cooking':
                return "Passionate about cooking and experimenting with a wide range of cuisines and flavors.";
            default:
                return "Description not available";
        }
    }

    if (defaultActiveSkill) {
        defaultActiveSkill.click();
    }
});
