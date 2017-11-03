class CurrencyApi {

    static get(defaultCurrency) {

      return fetch('http://localhost:4000/currency', {
        method: "POST",
        headers: { "Content-Type": "application/json",
        'x-auth': sessionStorage.getItem('jwt')},
        body: JSON.stringify(defaultCurrency)

      }).then(response => {
        return response.json();
  
      }).catch(error => {
        return error;
  
      });
    }
  }
  
  export default CurrencyApi;  
  