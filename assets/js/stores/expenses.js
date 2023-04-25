import itemListComponent from "./../components/itemListComponent.js"

export default ({ listExpenses, outputExpense, balance, outputBudget }) => {
    const
        expenses = [],
        addExpense = expense => {
            expenses.push(expense)
            localStorage.setItem('expenses', JSON.stringify(expenses))
            renderExpenses()
        },
        deleteExpense = index => {
            expenses.splice(index, 1)
            localStorage.setItem('expenses', JSON.stringify(expenses))
            renderExpenses()
        },
        totalExpenses = () =>
            expenses.reduce((total, expense) => total + expense.amountExpense, 0),
        renderExpenses = () => { // view
            [listExpenses, outputExpense, balance].forEach(
                element => element.innerHTML = ''
            )
            expenses.forEach((expense, index) =>
                listExpenses.insertAdjacentElement('beforeend',
                    itemListComponent({ index, ...expense, deleteExpense }))
            )
            outputExpense.innerText = totalExpenses().toLocaleString("es-cl", { style: "currency", currency: "CLP" })
            const totalBalance = Number(outputBudget.dataset.value - totalExpenses())
            balance.innerText = totalBalance.toLocaleString("es-cl", { style: "currency", currency: "CLP" })
            balance.classList.toggle('text-danger', totalBalance < 0)
        },
        initialize = () => {
            if (localStorage.getItem('budget')) {
                try {
                    const budget = Number(JSON.parse(localStorage.getItem('budget')))
                    outputBudget.dataset.value = budget
                    outputBudget.innerText = budget.toLocaleString("es-cl", { style: "currency", currency: "CLP" })
                }
                catch (e) { localStorage.removeItem('budget') }
            }
            if (localStorage.getItem('expenses')) {
                try { expenses.push(...JSON.parse(localStorage.getItem('expenses'))) }
                catch (e) { localStorage.removeItem('expenses') }
            }
            renderExpenses()
        }

    return {
        // expenses,
        initialize,
        addExpense,
        // deleteExpense,
        // totalExpenses,
        renderExpenses
    }
}
