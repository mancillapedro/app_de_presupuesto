export default class Budget {
    #budget = 0;
    constructor() {
        if (localStorage.getItem('budget'))
            try { this.#budget = Number(JSON.parse(localStorage.getItem('budget'))) }
            catch (e) { localStorage.removeItem('budget') }
    }
    get budget() { return this.#budget }
    set budget(newBudget) {
        if (newBudget < 0) return;
        this.#budget = newBudget
        localStorage.setItem('budget', JSON.stringify(this.#budget))
    }
}