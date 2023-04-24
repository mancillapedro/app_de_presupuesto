import budgetFormComponent from "./components/forms/budgetFormComponent.js"
import expenseFormComponent from "./components/forms/expenseFormComponent.js"
import expenses from "./stores/expenses.js"

addEventListener('DOMContentLoaded', () => {
    const
        outputBudget = document.querySelector('#outputBudget'),
        outputExpense = document.querySelector('#outputExpense'),
        balance = document.querySelector('#balance'),
        listExpenses = document.querySelector('#listExpenses tbody'),
        formBudget = budgetFormComponent(),
        formExpense = expenseFormComponent(),
        storeExpenses = expenses({ listExpenses, balance, outputExpense, outputBudget })

    formBudget.events({ outputBudget, renderBalance: storeExpenses.renderExpenses })
    formExpense.events({ outputExpense: storeExpenses })
})
