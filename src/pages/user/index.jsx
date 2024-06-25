import HeaderRoutes from "../../routes/headerRoutes.jsx";
import UserHeader from "../../components/header/UserHeader";
import Head from "../../components/helper/Head";
import { BrowserRouter } from "react-router-dom";

function User() {
  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <BrowserRouter>
        <HeaderRoutes />
      </BrowserRouter>
    </section>
  );
}

export default User;
