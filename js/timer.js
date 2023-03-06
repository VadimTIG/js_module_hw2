import { beep } from './utils.js';

let interval = null;
const timeRangeInput = document.getElementById('timeRangeInput');
const countDown = document.getElementById('countdown');

const startButton = document.getElementById('startTimerButton');
startButton.addEventListener('click', (event) => {
    event.preventDefault();
    const initialTimeRangeInput = timeRangeInput.value;
    countDown.innerText = initialTimeRangeInput;

    interval = setInterval(() => {
        countDown.innerText = Number(countDown.innerText) - 1;

        if (Number(countDown.innerText) === 0) {
            beep();
            clearInterval(interval);
        }

    }, 1000);
});

const stopButton = document.getElementById('stopTimerButton');
stopButton.addEventListener('click', (event) => {
    event.preventDefault();
    clearInterval(interval);
});