export default class Expenses {
    #expenses;
    constructor() {
        this.#expenses = []
        if (localStorage.getItem('expenses')) {
            try { this.#expenses.push(...JSON.parse(localStorage.getItem('expenses'))) }
            catch (e) { localStorage.removeItem('expenses') }
        }
    }
    get expenses() { return this.#expenses }

    #setLocalStorage() {
        localStorage.setItem('expenses', JSON.stringify(this.#expenses))
    }

    addExpense(expense) {
        this.#expenses.push(expense)
        this.#setLocalStorage()
    }

    removeExpense(index) {
        this.#expenses.splice(index, 1)
        this.#setLocalStorage()
    }

    totalExpenses() {
        return this.#expenses.reduce((total, expense) => total + expense.amountExpense, 0)
    }


}