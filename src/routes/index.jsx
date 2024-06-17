import { Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import User from "../pages/user";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      {/* o /* depois de login é a configuração necessária para
      que subrotas sejam aceitas. Como por exemplo /login/criar */}
      <Route path="/login/*" element={<Login />} />
      <Route
        path="/conta/*"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      />
    </Switch>
  );
}

export default AppRoutes;
