
const formBudget = () => {
    const
        form = document.querySelector('#formBudget'),
        inputBudget = form.querySelector('#inputBudget');
    buttonSubmit = form.querySelector('[type="submit"]');
    return {
        events: ({ outputBudget }) => {
            inputBudget.addEventListener('input', ({ target }) => {
                target.value = target.value.replace(/[^0-9]/g, '');
                buttonSubmit.disabled = Number(target.value) < 1;
                console.log(buttonSubmit, typeof target.value)
            })
            form.addEventListener('submit', (e) => {
                e.preventDefault()
                outputBudget.innerText = inputBudget.value;
            })
        }
    }
}

addEventListener('DOMContentLoaded', () => {
    const outputBudget = document.querySelector('#outputBudget');

    formBudget().events({ outputBudget })


})
