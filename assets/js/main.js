import { expense, budget } from "./components/formsComponent.js"

addEventListener('DOMContentLoaded', () => {
    const
        outputBudget = document.querySelector('#outputBudget'),
        outputExpense = document.querySelector('#outputExpense'),
        formBudget = budget(),
        formExpense = expense()

    formBudget.events({ outputBudget })
    formExpense.events({ outputExpense })
})
