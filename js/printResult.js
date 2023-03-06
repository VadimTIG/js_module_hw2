const result = document.getElementById('datecalc_result')

export const printError = (textError) => {
    result.innerText = textError
}

export const printResult = ({ years, months, days }) => {
    result.innerText = `Лет: ${years}, месяцев: ${months}, дней: ${days}`
}