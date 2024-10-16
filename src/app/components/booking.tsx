import React from "react";
import Image from "next/image";

const Booking = () => {
  return (
    <section className="flex mt-32 ml-48">
      <main  className="w-auto">
      <h2 className="text-gray-500  mb-5">Easy and Fast</h2>
      <h1 className="text-4xl font-serif font-semibold w-96">
        Book Your Next Trip In 3 Easy Step
      </h1>
  
  {/* first column */}
        <div className="w-96">
          <Image
            width={60}
            height={60}
            alt="choose destination"
            src="/choose.png"
            className="mt-10"
          />
          <h2 className="ml-20 text-gray-600 font-bold relative bottom-12">Choose destination</h2>
          <p className="ml-20 text-gray-500  relative bottom-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit uma tortar
            tempus
          </p>
</div>

      

        {/* second column */}

       <div className="relative bottom-8 w-96">
          <Image
            width={60}
            height={60}
            alt="choose destination"
            src="/make.png"
            className="mt-10"
          />
          <h2 className="ml-20 text-gray-600 font-bold relative bottom-12">Make Payment</h2>
          <p className="ml-20 text-gray-500 relative bottom-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit uma tortar
            tempus
          </p>
        </div>

        {/* thired column */}
        <div className="relative bottom-16 w-96">
          <Image
            width={60}
            height={60}
            alt="choose destination"
            src="/reach.png"
            className="mt-10"
          />
          <h2 className="ml-20 text-gray-600 font-bold relative bottom-12">Reached Airport on Selected Date</h2>
          <p className="ml-20 text-gray-500  relative bottom-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit uma tortar
            tempus
          </p>
      </div>
</main>
        <div className="">
          <Image width={500} height={500} alt = 'trip' src = '/tripgirl.jpg' className="ml-36 mt-36 border border-gray-500 rounded-t-3xl rounded-e-3xl rounded-s-3xl shadow-2xl "/>
        </div>
    
    </section>
  );
};

export default Booking;
