import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";

function UserHeader() {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste sua foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha conta");
        break;
    }
  }, [location]);

  return (
    <header className={styles.headerClass}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}

export default UserHeader;
