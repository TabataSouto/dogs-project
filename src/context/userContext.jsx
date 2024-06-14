import { createContext, useState } from "react";
import PropTypes from "prop-types";

import { TOKEN_POST, USER_GET } from "../api";

export const UserContext = createContext();

export function UserStorage({ children }) {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const data = await response.json();
    setData(data);
  };

  const userLogin = async (username, password) => {
    const { url, options } = TOKEN_POST({ username, password });
    const tokenRes = await fetch(url, options);
    const { token } = await tokenRes.json();
    window.localStorage.setItem("token", token);
    getUser(token);
    setLogin(true);
  };

  const values = {
    userLogin,
    data
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

UserStorage.propTypes = {
  children: PropTypes.node,
};
