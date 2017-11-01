class LoginApi {

  static login(credentials) {

    fetch('http://localhost:4000/auth/users', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(credentials)

    }).then(response => {     
      return response.json();
      
    }).then(function(responseJson) {
       console.log(responseJson);
       return responseJson;
      
    }).catch(error => {
      console.log(error);
      return error;
      
    });
  }
}

export default LoginApi;  
