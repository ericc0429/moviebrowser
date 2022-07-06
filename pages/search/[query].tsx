// Libraries
import { GetServerSidePropsContext } from "next";

// Functions
import { Results } from "components/Results";

// API data
const api_key = process.env.API_KEY;
const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`;

export default function Main({ data }) {
  return <Results movies={data.results} isTrend={false} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context.params;

  const url = api_url.concat(`&query=${query}`);

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data },
  };
}
