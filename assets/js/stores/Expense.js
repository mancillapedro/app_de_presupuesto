import Storage from "./Storage.js";

export default class Expenses extends Storage {
    constructor(name_storage = 'expenses') {
        super(name_storage)
    }

    get expenses() { return this._storage }

    addExpense(expense) {
        const storage = [...this._storage]
        storage.push(expense)
        this._storage = storage
    }

    removeExpense(index) {
        const storage = [...this._storage]
        storage.splice(index, 1)
        this._storage = storage
    }

    totalExpenses() {
        return this._storage.reduce((total, expense) => total + expense.amountExpense, 0)
    }

}