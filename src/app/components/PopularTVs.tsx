import { fetchMovieAPI } from "../lib/api";
import { TV, TVResponse } from "../types/tv";

export const PopularTVs = async () => {
  const { results: popularTVs } = await fetchMovieAPI<TVResponse>(
    "/tv/popular",
    {
      language: "en-US",
      page: 1,
    }
  );

  return (
    <div>
      {popularTVs.map((tv: TV) => (
        <h1 key={tv.id}>{tv.name}</h1>
      ))}
    </div>
  );
};
