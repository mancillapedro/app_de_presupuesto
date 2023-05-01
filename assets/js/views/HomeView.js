import itemListComponent from "../components/itemListComponent.js"
import toCLPString from "./../utils/toCLPString.js"

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
        this.#listExpenses = document.querySelector('#listExpenses')

    }

    renderView = () => {
        const
            expenses = this.#storageExpenses.expenses,
            totalExpenses = this.#storageExpenses.totalExpenses(),
            totalBalance = Number(this.#storageBudget.budget - totalExpenses);

        this.#outputBudget.innerText = toCLPString(this.#storageBudget.budget);

        [this.#listExpenses, this.#outputExpense, this.#balance]
            .forEach(e => e.innerHTML = '')

        expenses.forEach(
            (expense, index) =>
                this.#listExpenses.insertAdjacentElement(
                    'beforeend',
                    itemListComponent({
                        index,
                        ...expense,
                        storage: this.#storageExpenses,
                        render: this.renderView
                    })
                )
        )

        this.#outputExpense.innerText = toCLPString(totalExpenses)
        this.#balance.innerText = toCLPString(totalBalance)
        this.#balance.classList.toggle('text-danger', totalBalance < 0)
    }
}