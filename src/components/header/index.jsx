import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";
import styles from "./Header.module.css";

function Header() {
  const { header, logo, login, nav } = styles;

  return (
    <header className={header}>
      <nav className={`${nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={logo}>
          <Dogs />
        </Link>
        <Link to="/login" className={login}>
          Login / Criar
        </Link>
      </nav>
    </header>
  );
}

export default Header;
