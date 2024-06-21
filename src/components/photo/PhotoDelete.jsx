import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch";
import { PHOTO_DELETE } from "../../api";
import styles from "./PhotoDelete.module.css";

function PhotoDelete({ id }) {
  const { deleteClass } = styles;
  const { request, loading } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm("Tem certeza de que deseja deletar?");

    if (confirm) {
      const token = window.localStorage.getItem("token");
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);

      if (response.ok) window.location.reload();
    }
  };

  return (
    <>
      <button onClick={handleClick} disabled={loading} className={deleteClass}>
        {loading ? "Deletando..." : "Deletar"}
      </button>
    </>
  );
}

export default PhotoDelete;

PhotoDelete.propTypes = {
  id: PropTypes.number.isRequired,
};
