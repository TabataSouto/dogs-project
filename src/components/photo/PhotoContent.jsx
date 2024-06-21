import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import styles from "./PhotoContent.module.css";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import PhotoDelete from "./PhotoDelete";
import Image from "../helper/Image";

function PhotoContent({ data, single }) {
  const {
    photoClass,
    imgClass,
    detailsClass,
    viewsClass,
    attributesClass,
    authorClass,
    singleClass,
  } = styles;
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={`${photoClass} ${single ? singleClass : ""}`}>
      <div className={imgClass}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={detailsClass}>
        <div>
          <p className={authorClass}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

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
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </div>
  );
}

export default PhotoContent;

PhotoContent.propTypes = {
  data: PropTypes.shape({
    photo: PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      acessos: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      peso: PropTypes.string.isRequired,
      idade: PropTypes.string.isRequired,
    }).isRequired,
    comments: PropTypes.array.isRequired,
  }).isRequired,
  single: PropTypes.bool,
};
