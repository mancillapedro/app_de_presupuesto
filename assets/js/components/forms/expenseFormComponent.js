export default () => {
    const
        form = document.querySelector('#formExpense'),
        inputAmountExpense = form.querySelector('#amountExpense'),
        inputNameExpense = form.querySelector('#nameExpense'),
        buttonSubmit = form.querySelector('[type="submit"]'),
        disabledSubmit = () =>
            buttonSubmit.disabled = !Boolean(inputNameExpense.value) || Number(inputAmountExpense.value) < 1

    return {
        events: ({ storage, render }) => {
            inputNameExpense.addEventListener('input', disabledSubmit)
            inputAmountExpense.addEventListener('input', disabledSubmit)
            inputAmountExpense.addEventListener('keypress',
                event =>
                    event.keyCode != 13 && (event.keyCode == 32 || isNaN(event.key)) && event.preventDefault()
            )
            form.addEventListener('submit',
                event => {
                    event.preventDefault()
                    storage.addExpense({
                        nameExpense: inputNameExpense.value,
                        amountExpense: Number(inputAmountExpense.value)
                    })
                    render()
                    form.reset()
                    disabledSubmit()
                }
            )
        }
    }
}