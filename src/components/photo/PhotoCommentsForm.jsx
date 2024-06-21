import { useState } from "react";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch";
import Error from "../helper/Error";
import { COMMENT_POST } from "../../api";
import { ReactComponent as Enviar } from "../../assets/enviar.svg";
import styles from "./PhotoCommentsForm.module.css";

function PhotoCommentsForm({ id, setComments, single }) {
  const { formClass, textareaClass, buttonClass, singleClass } = styles;
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
    <form
      className={`${formClass} ${single ? singleClass : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={textareaClass}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={handleChange}
      />
      <button className={buttonClass}>
        <Enviar />
      </button>
      {error && <Error error={error} />}
    </form>
  );
}

export default PhotoCommentsForm;

PhotoCommentsForm.propTypes = {
  id: PropTypes.number.isRequired,
  setComments: PropTypes.func.isRequired,
  single: PropTypes.bool,
};
