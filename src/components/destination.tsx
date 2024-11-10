import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const Destination = () => {
  return (
    <section className="mt-32">
      <h2 className="text-gray-500 text-center mb-5 ">Top Selling</h2>
      <h1 className="text-center text-5xl font-serif font-semibold">
        Top Destination
      </h1>
      <div className="grid grid-cols-3 mt-16 ml-44">
        {/* first card */}
        <div className="border  w-56 rounded-2xl shadow-white shadow">
          <Image width={230} height={230} alt="Italy" src="/italy.png" className=""/>
          <h3 className="text-gray-500 ml-4 py-3">
            Rome,Italy <span className="ml-16">$5,42k</span>
          </h3>
          <p className="flex">
            <FontAwesomeIcon icon={faLocationArrow} className="h-4 w-4 mt-1 ml-3" /><span className="text-gray-500  ml-3"> 10 Days Trip</span>
          </p>
        </div>

        {/* second card */}

        <div className="border  w-56 rounded-2xl shadow-white shadow">
          <Image width={230} height={230} alt="Italy" src="/london.png" className=""/>
          <h3 className="text-gray-500 ml-4 py-3">
            London, UK <span className="ml-16">$4.2k</span>
          </h3>
          <p className="flex">
            <FontAwesomeIcon icon={faLocationArrow} className="h-4 w-4 mt-1 ml-3" /><span className="text-gray-500  ml-3"> 12 Days Trip</span>
          </p>
        </div>

        {/* thired card */}

        <div className="border  w-56 rounded-2xl shadow-white shadow">
          <Image width={230} height={230} alt="Italy" src="/europe.png" className=""/>
          <h3 className="text-gray-500 ml-4 py-3">
            full Europe <span className="ml-16">$15k</span>
          </h3>
          <p className="flex">
            <FontAwesomeIcon icon={faLocationArrow} className="h-4 w-4 mt-1 ml-3" /><span className="text-gray-500  ml-3"> 28 Days Trip</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Destination;
