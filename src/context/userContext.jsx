import { createContext, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from "../api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export function UserStorage({ children }) {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const userLogout = useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const data = await response.json();
    setData(data);
    setLogin(true);
  };

  const userLogin = async (username, password) => {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);

      if (!tokenRes.ok) throw new Error(`Usuário inválido`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);

          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);

          if (!response.ok) throw new Error("Token inválido!");
          await getUser(token);
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    })();
  }, [userLogout]);

  const values = {
    userLogin,
    userLogout,
    data,
    error,
    loading,
    login,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

UserStorage.propTypes = {
  children: PropTypes.node,
};
