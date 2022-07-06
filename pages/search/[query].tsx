// Libraries
import { GetServerSidePropsContext } from "next";

// Functions
import { Results } from "components/Results";

// API data
const api_key = process.env.API_KEY;
const api_url = process.env.API_URL_SEARCH;

export default function Main({ data }) {
  return <Results movies={data.results} isTrend={false} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context.params;

  const res = await fetch(api_url.concat(api_key + `&query=${query}`));
  const data = await res.json();

  return {
    props: { data },
  };
}
