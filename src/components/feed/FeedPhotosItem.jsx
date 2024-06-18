import PropTypes from "prop-types";
import styles from "./FeedPhotosItem.module.css";

function FeedPhotosItem({ photo, setModalPhoto }) {
  const { photoClass } = styles;

  const handleClick = () => {
    setModalPhoto(photo);
  };

  return (
    <li className={photoClass} onClick={handleClick}>
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
  setModalPhoto: PropTypes.func,
};
