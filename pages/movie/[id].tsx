// Libraries
import { GetServerSidePropsContext } from "next";

// Functions
import { Movie } from "components/Movie";

// API data
const api_key = "6c0d3427fcf17ddf80d04106c35a3a98";
const api_url = `https://api.themoviedb.org/3/movie/`;

export default function Main({ data }) {
  return <Movie moviedata={JSON.stringify(data)} />; // End return
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params;
  const append = `${id}?api_key=${api_key}`;
  const url = api_url.concat(append);

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data },
  };
}
