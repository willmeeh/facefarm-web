export const initApplication = () => ({
  type: 'INIT_APPLICATION'
});

export const resetApplication = () => ({
  type: 'RESET_APPLICATION'
});

export const loginUserSuccess = (token = '') => ({
  type: 'LOGIN_USER_SUCCESS',
  token
});

export const setLang = (lang = '') => ({
  type: 'SET_LANG',
  lang
});

export const setTranslateStrings = (translateStrings = {}) => ({
  type: 'SET_TRANSLATE_STRINGS',
  translateStrings
});
