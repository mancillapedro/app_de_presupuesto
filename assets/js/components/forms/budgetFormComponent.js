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
                    outputBudget.innerText = Number(inputBudget.value).toLocaleString("es-cl", { style: "currency", currency: "CLP" });
                    outputBudget.dataset.value = inputBudget.value
                    form.reset()
                    renderBalance()
                    disabledSubmit()
                }
            )
        }
    }
}