export const get = (defaultCurrency) => {
    return fetch('http://localhost:4000/agricultor/', {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify(newAgricultor)

    }).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}