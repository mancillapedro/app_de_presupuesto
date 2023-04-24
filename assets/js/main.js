import forms from "./components/formsComponent.js"
import expenses from "./stores/expenses.js"

addEventListener('DOMContentLoaded', () => {
    const
        outputBudget = document.querySelector('#outputBudget'),
        outputExpense = document.querySelector('#outputExpense'),
        listExpenses = document.querySelector('#listExpenses tbody'),
        formBudget = forms.budget(),
        formExpense = forms.expense(),
        storeExpenses = expenses(listExpenses)

    formBudget.disabledSubmit()
    formExpense.disabledSubmit()
    formBudget.events({ outputBudget })
    formExpense.events({ outputExpense: storeExpenses, listExpenses })
})
