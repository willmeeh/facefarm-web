class LoginApi {

  static login(credentials) {

    return fetch('http://localhost:4000/auth/users', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)

    }).then(response => {
      return response.json();

    }).catch(error => {
      return error;

    });
  }
}

export default LoginApi;  
