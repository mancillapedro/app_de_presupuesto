import itemListComponent from "../components/itemListComponent.js"

export default class HomeView {
    #storageExpenses
    #storageBudget
    #outputBudget
    #outputExpense
    #balance
    #listExpenses

    constructor({ storageExpenses, storageBudget }) {
        this.#storageExpenses = storageExpenses
        this.#storageBudget = storageBudget
        this.#outputBudget = document.querySelector('#outputBudget')
        this.#outputExpense = document.querySelector('#outputExpense')
        this.#balance = document.querySelector('#balance')
        this.#listExpenses = document.querySelector('#listExpenses tbody')

    }

    renderView = () => {
        const
            expenses = this.#storageExpenses.expenses,
            totalExpenses = this.#storageExpenses.totalExpenses(),
            totalBalance = Number(this.#storageBudget.budget - totalExpenses);

        this.#outputBudget.innerText = this.#storageBudget.budget.toLocaleString("es-cl", { style: "currency", currency: "CLP" });
        [this.#listExpenses, this.#outputExpense, this.#balance].forEach(e => e.innerHTML = '')

        expenses.forEach((expense, index) =>
            this.#listExpenses.insertAdjacentElement('beforeend',
                itemListComponent({ index, ...expense, storage: this.#storageExpenses, render: this.renderView })
            )
        )

        this.#outputExpense.innerText = totalExpenses.toLocaleString("es-cl", { style: "currency", currency: "CLP" })
        this.#balance.innerText = totalBalance.toLocaleString("es-cl", { style: "currency", currency: "CLP" })
        this.#balance.classList.toggle('text-danger', totalBalance < 0)
    }
}