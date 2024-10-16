import React from "react";
import Image from "next/image";

const Category = () => {
  return (
    <section className="mt-24">
      <h2 className="text-gray-500 text-center mb-6 uppercase">Category</h2>
      <h1 className="text-center text-5xl font-serif font-semibold">
        We Offer Best Services
      </h1>

      {/* main div of images */}
      <div className="grid grid-cols-4 mt-20 pl-28 pr-28">
        {/* first image */}
        <div className= "grid place-items-center">
          <Image width={80} height={80} alt="antina" src="/antina.png" className=""/>
          <h2 className="text-xl mt-3">Calculated Weather</h2>
          <p className=" w-40 mt-3 text-gray-600 text-center">Built Wicket longer admire do barton vanity itself do in it</p>
        </div>

        {/* second image */}

        <div className="grid place-items-center mb-4">
          <Image width={120} height={120} alt="antina" src="/plane.png" className=""/>
          <h2 className="text-xl mt-3">Best Flights</h2>
          <p className="w-40 mt-5 text-gray-600 text-center">Engrossed listening park gate self they west hard for the</p>
        </div>

        {/* thired image */}

        <div className="grid place-items-center">
          <Image width={80} height={80} alt="antina" src="/mike.png" className=""/>
          <h2 className="text-xl mt-3">Local Events</h2>
          <p className="w-40 mt-3 text-gray-600 text-center">
            Barton vanity itself do in it. Prefered to men it engrossed
            listening
          </p>
        </div>

        {/* fourth image */}

        <div className="grid place-items-center">
          <Image width={80} height={80} alt="antina" src="/screw.png" className="" />
          <h2 className="text-xl mt-3">Cutomization</h2>
          <p className="w-48 mt-3 text-gray-600 text-center">
            We delivered outsourced avidation services for military customer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Category;
