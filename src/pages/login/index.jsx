import LoginRoutes from "../../routes/Login";
import styles from "./Login.module.css";

function LoginPage() {
  const { loginClass, formsClass } = styles;

  return (
    <section className={loginClass}>
      <div className={formsClass}>
        <LoginRoutes />
      </div>
    </section>
  );
}

export default LoginPage;
