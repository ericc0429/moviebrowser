// Functions
import MovieCardList from "components/MovieCard/MovieCardList";
import Trending from "components/Trending";

// API data
const api_key = process.env.API_KEY;
const api_url = process.env.API_URL_TREND;

export default function Main({ data }) {
  // return <Trending movies={data.results} />; // End return
  return <MovieCardList movies={data.results} variant={"grid"} />;
}

export async function getServerSideProps() {
  const res = await fetch(api_url.concat(api_key));
  const data = await res.json();

  return {
    props: { data },
  };
}
