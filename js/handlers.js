export const handleCalcFormClick = (event) => {
    event.preventDefault();

    const dateCalcForm = document.getElementById('datecalc');
    dateCalcForm.style = "display: block;"

    const timerForm = document.getElementById('timerForm');
    timerForm.style = "display: none";
}

export const handleTimerClick = (event) => {
    event.preventDefault();

    const dateCalcForm = document.getElementById('datecalc');
    dateCalcForm.style = "display: none;"

    const timerForm = document.getElementById('timerForm');
    timerForm.style = "display: block";
}