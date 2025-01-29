import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header>
      <Link href={"/"}>
        <h1>M-Flix</h1>
      </Link>
    </header>
  );
};
