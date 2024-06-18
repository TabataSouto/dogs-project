import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments"
import styles from "./PhotoContent.module.css";

function PhotoContent({ data }) {
  const { photoClass, imgClass, datailsClass, viewsClass, attributesClass, authorClass } =
    styles;
  const { photo, comments } = data;

  return (
    <div className={photoClass}>
      <div className={imgClass}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={datailsClass}>
        <div>
          <p className={authorClass}>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className={viewsClass}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={attributesClass}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade > 1 ? `${photo.idade} anos` : `${photo.idade} ano`}{" "}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
}

export default PhotoContent;

PhotoContent.propTypes = {
  data: PropTypes.objectOf({
    photo: PropTypes.objectOf({
      src: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      acessos: PropTypes.number,
      id: PropTypes.number,
    }),
  }),
};
