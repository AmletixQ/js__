const buttons = document.querySelectorAll('button');

buttons[1].addEventListener('mouseenter', (item) => {
    item.target.style.top = Math.floor(Math.random() * 400) + 'px';
    item.target.style.left = Math.floor(Math.random() * 400) + 'px';
});

buttons[0].addEventListener('click', () => {
    const head = document.createElement('h1');
    head.innerText = "Молодец! Правильный ответ!";
    head.style.position = "absolute";
    head.style.top = "60%";
    head.style.left = "30%";

    const wrapper = document.querySelector('.wrapper');
    wrapper.style.display = 'none';

    const body = document.querySelector('body');
    body.append(head);
});