import React from "react";
import { Link } from "react-router-dom";
import { MOVIES } from "../data/Movies";
import { useParams } from "react-router-dom";

function DetailPages() {
  let { id } = useParams();
  let movie = MOVIES.find((item) => item.id === Number(id));
  console.log(movie);

  return (
    <div className="w-full max-w-365 m-auto mt-20 p-8">
      <Link
        to={"/"}
        className="text-[#7B7971] bg-[#1E1E28] hover:text-[#bcbbb6] p-4 rounded-2xl hover:border"
      >
        <i className="fa-solid fa-arrow-left-long text-[15px]"></i> Orqaga
      </Link>
      <div className="mt-20 flex gap-15">
        <div className="w-full rounded-2xl flex justify-center items-center max-w-90 h-135 bg-[#1E1E28]">
          <span className="text-6xl">{movie.emoji}</span>
        </div>
        <div className="w-full">
          <div className="flex gap-4 font-bold">
            <button className="bg-[#1C1914] font-bold text-[#c0a314] px-4 py-1.5 rounded-2xl border border-amber-300">
              {movie.genre[0]}
            </button>
            <button className="bg-[#1C1914] font-bold text-[#c0a314] px-4 py-1.5 rounded-2xl border border-amber-300">
              {movie.genre[1]}
            </button>
          </div>
          <h2 className="text-[#E7E5DE] text-[64px] font-bold mt-4">
            {movie.title}
          </h2>
          <div className="flex gap-3 mt-5 text-[20px] font-bold border-b w-ful pb-5 border-gray-600">
            <span>★ {movie.rating}</span>
            <span>📅 {movie.year}</span>
            <span>⏱ {movie.duration}</span>
            <span>🌍 {movie.country}</span>
          </div>
          <h2 className="text-[#7B7970] mt-5">QISQACHA MAZMUN</h2>
          <h2 className="text-[#b1b1af] mt-5 text-2xl line-clamp-3">{movie.desc}</h2>
          <div className="flex gap-2 mt-7 text-[20px]">
            <span className="text-[#7b7970]">Rejissiyor:</span>
            <h2>{movie.director}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPages;
