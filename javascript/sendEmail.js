window.onload = function () {
    
    const button = document.querySelector('#contact-form');

    button.addEventListener('submit', function (e) {

        e.preventDefault();
        let name = document.querySelector('#guestName');
        let email = document.querySelector('#email');
        let message = document.querySelector('#message');

        let temporaryParams = {
            user_name: name.value,
            user_email: email.value,
            message: message.value
        };

        emailjs.send('service_hspoq4m', 'template_bx8ki79', temporaryParams);

       name.value = '';
       email.value = '';
       message.value = '';
    });
};