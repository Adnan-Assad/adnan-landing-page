import React from "react";
import bannerImg from "../../assets/banner.png";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="md:pt-35 pt-24 text-center space-y-6 md:w-1/2 mx-auto">
        <h1 className="text-3xl lg:text-5xl font-medium lg:leading-tight leading-snug">
          Make your Interior More Minimalistic & Modern{" "}
        </h1>
        <p className="text-xl font-normal lg:w-1/2 mx-auto">
          Turn your room with Adnan into a lot more minimalist and modern with
          ease andd speed.
        </p>
        {/* search field */}
        <div className="relative inline-block z-30">
          <input
            type="text"
            placeholder="Search furniture"
            className="w-full md:w-80 px-6 py-2 bg-white/25 rounded-full border border-gray-300 placeholder:text-white focus:outline-none"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-yellow-600 rounded-full cursor-pointer">
            <FaSearch />
          </div>
        </div>
      </div>
      {/* bottom blur effects.. */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm" />
      {/* hover button for displaying tooltip box */}
    </section>
  );
};

export default Hero;
