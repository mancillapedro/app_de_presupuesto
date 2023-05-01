import Storage from "./Storage.js";

export default class Budget extends Storage {

    constructor(name_storage = 'budget') {
        super(name_storage)
    }

    get budget() { return Number(this._storage[0]) }

    set budget(newBudget) {
        if (newBudget < 0) return;
        const storage = [...this._storage]
        storage[0] = newBudget
        this._storage = storage
    }
}