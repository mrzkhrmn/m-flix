// types/movie.ts
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export interface MovieResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}
