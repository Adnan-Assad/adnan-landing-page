import React from "react";
import contactBgImg from "../../assets/contact-background.jpg";
import Materials from "../home/Materials";
import Testimonials from "../home/Testimonials";

const Contact = () => {
  return (
    <section className="w-full">
      {/* Banner */}
      <div
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${contactBgImg})` }}
      >
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-600">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-shadow-white">
            Have questions or want to work with us? Fill out the form below and
            we get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Materials Section */}
      <Materials />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Form */}
          <form className="flex-1 bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col">
                <label className="mb-1 text-gray-600 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="mb-1 text-gray-600 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-600 font-medium">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-600 font-medium">Message</label>
              <textarea
                rows="6"
                placeholder="Type your message here..."
                className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-600 text-white font-semibold py-3 rounded-lg hover:bg-pink-500 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex-1 bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 md:text-lime-500">
              Contact Info
            </h3>
            <p className="text-gray-600 font-semibold">
              You can also reach us via the following contact details:
            </p>
            <div className="flex flex-col gap-4 mt-4 text-gray-700">
              <div>
                <strong>Email:</strong> adnnn336@gmail.com
              </div>
              <div>
                <strong>Phone:</strong> +8801724897474
              </div>
              <div>
                <strong>Address:</strong> 21/3 Wari, Dhaka, Bangladesh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
