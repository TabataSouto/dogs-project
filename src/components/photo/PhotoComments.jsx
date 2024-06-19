import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../../context/userContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

function PhotoComments(props) {
  const { login } = useContext(UserContext);
  const { commentClass } = styles;
  const [comments, setComments] = useState(() => props.comments);

  return (
    <>
      <ul className={commentClass}>
        {comments.map(({ comment_id, comment_author, comment_content }) => (
          <li key={comment_id}>
            <b>{comment_author}:</b>
            <span>{comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
}

export default PhotoComments;

PhotoComments.propTypes = {
  id: PropTypes.string,
  comments: PropTypes.string,
};
