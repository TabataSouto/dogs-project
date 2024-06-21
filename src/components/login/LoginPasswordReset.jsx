import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PASSWORD_RESET } from "../../api";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import Input from "../../components/forms/Input";
import Button from "../../components/forms/Button";
import Error from "../../components/helper/Error";
import Head from "../../components/helper/Head";

function LoginPasswordReset() {
  const navigate = useNavigate();
  const password = useForm();
  const { error, loading, request } = useFetch();
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password.validationValue()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  };

  return (
    <section>
      <Head title="Resete a senha" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        <Button disabled={loading}>
          {loading ? "Resetando..." : "Resetar"}
        </Button>
      </form>
      {error && <Error error={error} />}
    </section>
  );
}

export default LoginPasswordReset;
