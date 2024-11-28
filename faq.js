document.querySelectorAll('.faq-toggle').forEach(toggle => {
    toggle.style.transform = 'rotate(180deg)';

    toggle.addEventListener('click', () => {
        const question = toggle.parentElement.nextElementSibling;

        if (question.style.display === 'block') {
            question.style.display = 'none'; 
            toggle.style.transform = 'rotate(180deg)'; 
        } else {
            question.style.display = 'block'; 
            toggle.style.transform = 'rotate(0deg)';
        }
    });
});
