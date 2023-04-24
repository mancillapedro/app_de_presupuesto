import itemListComponent from "./../components/itemListComponent.js"

export default ({ listExpenses, outputExpense, balance, outputBudget }) => {
    const
        expenses = [],
        addExpense = expense => {
            expenses.push(expense)
            renderExpenses()
        },
        deleteExpense = index => {
            expenses.splice(index, 1)
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
        }

    return {
        // expenses,
        addExpense,
        // deleteExpense,
        // totalExpenses,
        renderExpenses
    }
}
