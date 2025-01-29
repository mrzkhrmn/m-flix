import { PopularMovies } from "./components/PopularMovies";
import { PopularTVs } from "./components/PopularTVs";

export default function Home() {
  return (
    <div>
      <PopularMovies />
      <PopularTVs />
    </div>
  );
}
