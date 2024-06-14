import { Link } from "react-router-dom";

import Input from "../../components/forms/Input";
import Button from "../../components/forms/Button";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function LoginForm() {
  const { userLogin } = useContext(UserContext);

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
    <section>
      <h1>LoginForm</h1>
      <form onSubmit={handleClick}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar"></Link>
    </section>
  );
}

export default LoginForm;
