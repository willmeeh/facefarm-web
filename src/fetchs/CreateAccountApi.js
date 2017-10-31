class CreateAccountApi {
  
    static create(newAgricultor) {
  
      fetch('http://localhost:4000/agricultor/', {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(newAgricultor)
  
      }).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
  }
  
  export default CreateAccountApi;  