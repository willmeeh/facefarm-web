export const initApplication = () => ({
  type: 'INIT_APPLICATION',
});

export const resetApplication = () => ({
  type: 'RESET_APPLICATION',
});

export const setJWTTokenUserType = (jwt = '', userType = '') => ({
  type: 'SET_JWT_TOKEN_USER_TYPE',
  jwt,
  userType
});

export const setLang = (lang = '') => ({
  type: 'SET_LANG',
  lang
});

export const setTranslateStrings = (translateStrings = {}) => ({
  type: 'SET_TRANSLATE_STRINGS',
  translateStrings
});
