// Libraries
import { GetServerSidePropsContext } from "next";

// Functions
import { Movie } from "components/Movie";

// API data
const api_key = process.env.API_KEY;
const api_url = process.env.API_URL_MOVIE;

export default function Main({ data }) {
  return <Movie moviedata={JSON.stringify(data)} />; // End return
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params;

  const res = await fetch(api_url.concat(id + api_key));
  const data = await res.json();

  return {
    props: { data },
  };
}
