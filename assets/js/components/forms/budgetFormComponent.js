export default () => {
    const
        form = document.querySelector('#formBudget'),
        inputBudget = form.querySelector('#inputBudget'),
        buttonSubmit = form.querySelector('[type="submit"]'),
        disabledSubmit = () => buttonSubmit.disabled = inputBudget.value == "" || Number(inputBudget.value) < 0

    return {
        events: ({ storage, render }) => {
            inputBudget.addEventListener('keypress',
                event =>
                    event.keyCode != 13 && (event.keyCode == 32 || isNaN(event.key)) && event.preventDefault()
            )
            inputBudget.addEventListener('input', disabledSubmit)
            form.addEventListener('submit',
                event => {
                    event.preventDefault()
                    storage.budget = Number(inputBudget.value)
                    form.reset()
                    disabledSubmit()
                    render()
                }
            )
        }
    }
}