import { useParams } from "react-router-dom";
import Feed from "../feed/Feed";
import Head from "../helper/Head";

function UserProfile() {
  const { user } = useParams();

  return (
    <section className="container mainContainer">
      <Head title={user} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
}

export default UserProfile;
