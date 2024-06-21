import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET } from "../../api";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/helper/Error";
import Loading from "../../components/helper/Loading";
import PhotoContent from "../../components/photo/PhotoContent";
import Head from "../../components/helper/Head";

function Photo() {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </section>
    );
  else return null;
}

export default Photo;
