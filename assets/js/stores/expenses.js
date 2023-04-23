export default () => {
    const
        expenses = [],
        methods = {
            add: expense =>
                expenses.push(expense),
            delete: index =>
                expenses.splice(index, 1),
            total: () =>
                expenses.reduce((total, expense) => total + expense.amountExpense, 0),
        }

    return { expenses, ...methods }
}
