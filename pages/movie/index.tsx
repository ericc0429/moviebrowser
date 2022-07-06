// Functions
import { Trending } from "components/Trending";

// API data
const api_key = "6c0d3427fcf17ddf80d04106c35a3a98";
const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`;

export default function Main({ data }) {
  return <Trending movies={data.results} />; // End return
}

export async function getServerSideProps() {
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data },
  };
}
