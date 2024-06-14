import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";
import styles from "./Header.module.css";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function Header() {
  const { header, logo, login, nav } = styles;
  const { data } = useContext(UserContext);

  return (
    <header className={header}>
      <nav className={`${nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={logo}>
          <Dogs />
        </Link>
        {data ? (
          <Link to="/conta" className={login}>
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className={login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
