import React from 'react'
import { MOVIES } from '../data/Movies'
import { Link } from 'react-router-dom';

function MovieCard() {
  
  return (
    <div className="grid  grid-cols-[repeat(auto-fit,minmax(205px,1fr))]  gap-5 ">
      {MOVIES.map((item) => {
        return (
          <Link
            to={`/DetailPage/${item.id}`}
            className="bg-[#1E1E28] transition-transform duration-300 hover:-translate-y-2 hover:border hover:border-amber-400 rounded-[10px]"
            key={item.id}
          >
            <div className="flex h-56 justify-center items-center relative ">
              <i className="fa-solid fa-star absolute top-5 left-4 cursor-pointer text-[18px]"></i>
              <div className="absolute top-4 right-4 flex items-center gap-2 text-[#FED471] bg-[#09090C] px-2 py-1 rounded-2xl border border-[#FED471]">
                <i className="fa-solid fa-star cursor-pointer text-[10px] "></i>
                <h2 className="">{item.rating}</h2>
              </div>
              <span className="text-[52px]">{item.emoji}</span>
            </div>
            <div className="p-5 bg-[#14141B] rounded-b-[10px] flex flex-col gap-2">
              <h2 className="text-[#E7E5DE]">{item.title}</h2>
              <div className="flex gap-2 text-[12px] text-[#7C7A72]">
                <p>{item.year}</p>
                <p>{item.duration}</p>
              </div>
              <span className="text-[#7C7A72]">{item.director}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default MovieCard
