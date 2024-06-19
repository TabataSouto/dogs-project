import { useState } from "react";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch";
import Error from "../helper/Error";
import { ReactComponent as Enviar } from "../../assets/enviar.svg";
import { COMMENT_POST } from "../../api";

function PhotoCommentsForm({ id, setComments }) {
  const { request, error } = useFetch();
  const [comment, setComment] = useState("");

  const handleChange = ({ target: { value } }) => {
    setComment(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = window.localStorage.getItem("token");
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((prev) => [...prev, json]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={handleChange}
      />
      <button>
        <Enviar />
      </button>
      {error && <Error error={error} />}
    </form>
  );
}

export default PhotoCommentsForm;

PhotoCommentsForm.propTypes = {
  id: PropTypes.number,
  setComments: PropTypes.func,
};
