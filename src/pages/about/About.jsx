import React from "react";

import aboutBgImg from "../../assets/about-background.jpg";
import Expricences from "../home/Expriences";

const About = () => {
  return (
    <section className="w-full">
      {/* Banner */}
      <div
        className="w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${aboutBgImg})` }}
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-orange-400 mb-4">
            About Us
          </h1>
          {/* <p className="text-lg md:text-xl max-w-2xl mx-auto text-blue-50">
            We are a passionate team committed to delivering the best solutions
            to help your business grow. Our expertise spans across various
            industries, providing innovative and reliable services.
          </p> */}
        </div>
      </div>

      {/* About Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 md:text-lime-500 ">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4 font-semibold">
            Our company started with a mission to provide high-quality services
            and solutions to our clients. We believe in innovation, creativity,
            and excellence in every project we undertake.
          </p>
          <p className="text-gray-600 font-semibold">
            With years of experience and a dedicated team, we ensure every
            client achieves success. Your satisfaction is our top priority, and
            we strive to exceed expectations every time.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={aboutBgImg}
            alt="About Us"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Expricences Component */}
      <Expricences />
    </section>
  );
};

export default About;
