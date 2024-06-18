import { useEffect } from "react";
import PropTypes from "prop-types";
import { PHOTO_GET } from "../../api";
import Error from "../helper/Error";
import Loading from "../helper/Loading";
import PhotoContent from "../photo/PhotoContent";
import useFetch from "../../hooks/useFetch";
import styles from "./FeedModal.module.css";

function FeedModal({ photo }) {
  const { modalClass } = styles;

  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={modalClass}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}

export default FeedModal;

FeedModal.propTypes = {
  photo: PropTypes.objectOf(),
};
