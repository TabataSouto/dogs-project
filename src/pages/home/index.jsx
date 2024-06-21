import Feed from "../../components/feed/Feed";
import Head from "../../components/helper/Head";

function Home() {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home do site dogs, com feed de fotos." />
      <Feed />
    </section>
  );
}

export default Home;
