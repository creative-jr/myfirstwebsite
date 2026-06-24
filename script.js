window.addEventListener('load', () => {
    const text = document.getElementById('text');
    if (text) text.classList.add('visible');

    const logo = document.getElementById('logo');
    if (logo) logo.classList.add('visible');

    const hero = document.getElementById('hero');
    if (hero) hero.classList.add('visible');
});
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (event) {
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
    }
