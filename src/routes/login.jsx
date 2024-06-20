import { useContext } from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";

import { UserContext } from "../context/userContext";
import LoginForm from "../components/login/LoginForm";
import LoginCreate from "../components/login/LoginCreate";
import LoginPasswordLost from "../components/login/LoginPasswordLost";
import LoginPasswordReset from "../components/login/LoginPasswordReset";
import NotFound from "../components/notFound";

function LoginRoutes() {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to="/conta" />;
  return (
    <Switch>
      <Route path="/" element={<LoginForm />} />
      <Route path="/criar" element={<LoginCreate />} />
      <Route path="perdeu" element={<LoginPasswordLost />} />
      <Route path="resetar" element={<LoginPasswordReset />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
}

export default LoginRoutes;
