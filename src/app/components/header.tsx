import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex py-8 ">
      {/* logo */}
      <div className=" w-60 ml-24 font-semibold text-3xl mt-1">
        <h1>
          Jad<span className="text-orange-500">o</span><span className="text-orange-500">o</span>
        </h1>
      </div>

      {/* links */}
      
        <nav>
          <ul className="flex gap-16 text-lg ml-36 mt-2">
            <li className="hover:text-orange-300">
              <Link href="">Destination</Link>
            </li>
            <li className="hover:text-orange-300">
              <Link href="">Hotels</Link>
            </li>
            <li className="hover:text-orange-300">
              <Link href="">Flights</Link>
            </li>
            <li className="hover:text-orange-300">
              <Link href="">Bookings</Link>
            </li>
          </ul>
        </nav>
     
      {/* login */}
      <div className="flex  w-48 justify-center py-2 text-lg ml-8 mr-2">
        <h2 className="ml-11">Login</h2>
      </div>
     <div>
        <button className="bg-orange-300 rounded-xl py-2 w-28 text-lg">sign up</button>
      </div>
    </header>
  );
}
