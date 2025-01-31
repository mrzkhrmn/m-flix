"use client";

import React, { useRef, useState } from "react";
import { Movie } from "../types/movie";
import MovieGenres from "./MovieGenres";
import { FaPlay } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

interface HeroSectionProps {
  initialMovie: Movie;
  popularMovies: Movie[];
}

export const HeroSection = ({
  initialMovie,
  popularMovies,
}: HeroSectionProps) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie>(initialMovie);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(4);
  const containerRef = useRef(null);

  const backdropUrl = `https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`;

  const handleSelectMovie = (i: number, movie: Movie) => {
    if (i !== selectedMovieIndex) {
      setSelectedMovieIndex(i);
      setSelectedMovie(movie);
      scroll(i);
    }
  };

  const scroll = (targetIndex: number) => {
    const indexDifference = targetIndex - selectedMovieIndex;

    const movieWidth = 225;
    const scrollAmount = indexDifference * movieWidth;

    const newScrollPosition = containerRef.current.scrollLeft + scrollAmount;
    containerRef.current.scrollLeft = newScrollPosition;

    setSelectedMovieIndex(targetIndex);
    setSelectedMovie(popularMovies[targetIndex]);
  };

  return (
    <div
      className="w-full min-h-screen bg-no-repeat  relative z-10 "
      style={{
        backgroundImage: `url(${backdropUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
      <div className="w-full relative  h-screen mx-auto z-40  flex flex-col">
        <div className="w-[1440px] mx-auto mt-40 h-[345px]">
          <h1 className="text-5xl text-white font-semibold">
            {selectedMovie.title}
          </h1>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex  items-center gap-2">
              <p className="text-black bg-yellow-400 font-bold px-1 ">IMDB</p>
              <p className="text-white text-lg font-light">
                {selectedMovie.vote_average}{" "}
                <span className="text-gray-400 font-light">
                  ({selectedMovie.vote_count})
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-white text-lg font-light">
                | {selectedMovie.release_date.slice(0, 4)} |
              </p>
              <p className="text-white text-lg font-light">
                1 hour 55 minutes |
              </p>
              <MovieGenres genreIds={selectedMovie.genre_ids} />
            </div>
          </div>
          <p className=" text-white mt-4 w-[40%] line-clamp-4  leading-7 text-lg">
            {selectedMovie.overview}
          </p>
          <div className="flex items-center gap-4 mt-4">
            <button className="border border-gray-500 text-gray-300 text-lg py-2 w-[150px] rounded-md font-semibold">
              Watch Trailer
            </button>
            <button className="border border-yellow-500 bg-yellow-400 hover:bg-yellow-500 transition duration-200 text-black text-lg py-2 w-[150px] flex items-center justify-center gap-2 rounded-md font-semibold">
              <FaPlay />
              Watch Now
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 ml-12">
          <button
            className="text-white bg-gray-800 p-2"
            onClick={() => scroll(selectedMovieIndex - 1)}
          >
            <FaArrowLeft size={24} />
          </button>
          <button
            className="text-white bg-gray-800 hover:bg-gray-900 p-2"
            onClick={() => scroll(selectedMovieIndex + 1)}
          >
            <FaArrowRight size={24} />
          </button>
        </div>
        <div
          className="flex  items-start gap-4  overflow-hidden  scroll-smooth  flex-col mt-2"
          ref={containerRef}
        >
          <div className="flex  items-start gap-4 " ref={containerRef}>
            {popularMovies.map((movie, index) => (
              <button
                onClick={() => handleSelectMovie(index, movie)}
                key={index}
              >
                <div
                  className={`${
                    index === selectedMovieIndex
                      ? "opacity-100 scale-110"
                      : "opacity-50 scale-90"
                  } w-[200px] h-[300px] bg-no-repeat  relative z-10 transition duration-200`}
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                  }}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
