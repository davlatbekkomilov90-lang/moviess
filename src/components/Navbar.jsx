import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-[#0D0D10] flex justify-center  border-b-[3px] border-gray-600">
      <nav className="w-full fixed  z-50  bg-[#0D0D10]   max-w-365 p-8 m-auto flex justify-between">
        <h2 className="text-white font-bold text-2xl tracking-tighter">
          KINO <span className="text-[#E7B84C]">KATALOGI</span>
        </h2>
        <div className="flex gap-2">
          <Link
            to={"/"}
            className="text-white px-4 rounded-[9px] cursor-pointer py-2 bg-[#252018]"
          >
            Bosh sahifa
          </Link>
          <Link
            to={"/FavoritePage"}
            className="text-white px-4 rounded-[9px] cursor-pointer py-2 bg-[#252018]"
          >
            <i className="fa-solid text-amber-400 fa-star"></i> Sevimlilar
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
