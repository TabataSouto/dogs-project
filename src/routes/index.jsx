import { Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import User from "../pages/user";
import Photo from "../pages/photo";
import UserProfile from "../components/user/UserProfile";
import NotFound from "../components/notFound";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      {/* o /* depois de login é a configuração necessária para
      que subrotas sejam aceitas. Como por exemplo /login/criar */}
      <Route path="/login/*" element={<Login />} />
      <Route path="/foto/:id" element={<Photo />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/conta/*"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      />
      <Route
        path="/perfil/:user"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />
    </Switch>
  );
}

export default AppRoutes;
