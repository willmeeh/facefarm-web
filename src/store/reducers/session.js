const sessionReducerDefaultState = {
  jwt: undefined,
  userType: undefined,
  lang: undefined,
  translateStrings: {}
};

export default (state = sessionReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_JWT_TOKEN':
      return {
        ...state,
        jwt: action.jwt
      };
    case 'SET_USER_TYPE':
      return {
        ...state,
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
