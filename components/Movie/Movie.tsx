// Libraries
import React, { useState, useEffect } from "react";
import { GetServerSidePropsContext } from "next";

// Functions
import Moviecard from "./Moviecard";

// Styles
import styles from "components/Movie/Movie.module.css";

// API data
const api_key = "6c0d3427fcf17ddf80d04106c35a3a98";
const api_url = `https://api.themoviedb.org/3/movie/`;

interface IMovieProps {
  moviedata: string;
}

export default function Movie({ moviedata }: IMovieProps) {
  //console.log(moviedata);
  //const movie = JSON.parse(moviedata);1

  //return <Moviecard movie={movie} />;
  return <Moviecard moviedata={moviedata} />;
}

/* export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params;
  const append = `${id}?api_key=${api_key}`;
  const url = api_url.concat(append);
  console.log("server side message");

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { id: "100" },
  };
}
 */
