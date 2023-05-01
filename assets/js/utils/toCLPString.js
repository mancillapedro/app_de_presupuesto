export default
    (number) =>
        number.toLocaleString(
            "es-cl",
            {
                style: "currency",
                currency: "CLP"
            }
        )