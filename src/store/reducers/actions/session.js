export const setJWTToken = (jwt = '') => ({
  type: 'SET_JWT_TOKEN',
  jwt
});

export const setUserType = (userType = '') => ({
  type: 'SET_USER_TYPE',
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
