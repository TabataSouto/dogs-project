import styles from "./Footer.module.css";
import {ReactComponent as Dogs} from "../../assets/dogs-footer.svg"

function Footer() {
  const { footerClass } = styles;

  return <footer className={footerClass}>
    <Dogs />
    <p>Dogs. Alguns direitos reservados.</p>
  </footer>;
}

export default Footer;
