const sessionReducerDefaultState = {
  jwt: undefined,
  userType: undefined,
  lang: undefined,
  translateStrings: {}
};

export default (state = sessionReducerDefaultState, action) => {
  switch (action.type) {
    case 'INIT_APPLICATION':

      if (sessionStorage.getItem('userType') === sessionStorage.getItem('jwt')) {

        let facefarmSessino = localStorage.getItem('facefarm');
        if (facefarmSessino) {
          let local = JSON.parse(atob(facefarmSessino));
          sessionStorage.setItem('jwt', local.jwt);
          sessionStorage.setItem('userType', local.userType);
        }
      }

      return {
        ...state,
        jwt: sessionStorage.getItem('jwt'),
        userType: sessionStorage.getItem('userType')
      };
    case 'RESET_APPLICATION':
      localStorage.clear();
      sessionStorage.clear();
      return {
        ...state,
        jwt: '',
        userType: ''
      };
    case 'SET_JWT_TOKEN_USER_TYPE':
      sessionStorage.setItem('jwt', action.jwt);
      sessionStorage.setItem('userType', action.userType);
      localStorage.setItem('facefarm', btoa(JSON.stringify({
        jwt: action.jwt,
        userType: action.userType
      })));
      return {
        ...state,
        jwt: action.jwt,
        userType: action.userType
      };
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
