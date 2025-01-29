import { fetchMovieAPI } from "../lib/api";
import { Movie } from "../types/movie";

export const PopularMovies = async () => {
  const { results: popularMovies } = await fetchMovieAPI("/movie/popular", {
    language: "en-US",
    page: 1,
  });
  return (
    <div>
      {popularMovies.map((movie: Movie) => (
        <h1 key={movie.id}>{movie.title}</h1>
      ))}
    </div>
  );
};
