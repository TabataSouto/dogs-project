import { Routes as Switch, Route } from "react-router-dom";

import LoginForm from "../components/login/LoginForm";
import LoginCreate from "../components/login/LoginCreate";
import LoginPasswordLost from "../components/login/LoginPasswordLost";
import LoginPasswordReset from "../components/login/LoginPasswordReset";

function LoginRoutes() {
  return (
    <Switch>
      <Route path="/" element={<LoginForm />} />
      <Route path="/criar" element={<LoginCreate />} />
      <Route path="perdeu" element={<LoginPasswordLost />} />
      <Route path="resetar" element={<LoginPasswordReset />} />
    </Switch>
  );
}

export default LoginRoutes;
