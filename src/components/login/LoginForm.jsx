// import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../components/forms/Input";
import Button from "../../components/forms/Button";

function LoginForm() {
  // const [user, setUser] = useState({ username: "", password: "" });

  // const handleChange = ({ target: { name, value } }) => {
  //   setUser((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <h1>LoginForm</h1>
      <form onSubmit={handleClick}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar"></Link>
    </section>
  );
}

export default LoginForm;
