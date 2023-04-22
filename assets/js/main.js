const formBudget = () => {
    const
        form = document.querySelector('#formBudget'),
        inputBudget = form.querySelector('#inputBudget'),
        buttonSubmit = form.querySelector('[type="submit"]')
    return {
        events: ({ outputBudget }) => {
            inputBudget.addEventListener('input', ({ target }) => {
                target.value = target.value.replace(/[^0-9]/g, '')
                buttonSubmit.disabled = Number(target.value) < 1
            })
            form.addEventListener('submit', ({ preventDefault }) => {
                preventDefault()
                outputBudget.innerText = inputBudget.value;
                form.reset()
            })
        }
    }
}

const formExpense = () => {
    const
        form = document.querySelector('#formExpense'),
        inputAmountExpense = form.querySelector('#amountExpense'),
        inputNameExpense = form.querySelector('#nameExpense'),
        buttonSubmit = form.querySelector('[type="submit"]'),
        disabledSubmit = () =>
            buttonSubmit.disabled = !Boolean(inputNameExpense.value) || Number(inputAmountExpense.value) < 1
    return {
        events: () => {
            inputAmountExpense.addEventListener('input', disabledSubmit)
            inputAmountExpense.addEventListener('keypress',
                ({ key, preventDefault }) =>
                    (key == " " || isNaN(key)) && preventDefault()
            )
            inputNameExpense.addEventListener('input', disabledSubmit)
            inputNameExpense.addEventListener('keypress',
                ({ keyCode, preventDefault }) => keyCode == 13 && preventDefault()
            )
            form.addEventListener('submit',
                ({ preventDefault }) => {
                    preventDefault()
                    // TODO: output 
                    form.reset()
                }
            )
        }
    }
}



addEventListener('DOMContentLoaded', () => {
    const outputBudget = document.querySelector('#outputBudget');
    const outputExpense = document.querySelector('#outputExpense');
    formBudget().events({ outputBudget })
    formExpense().events({ outputExpense })
})
