import jwtDecode from 'jwt-decode';

const sessionReducerDefaultState = {
  isAuthenticated: false,
  user: undefined,
  token: undefined,
  lang: undefined,
  translateStrings: {}
};

export default (state = sessionReducerDefaultState, action) => {
  switch (action.type) {
    case 'INIT_APPLICATION': {
      const token = atob(localStorage.getItem('facefarm'));
      let user, isAuthenticated = false;
      if (token) {
        try {
          user = jwtDecode(token);
          sessionStorage.setItem('user', user);
          isAuthenticated = true;
        } catch (e) {
          console.log(e, 'Token inválido');
        }
      }
      return {
        ...state,
        isAuthenticated,
        user,
        token
      };
    }
    case 'RESET_APPLICATION': 
      localStorage.clear();
      sessionStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: undefined,
        token: undefined
      };
    case 'LOGIN_USER_SUCCESS': {
      const user = jwtDecode(action.token);
      sessionStorage.setItem('user', user);
      localStorage.setItem('facefarm', btoa(action.token));
      console.log("teste")
      return {
        ...state,
        isAuthenticated: true,
        user: user,
        token: action.token
      };
    }
    case 'SET_LANG':
      return {
        ...state,
        lang: action.lang
      };
    case 'SET_TRANSLATE_STRINGS':
      return {
        ...state,
        translateStrings: action.translateStrings
      };
    default:
      return state;
  }
};
