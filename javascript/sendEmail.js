const button = document.querySelector('#submit');

button.addEventListener('click', function () {

    let name = document.querySelector('#guestName');
    let email = document.querySelector('#email');
    let message = document.querySelector('#message');

    name.value = '';
    email.value = '';
    message.value = '';
});
