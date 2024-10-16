import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="flex">
      <div className="ml-24 mt-20 w-auto">
        <h2 className="text-xl text-red-600 mb-8">
          Best Destinations Arround The World
        </h2>

        <h1 className="text-regular text-7xl font-semibold font-serif">
          Travel,<span className="underline decoration-red-600">enjoy</span> and
          live a new and full life
        </h1>

        <p className="mt-6 text-slate-500 w-96">
          Built Wicket longer admire do barton itsself do in it. Preferred to
          sportsmen it engrossed listening. park gate sell they they wesr hard
          for the.
        </p>

        <div className="flex">
          <button className="bg-orange-400 py-3 w-40 text-white rounded-lg mt-10">
            Find out more
          </button>
          <FontAwesomeIcon
            icon={faCirclePlay}
            className="h-8 w-8 mt-12 ml-14 text-red-600"
          />
        <span className="mt-14 ml-5 text-slate-500">Play Demo</span>  
        </div>
      </div>
      <div className="mr-28 mt-2">
        <Image width={1600} height={2100} alt="hero" src="/Image.png" />
      </div>
    </section>
  );
};

export default Hero;
