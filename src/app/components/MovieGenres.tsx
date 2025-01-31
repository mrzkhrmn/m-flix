"use client";

import { useEffect, useState } from "react";
import { getGenreNames } from "../utils/getGenreNames";

interface MovieGenresProps {
  genreIds: number[];
}

export default function MovieGenres({ genreIds }: MovieGenresProps) {
  const [genreNames, setGenreNames] = useState<string[]>([]);

  useEffect(() => {
    getGenreNames(genreIds).then((names) => setGenreNames(names));
  }, [genreIds]);

  return <p className="text-white font-light">{genreNames.join(", ")}</p>;
}
