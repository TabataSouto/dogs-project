import PropTypes from "prop-types";
import styles from "./FeedPhotosItem.module.css";

function FeedPhotosItem({ photo }) {
  const { photoClass } = styles;

  return (
    <li className={photoClass}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;

FeedPhotosItem.propTypes = {
  photo: PropTypes.objectOf({
    src: PropTypes.string,
    title: PropTypes.string,
    acessos: PropTypes.string,
  }),
};
