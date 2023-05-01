export default class Storage {
    #nameStorage;
    #storage = []

    constructor(name_storage) {
        this.#nameStorage = name_storage
        if (localStorage.getItem(this.#nameStorage))
            try {
                this.#storage.push(
                    ...JSON.parse(localStorage.getItem(this.#nameStorage))
                )
            }
            catch (e) { localStorage.removeItem(this.#nameStorage) }
    }

    get _storage() { return this.#storage }
    set _storage(newStorage) {
        this.#storage = newStorage
        localStorage.setItem(this.#nameStorage, JSON.stringify(this.#storage))
    }

}