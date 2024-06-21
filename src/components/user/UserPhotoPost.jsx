import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PHOTO_POST } from "../../api/index";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import Head from "../helper/Head";
import Input from "../forms/Input";
import Button from "../forms/Button";
import Error from "../helper/Error";
import styles from "./UserPhotoPost.module.css";

function UserPhotoPost() {
  const { photoPostClass, previewClass, fileClass } = styles;
  const navigate = useNavigate();

  const { data, error, loading, request } = useFetch();
  const [img, setImg] = useState({});
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", img.file);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  };

  const handleChangeImg = ({ target: { files } }) => {
    setImg({
      preview: URL.createObjectURL(files[0]),
      file: files[0],
    });
  };

  return (
    <section className={`${photoPostClass} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="text" name="peso" {...peso} />
        <Input label="Idade" type="text" name="idade" {...idade} />
        <input
          className={fileClass}
          type="file"
          name="img"
          id="img"
          onChange={handleChangeImg}
        />
        <Button disabled={loading}>{loading ? "Enviando..." : "Enviar"}</Button>
        {error && <Error error={error} />}
      </form>
      {img.preview && (
        <div
          className={previewClass}
          style={{
            backgroundImage: `url('${img.preview}')`,
          }}
        ></div>
      )}
    </section>
  );
}

export default UserPhotoPost;
