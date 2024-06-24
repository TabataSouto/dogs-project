import { Suspense, lazy, useEffect } from "react";
import { STATS_GET } from "../../api";
import useFetch from "../../hooks/useFetch";
import Head from "../../components/helper/Head";
import Loading from "../helper/Loading";
import Error from "../helper/Error";

const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));

function UserStats() {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const getData = async () => {
      const { url, options } = STATS_GET(token);
      await request(url, options);
    };
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  else return null;
}

export default UserStats;
