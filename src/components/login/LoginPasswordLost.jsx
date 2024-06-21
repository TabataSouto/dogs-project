import { PASSWORD_LOST } from "../../api";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import Input from "../../components/forms/Input";
import Button from "../../components/forms/Button";
import Error from "../../components/helper/Error";
import Head from "../../components/helper/Head";

function LoginPasswordLost() {
  const { data, error, loading, request } = useFetch();
  const login = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (login.validationValue) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar "),
      });

      await request(url, options);
    }
  };

  return (
    <section>
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1"}}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            label={"Email / Usuário"}
            type="text"
            name="login"
            {...login}
          />
          <Button disabled={loading}>
            {loading ? "Enviando..." : "Enviar Email"}
          </Button>
        </form>
      )}
      {error && <Error error={error} />}
    </section>
  );
}

export default LoginPasswordLost;
