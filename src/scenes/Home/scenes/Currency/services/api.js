
export const get = (defaultCurrency) => {
  return fetch('http://localhost:4000/currency', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'x-auth': sessionStorage.getItem('token')
    },
    body: JSON.stringify(defaultCurrency)

  }).then(response => {
    return response.json();

  }).catch(error => {
    return error;

  });
}

    