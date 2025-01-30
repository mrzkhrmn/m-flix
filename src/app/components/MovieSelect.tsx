import React from "react";

export const MovieSelect = ({ popularMovies }) => {
  return (
    <div>
      {popularMovies.map((movie, index) => (
        <Link href={`/${movie.id}`} key={index}>
          <div
            className="w-[200px] h-[300px] bg-no-repeat  relative z-10 "
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>
        </Link>
      ))}
    </div>
  );
};
