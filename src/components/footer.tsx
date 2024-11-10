import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faSquareInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <section className="mt-40 flex gap-24 ml-60">
    <div className="">
        <table className="border-separate border-spacing-1">
          <tr className="">
            <th className="text-3xl text-start font-semibold">Jadoo.</th>
            <th className="text-xl">Company</th>
            <th className="text-xl">Contact</th>
            <th className="text-xl">More</th>
          </tr>

{/* raw */}
          <tr>
            <td className="text-gray-500 w-56">get your trip in minute get full control for much longer</td>
            <td className="text-gray-500">About</td>
            <td className="text-gray-500 ml-10">Help/FAQ</td>
            <td className="text-gray-500 ml-20">Airlinefees</td>
          </tr>

          {/* raw 2 */}
          <tr>
          <td></td>  
            <td className="text-gray-500">Careers</td>
            <td className="text-gray-500 ml-10">Press</td>
            <td className="text-gray-500 ml-12">Airlines</td>
          </tr>

          {/* raw 3 */}
          <tr>
           <td></td> 
            <td className="text-gray-500 ">Mobile</td>
            <td className="text-gray-500 ">Affilates</td>
            <td className="text-gray-500 ml-12">Low fare tips</td>
          </tr>
        </table>
    </div>

  
    <div className="">
      <div className="flex gap-7">
      <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
      <FontAwesomeIcon icon={faSquareInstagram} className="w-7 h-7 text-pink-400" />
      <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 flex" />
      </div>
      <p className="text-gray-500 mt-7">Discover our app</p>
      <Image width={200} height={200} src="/Discover.png" alt="app-button" className="mt-6"/>
      </div>     
    </section>
  );
};

export default Footer;
