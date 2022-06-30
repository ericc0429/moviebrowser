// Libraries
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";

// Functions
import { Movie } from "components/Movie";
import { Results } from "components/Results";

// API data
const api_key = "6c0d3427fcf17ddf80d04106c35a3a98";
const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`;

export default function Main({ data }) {
  console.log(data.results);
  return <Results movies={data.results} isTrend={false} />;
  //const router = useRouter();
  //const { id } = router.query;
  //console.log(id);
  //console.log(JSON.stringify(data));
  //return <Movie moviedata={JSON.stringify(data)} />; // End return
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context.params;
  console.log(query);

  const url = api_url.concat(`&query=${query}`);

  console.log("-- Submitting Search Query --"); // Debugging purposes

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data },
  };
}
