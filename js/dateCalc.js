import { printError, printResult } from './printResult.js'
import getDateDiff from './getDateDiff.js'

const form = document.getElementById('datecalc')
form.style = 'display: none;';
form.onsubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target)

    const firstDate = formData.get('firstDate')
    const secondDate = formData.get('secondDate')

    if (!firstDate || !secondDate) {
        printError('Вы не выбрали дату')
    } else {
        const dateDiff = getDateDiff(firstDate, secondDate)
        printResult(dateDiff)
    }
}