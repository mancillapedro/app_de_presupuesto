import itemListComponent from "./../components/itemListComponent.js"

export default (listExpenses) => {
    const
        expenses = [],
        addExpense = expense => {
            expenses.push(expense)
            renderExpenses(listExpenses)
        },
        deleteExpense = (index) => {
            expenses.splice(index, 1)
            renderExpenses(listExpenses)
        },
        totalExpenses = () =>
            expenses.reduce((total, expense) => total + expense.amountExpense, 0),
        renderExpenses = listExpenses => {
            listExpenses.innerHTML = ''
            expenses.forEach((expense, index) =>
                listExpenses.insertAdjacentElement('beforeend',
                    itemListComponent({ index, ...expense, deleteExpense }))
            )
        }

    return {
        // expenses,
        addExpense,
        // deleteExpense,
        totalExpenses,
        // renderExpenses
    }
}
