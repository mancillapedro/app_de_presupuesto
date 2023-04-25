

const INITIALIZE_STORE = storeExpenses => {
    if (localStorage.getItem('expenses')) {
        try { storeExpenses = JSON.parse(localStorage.getItem('opinions')) }
        catch (e) { localStorage.removeItem('expenses') }
    }
}

const saveOpinions = storeExpenses => { localStorage.setItem('opinions', JSON.stringify(storeExpenses)) }