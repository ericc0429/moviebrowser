// Functions
import Results from "components/Results";

// API data
const api_key = process.env.API_KEY;
const api_url = process.env.API_URL_TREND;

export default function Main({ data }) {
  return <Results movies={data.results} title={"Now Trending"} />;
}

export async function getServerSideProps() {
  const res = await fetch(api_url.concat(api_key));
  const data = await res.json();

  return {
    props: { data },
  };
}
