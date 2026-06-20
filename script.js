document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {

    });
});
window.addEventListener('load', () => {
    const text = document.getElementById('text',);
    text.classList.add('visible');
});
window.addEventListener('load', () => {
    const text = document.getElementById('logo',);
    text.classList.add('visible');
});
window.addEventListener('load', () => {
    const text = document.getElementById('hero',);
    text.classList.add('visible');
});
document.getElementById('contact-form').addEventListener('submit', function(event, emailjs) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    if (name && email && subject && message) {
        alert('Сообщение отправлено!');
        event.target.reset();
    } else {
        alert('Пожалуйста, заполните все поля.');
    }

});
