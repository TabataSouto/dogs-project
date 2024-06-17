import HeaderRoutes from "../../routes/HeaderRoutes";
import UserHeader from "../../components/header/UserHeader";

function User() {
  return (
    <section className="container">
      <UserHeader />
      <HeaderRoutes />
    </section>
  );
}

export default User;
