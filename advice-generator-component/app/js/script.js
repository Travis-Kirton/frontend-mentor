const button = document.querySelector('.button');
const adviceText = document.querySelector('.advice__text');
const adviceNumber = document.querySelector('.advice__number');

let adviceInitialText = 'ADVICE #'

button.addEventListener('click', async () => {
    const advice = await fetch('https://api.adviceslip.com/advice').then(res => res.json());
    console.log(advice.slip);

    adviceNumber.textContent = adviceInitialText + advice.slip.id;
    adviceText.textContent = advice.slip.advice;
});