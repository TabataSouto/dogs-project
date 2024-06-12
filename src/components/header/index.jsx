import { Link } from "react-router-dom";
import dogs from "../../assets/dogs.svg";
import styles from "./Header.module.css";

function Header() {
  const { header } = styles;

  return (
    <div className={header}>
      <nav className="container">
        <Link to="/">
          <img src={dogs} />
        </Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
}

export default Header;
