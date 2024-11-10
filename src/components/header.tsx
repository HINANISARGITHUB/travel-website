import React from "react";
import Link from "next/link";


export default function Header() {
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
          <ul className="flex gap-12 text-lg ml-40 mt-2">

          <li className="hover:text-orange-300">
              <Link href= "/">Home</Link>
            </li>

            <li className="hover:text-orange-300">
              <Link href= "/destination">Destination</Link>
            </li>
            <li className="hover:text-orange-300">
              <Link href="/hotels">Hotels</Link>
            </li>
            <li className="hover:text-orange-300">
              <Link href="/flight">Flights</Link>
            </li>
            <li className="hover:text-orange-300">
              <Link href="/bookings">Bookings</Link>
            </li>
          </ul>
        </nav>
     
      {/* login */}
      <div className="flex  w-48 justify-center py-2 text-lg ml-4 mr-2">
        <h2 className="ml-11">Login</h2>
      </div>
     <div>
        <button className="bg-orange-300 rounded-xl py-2 w-24 text-lg">sign up</button>
      </div>
    </header>
  );
}
