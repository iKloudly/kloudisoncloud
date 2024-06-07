document.addEventListener('DOMContentLoaded', function () {
    new Splide('#project-carousel', {
        type   : 'loop',
        perPage: 3,
        autoplay: true,
        interval: 3000,
        breakpoints: {
            768: {
                perPage: 1,
            },
            1024: {
                perPage: 2,
            },
        },
    }).mount();
    
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert(`Thank you for reaching out, ${name}! I'll get back to you soon.`);
            document.getElementById('contact-form').reset();
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
});
