export default () => {
    const
        form = document.querySelector('#formBudget'),
        inputBudget = form.querySelector('#inputBudget'),
        buttonSubmit = form.querySelector('[type="submit"]'),
        disabledSubmit = () => buttonSubmit.disabled = Number(inputBudget.value) < 1

    return {
        events: ({ outputBudget, renderBalance }) => {
            inputBudget.addEventListener('keypress',
                event =>
                    event.keyCode != 13 && (event.keyCode == 32 || isNaN(event.key)) && event.preventDefault()
            )
            inputBudget.addEventListener('input', disabledSubmit)
            form.addEventListener('submit',
                event => {
                    event.preventDefault()
                    const budget = Number(inputBudget.value)
                    outputBudget.innerText = budget.toLocaleString("es-cl", { style: "currency", currency: "CLP" });
                    outputBudget.dataset.value = budget
                    localStorage.setItem('budget', JSON.stringify(budget))
                    form.reset()
                    renderBalance()
                    disabledSubmit()
                }
            )
        }
    }
}