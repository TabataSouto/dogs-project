import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import Input from "../../components/forms/Input";
import Button from "../../components/forms/Button";
import useForm from "../../hooks/useForm";
import Error from "../../components/helper/Error";
import Head from "../../components/helper/Head";
import styles from "./LoginForm.module.css";
import btnStyle from "../forms/Button.module.css";

function LoginForm() {
  const { userLogin, error, loading } = useContext(UserContext);
  const { formClass, lostClass, registerClass, subtitleClass } = styles;

  // retorna o value, setValue e o onChange.
  const username = useForm();
  const password = useForm();

  const handleClick = async (event) => {
    event.preventDefault();

    if (username.validationValue() && password.validationValue()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={formClass} onSubmit={handleClick}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button disabled={loading}>
          {loading ? "Carregando..." : "Entrar"}
        </Button>
        <Error error={error} />
      </form>
      <Link className={lostClass} to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={registerClass}>
        <h2 className={subtitleClass}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={btnStyle.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
}

export default LoginForm;
