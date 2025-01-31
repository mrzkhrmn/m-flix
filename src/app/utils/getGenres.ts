export async function getGenres() {
  const apiKey = process.env.API_KEY;
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    {
      method: "GET",
      headers,
    }
  );
  const data = await res.json();
  return data.genres as { id: number; name: string }[];
}
