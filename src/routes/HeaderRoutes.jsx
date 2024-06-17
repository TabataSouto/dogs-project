import { Routes as Switch, Route } from "react-router-dom";
import Feed from "../components/feed/Feed";
import UserPhotoPost from "../components/user/UserPhotoPost";
import UserStats from "../components/user/UserStats";

function HeaderRoutes() {
  return (
    <Switch>
      <Route path="/" element={<Feed />} />
      <Route path="/postar" element={<UserPhotoPost />} />
      <Route path="/estatisticas" element={<UserStats />} />
    </Switch>
  );
}

export default HeaderRoutes;
