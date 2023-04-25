import budgetFormComponent from "./components/forms/budgetFormComponent.js"
import expenseFormComponent from "./components/forms/expenseFormComponent.js"
import Budget from "./stores/Budget.js"
import Expense from "./stores/Expense.js"
import HomeView from "./views/HomeView.js"

addEventListener('DOMContentLoaded', () => {
    const
        storageBudget = new Budget(),
        storageExpenses = new Expense(),
        homeView = new HomeView({ storageExpenses, storageBudget }),
        formBudget = budgetFormComponent(),
        formExpense = expenseFormComponent()

    formExpense.events({
        storage: storageExpenses,
        render: homeView.renderView
    })

    formBudget.events({
        storage: storageBudget,
        render: homeView.renderView
    })
    homeView.renderView()
})
