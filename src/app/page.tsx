import { HeroSection } from "./components/HeroSection";
import { fetchMovieAPI } from "./lib/api";

async function getPopularMovies() {
  const { results: popularMovies } = await fetchMovieAPI("/movie/popular", {
    language: "en-US",
    page: 1,
  });

  return popularMovies;
}

export default async function Home() {
  const popularMovies = await getPopularMovies();
  const initialMovie = popularMovies[4];

  return (
    <div>
      <HeroSection initialMovie={initialMovie} popularMovies={popularMovies} />
    </div>
  );
}
