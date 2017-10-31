class LoginApi {

  static login(credentials) {

    fetch('http://localhost:4000/auth/users', {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(credentials)

    }).then(response => {
      console.log('teste');
      console.log(response);
      console.log(response.json());

      return response.json();
    }).catch(error => {
      console.log(error);
      return error;
    });
  }
}

export default LoginApi;  