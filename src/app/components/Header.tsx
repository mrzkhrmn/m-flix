"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  const currentPath = usePathname();
  return (
    <header className="w-full bg-transparent absolute top-0 left-0 z-30">
      <div className="w-[1440px] mx-auto flex justify-between text-white py-4">
        <Link href={"/"} className="flex items-center gap-2 py-1">
          <h1 className="text-2xl bg-yellow-400 text-black font-semibold px-2 rounded-md uppercase">
            New
          </h1>
          <h1 className="text-2xl text-yellow-400 font-semibold">Watch</h1>
        </Link>
        <div className="flex items-center text-xl gap-12 font-light">
          <Link
            href={"/"}
            className={`border-b ${
              currentPath === "/" ? "border-white" : "border-transparent"
            } py-1 px-2`}
          >
            <h1>Home</h1>
          </Link>
          <Link
            href={"/movies"}
            className={`border-b ${
              currentPath === "/movies" ? "border-white" : "border-transparent"
            } py-1 px-2`}
          >
            <h1>Movies</h1>
          </Link>
          <Link
            href={"/series"}
            className={`border-b ${
              currentPath === "/series" ? "border-white" : "border-transparent"
            } py-1 px-2`}
          >
            <h1>Series</h1>
          </Link>
          <Link
            href={"/my-list"}
            className={`border-b ${
              currentPath === "/my-list" ? "border-white" : "border-transparent"
            } py-1 px-2`}
          >
            <h1>My List</h1>
          </Link>
          <button className="border-l-2 border-gray-400 flex items-center px-4">
            <FaSearch size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};
