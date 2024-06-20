import { useEffect } from "react";
import PropTypes from "prop-types";
import { PHOTOS_GET } from "../../api";
import FeedPhotosItem from "./FeedPhotosItem";
import Error from "../helper/Error";
import Loading from "../helper/Loading";
import useFetch from "../../hooks/useFetch";
import styles from "./FeedPhotos.module.css";

function FeedPhotos({ user, setModalPhoto, page, setInfinite }) {
  const { feedClass } = styles;
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    (async () => {
      const total = 3;
      const { url, options } = PHOTOS_GET({
        page,
        total,
        user,
      });
      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < total) setInfinite(false);
    })();
  }, [request, user, page]);

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
  user: PropTypes.object,
  page: PropTypes.string,
  setInfinite: PropTypes.func,
};
