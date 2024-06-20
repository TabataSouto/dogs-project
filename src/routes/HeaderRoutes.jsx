import { Routes as Switch, Route } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import Feed from "../components/feed/Feed";
import UserPhotoPost from "../components/user/UserPhotoPost";
import UserStats from "../components/user/UserStats";
import NotFound from "../components/notFound";

function HeaderRoutes() {
  const { data } = useContext(UserContext);

  return (
    <Switch>
      <Route path="/" element={<Feed user={data.id} />} />
      <Route path="/postar" element={<UserPhotoPost />} />
      <Route path="/estatisticas" element={<UserStats />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
}

export default HeaderRoutes;
