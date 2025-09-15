// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
    let valid = true;

    // Name Validation
    const name = document.getElementById('name').value.trim();
    if (name === "") {
        valid = false;
        alert('Please enter your name.');
    }

    // Email Validation
    const email = document.getElementById('email').value.trim();
    if (!validateEmail(email)) {
        valid = false;
        alert('Please enter a valid email address.');
    }

    // Message Validation
    const message = document.getElementById('message').value.trim();
    if (message === "") {
        valid = false;
        alert('Please enter your message.');
    }

    if (!valid) {
        e.preventDefault();
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}