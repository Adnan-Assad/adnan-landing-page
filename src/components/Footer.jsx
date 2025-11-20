import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-50 text-black dark:bg-gray-800 dark:text-white pt-2 pb-5">
      <div className=" w-12/12 container mx-auto py-6 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:px-8">
        {/* logo and details */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold">
            <Link to="/">Adnan</Link>
          </h2>
          <p className="md:mr-12">
            The advantage of hiring a workspace with us is that givees you
            comfortable service andd all-around facilities.
          </p>
        </div>
        {/* Service div */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-cyan-500">
                Email Marketing
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-cyan-500">
                Campaigns
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-cyan-500">
                {" "}
                Branding
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Furniture</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-green-500">
                Beds
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-green-500">
                Chair
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-green-500">
                {" "}
                All
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow US</h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-green-500 flex items-center space-x-2"
              >
                <FaFacebookF />
                <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-green-500 flex items-center space-x-2"
              >
                <FaTwitter />
                <span>Twitter</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-green-500 flex items-center space-x-2"
              >
                {" "}
                <FaLinkedin />
                <span>Linked In</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* copyright section */}
      <div className="w-11/12 container mx-auto mb-5  flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black dark:bg-gray-800 dark:text-white border-t border-gray-400 pt-4">
        <p>Copyright &copy; {new Date().getFullYear()} By Adnan</p>
        <div className="flex items-center gap-4">
          <Link to="/">Terms & Contitions</Link>
          <Link to="/">Privacy & Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
