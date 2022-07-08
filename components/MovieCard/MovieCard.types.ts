interface IProdCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface IMovieCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface IMovieGenre {
  id: number;
  name: string;
}

/* Movie Data Interface ==================
- Left other items returned in Object, in case we
    add features that may require them down the line
======================================= */
export interface IMovie {
  // adult: boolean;
  // backdrop_path: string;
  // belongs_to_collection: IMovieCollection
  // budget: number;
  genres: IMovieGenre[];
  homepage: string;
  id: number;
  // imdb_id: string;
  // original_language: string;
  // original_title: string;
  overview: string;
  // popularity: number;
  poster_path: string;
  production_companies: IProdCompany[];
  /* production_countries: [
    { iso_3166_1: "US"; name: "United States of America" }
  ]; */
  release_date: string;
  // revenue: number;
  runtime: number;
  /* spoken_languages: [
    { english_name: "Cantonese"; iso_639_1: "cn"; name: "广州话 / 廣州話" },
    { english_name: "English"; iso_639_1: "en"; name: "English" },
    { english_name: "Spanish"; iso_639_1: "es"; name: "Español" }
  ]; */
  // status: string;
  tagline: string;
  title: string;
  video: false;
  vote_average: 7.5;
  vote_count: 4001;
}

export interface IMovieListProps {
  movies: IMovie[];
  variant: "details" | "grid" | "list";
}
