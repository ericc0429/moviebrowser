// Libraries
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";

// Functions
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Movie } from "components/Movie";

// Styles
import styles from "styles/Home.module.css";

// API data
const api_key = "6c0d3427fcf17ddf80d04106c35a3a98";
const api_url = `https://api.themoviedb.org/3/movie/`;

export default function Main({ data }) {
  //const router = useRouter();
  //const { id } = router.query;
  //console.log(id);
  console.log(JSON.stringify(data));

  return (
    <div className={styles.container}>
      <Header />

      <Movie moviedata={JSON.stringify(data)} />

      <Footer />
    </div>
  ); // End return
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params;
  console.log(id);
  const append = `${id}?api_key=${api_key}`;
  const url = api_url.concat(append);

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data },
  };
}
