import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import useMedia from "../../hooks/useMedia";
import { UserContext } from "../../context/userContext";
import { ReactComponent as MinhasFotos } from "../../assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../assets/estatisticas.svg";
import { ReactComponent as Adicionar } from "../../assets/adicionar.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";

import styles from "./UserHeaderNav.module.css";

function UserHeaderNav() {
  const {
    navClass,
    navMobileClass,
    navMobileActiveClass,
    mobileButtonClass,
    mobileButtonActiveClass,
  } = styles;
  const { userLogout } = useContext(UserContext);
  const { pathname } = useLocation(0);
  const navigate = useNavigate();
  const mobile = useMedia("(max-width: 40rem)");

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const handleLogout = () => {
    userLogout();
    navigate("/login");
  };

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${mobileButtonClass} ${
            mobileMenu && mobileButtonActiveClass
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? navMobileClass : navClass} ${
          mobileMenu && navMobileActiveClass
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <Adicionar />
          {mobile && "Adicionar Foto "}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
}

export default UserHeaderNav;
