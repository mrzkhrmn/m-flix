import { getGenres } from "./getGenres";

export async function getGenreNames(genreIds: number[]) {
  const genres = await getGenres();
  const genreMap = new Map(genres.map((genre) => [genre.id, genre.name]));
  return genreIds.map((id) => genreMap.get(id)).filter(Boolean) as string[];
}
