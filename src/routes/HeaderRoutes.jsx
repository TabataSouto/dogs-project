import { Routes as Switch, Route } from "react-router-dom";
import Feed from "../components/feed/Feed";
import UserPhotoPost from "../components/user/UserPhotoPost";
import UserStats from "../components/user/UserStats";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

function HeaderRoutes() {
  const { data } = useContext(UserContext);

  return (
    <Switch>
      <Route path="/" element={<Feed user={data.id} />} />
      <Route path="/postar" element={<UserPhotoPost />} />
      <Route path="/estatisticas" element={<UserStats />} />
    </Switch>
  );
}

export default HeaderRoutes;
