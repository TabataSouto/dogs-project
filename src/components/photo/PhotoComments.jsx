import { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../../context/userContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

function PhotoComments(props) {
  const commentsSection = useRef(null);
  const { login } = useContext(UserContext);
  const { commentsClass, singleClass } = styles;
  const [comments, setComments] = useState(() => props.comments);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${commentsClass} ${props.single ? singleClass : ""}`}
      >
        {comments.map(({ comment_id, comment_author, comment_content }) => (
          <li key={comment_id}>
            <b>{comment_author}:</b>
            <span>{comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          id={props.id}
          setComments={setComments}
          single={props.single}
        />
      )}
    </>
  );
}

export default PhotoComments;

PhotoComments.propTypes = {
  id: PropTypes.string,
  comments: PropTypes.string,
  single: PropTypes.bool,
};
