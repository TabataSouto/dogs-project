import { useEffect } from "react";
import PropTypes from "prop-types";
import { PHOTOS_GET } from "../../api";
import FeedPhotosItem from "./FeedPhotosItem";
import Error from "../helper/Error";
import Loading from "../helper/Loading";
import useFetch from "../../hooks/useFetch";
import styles from "./FeedPhotos.module.css";

function FeedPhotos({ setModalPhoto }) {
  const { feedClass } = styles;
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    (async () => {
      const { url, options } = PHOTOS_GET({
        page: 1,
        total: 6,
        user: 0,
      });
      const { json } = await request(url, options);
      console.log(json);
    })();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${feedClass} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
}

export default FeedPhotos;

FeedPhotos.propTypes = {
  setModalPhoto: PropTypes.func,
};
