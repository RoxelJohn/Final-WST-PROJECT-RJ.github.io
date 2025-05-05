
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
       
        alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon at ${email}.`);
        
      
        contactForm.reset();
      });
    }
