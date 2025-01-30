export async function getGenres() {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzU3NGI2NDc1NGYxOGFmMjU1MmI1NjYxMTEwODgyMyIsIm5iZiI6MTY4ODc2MzkyMC42Mywic3ViIjoiNjRhODdlMTBiNjg2YjkwMGFmOWQwMDdkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.upabhUxRrrDpDwH1GIBNjKZ6Xqxq87yNE4zOfRUiY4I",
    },
  });
  const data = await res.json();
  return data.genres as { id: number; name: string }[];
}
