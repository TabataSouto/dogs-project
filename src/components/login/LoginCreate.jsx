import { useContext } from "react";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { UserContext } from "../../context/userContext";
import { USER_POST } from "../../api";
import Input from "../forms/Input";
import Button from "../forms/Button";
import Error from "../helper/Error";
import Head from "../helper/Head";

function LoginCreate() {
  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  };

  return (
    <section className="animeLeft">
      <Head title="Crie sua conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Button>
        <Error error={error} />
      </form>
    </section>
  );
}

export default LoginCreate;
