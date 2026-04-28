import React from "react";
import MovieCard from "../components/MovieCard";
import { MOVIES } from "../data/Movies";
import { useState } from "react";

function HomePages() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = MOVIES.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full   max-w-365 p-8 m-auto">
      <div className="pt-28">
        <h1 className="text-white font-bold text-6xl tracking-[-5px] scale-y-110">
          KINO <span className="text-[#E7B84C]">DUNYOSI</span>
        </h1>
        <p className="text-[#4D5552] mt-8">
          Eng yaxshi filmlarni kashf eting va sevimlilarga saqlang
        </p>
        <div className="flex text-[#4D5552] items-center mt-10 gap-3 bg-[#1E1E28] w-full max-w-110 p-3 rounded-2xl">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Filmnomini qidiring"
            className="outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div>
        <h2 className="my-10 tracking-wider text-2xl text-[#4D5552]">
          Barcha filmlar
        </h2>
        <MovieCard movies = {filteredMovies}/>
      </div>
    </div>
  );
}

export default HomePages;
