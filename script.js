document.querySelectorAll('.faq1').forEach(faq1 => {
    const icon = faq1.querySelector('.faq-icon img');
    const faqDown = faq1.querySelector('.faq-down');
    
    faq1.querySelector('.faq-up').addEventListener('click', () => {
       
        faq1.classList.toggle('active');
        faqDown.classList.toggle('active');
        
       
        if (faq1.classList.contains('active')) {
            icon.src = 'Assests/minus icon.png'; 
        } else {
            icon.src = 'Assests/Plus icon.png'; 
        }
    });
});
