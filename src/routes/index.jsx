import { Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Switch>
  );
}

export default AppRoutes;
