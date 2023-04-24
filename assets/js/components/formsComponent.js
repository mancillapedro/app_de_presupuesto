const budget = () => {
    const
        form = document.querySelector('#formBudget'),
        inputBudget = form.querySelector('#inputBudget'),
        buttonSubmit = form.querySelector('[type="submit"]'),
        disabledSubmit = () => buttonSubmit.disabled = Number(inputBudget.value) < 1

    return {
        disabledSubmit,
        events: ({ outputBudget }) => {
            inputBudget.addEventListener('keypress',
                event =>
                    event.keyCode != 13 && (event.keyCode == 32 || isNaN(event.key)) && event.preventDefault()
            )
            inputBudget.addEventListener('input', disabledSubmit)
            form.addEventListener('submit',
                event => {
                    event.preventDefault()
                    outputBudget.innerText = inputBudget.value;
                    form.reset()
                    disabledSubmit()
                }
            )
        }
    }
}

const expense = () => {
    const
        form = document.querySelector('#formExpense'),
        inputAmountExpense = form.querySelector('#amountExpense'),
        inputNameExpense = form.querySelector('#nameExpense'),
        buttonSubmit = form.querySelector('[type="submit"]'),
        disabledSubmit = () =>
            buttonSubmit.disabled = !Boolean(inputNameExpense.value) || Number(inputAmountExpense.value) < 1

    return {
        disabledSubmit,
        events: ({ outputExpense }) => {
            inputAmountExpense.addEventListener('input', disabledSubmit)
            inputAmountExpense.addEventListener('keypress',
                event =>
                    (event.key == " " || isNaN(event.key)) && event.preventDefault()
            )
            inputNameExpense.addEventListener('input', disabledSubmit)
            inputNameExpense.addEventListener('keypress',
                event =>
                    event.keyCode == 13 && event.preventDefault()
            )
            form.addEventListener('submit',
                event => {
                    event.preventDefault()
                    outputExpense.addExpense({
                        nameExpense: inputNameExpense.value,
                        amountExpense: Number(inputAmountExpense.value)
                    })
                    form.reset()
                    disabledSubmit()
                }
            )
        }
    }
}

export default { expense, budget }