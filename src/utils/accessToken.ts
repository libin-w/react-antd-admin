import Cookies from "js-cookie";

const TOKEN_KEY = process.env.REACT_APP_TOKEN_KEY || "";
const TOKEN_EXPIRES = Number(process.env.REACT_APP_TOKEN_EXPIRES);
export const hasToken = () => {
  return Cookies.get(TOKEN_KEY) ? true : false;
};

export const getToken = () => {
  return Cookies.get(TOKEN_KEY) || "";
};

export const setToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, { expires: TOKEN_EXPIRES || 1 });
};
export const removeToken = () => {
  Cookies.set(TOKEN_KEY, "", { expires: 0 });
};
