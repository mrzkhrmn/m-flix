// types/movie.ts
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  genre_ids: number[];
}

export interface MovieResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}
