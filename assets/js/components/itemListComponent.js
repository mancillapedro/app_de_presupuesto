import toCLPString from "../utils/toCLPString.js";

export default ({
    index,
    nameExpense,
    amountExpense,
    storage,
    render
}) => {
    const
        buttonDelete = document.createElement('button'),
        li = document.createElement("li");

    buttonDelete.classList.add(
        'icon-link',
        'btn',
        'btn-outline-primary',
        'border-0'
    )

    buttonDelete.addEventListener('click', () => {
        const accept = confirm(`¿Estás seguro de eliminar el gasto "${nameExpense}"?`)
        if (!accept) return;
        storage.removeExpense(index)
        render()
    })

    buttonDelete.innerHTML = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
        >
            <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
            />
            <path
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
            />
        </svg>`;

    li.classList.add('list-group-item', 'p-2')
    li.innerHTML = `
        <dl class="row row-cols-md-3 m-0 g-0 align-items-center">
            <dt class="col col-6 fw-normal">${nameExpense}</dt>
            <dd class="col col-5 m-0">${toCLPString(amountExpense)}</dd>
            <dd class="col col-1 m-0"></dd>
        </dl>`

    li.querySelector("dd:last-child").appendChild(buttonDelete)

    return li
}