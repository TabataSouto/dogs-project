import HeaderRoutes from "../../routes/headerRoutes";
import UserHeader from "../../components/header/UserHeader";
import Head from "../../components/helper/Head";

function User() {
  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <HeaderRoutes />
    </section>
  );
}

export default User;
