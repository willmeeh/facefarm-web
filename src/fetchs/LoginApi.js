class LoginApi {

  static login(credentials) {
    console.log('login');

    return fetch('http://localhost:4000/auth/users', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)

    }).then((response) => {
      return response.json();

    }).catch((e) => {
      return error;

    });
  }
}

export default LoginApi;  
