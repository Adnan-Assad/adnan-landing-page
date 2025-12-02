import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBagShopping, FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
];

const NavItems = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8 ">
      {navItems.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-pink-700 font-bold" : "hover:text-pink-500"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <div>
      <header
        className={`fixed top-0 left-0 right-0 z-70 transition duration-300 ease-in-out  ${
          isScrolled ? "bg-lime-500 shadow-md" : " bg-transparent text-white"
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center py-6 px-4  ">
          {/* logo */}
          <Link to="" className="font-bold">
            Adnan
          </Link>
          {/* hamburger menu for mobile */}

          <div
            onClick={toggleMenu}
            className="md:hidden text-xl hover:text-primary"
          >
            {isOpenMenu ? null : <FaBars />}
          </div>

          {/* Destop menu items */}
          <div className="hidden md:flex">
            <NavItems />
          </div>
          {/* mobile menu items */}

          <div
            className={` fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-70 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${
              isOpenMenu ? "translate-x-0" : "-translate-x-full"
            } md:hidden `}
          >
            <div
              className="absolute top-4 right-4 text-xl cursor-pointer"
              onClick={toggleMenu}
            >
              <FaTimes />
            </div>

            <NavItems toggleMenu={toggleMenu} />
          </div>

          {/* cart icon */}
          <div className="hidden md:block cursor-pointer relative">
            <FaBagShopping className="text-xl" />
            <sup className="absolute top-0 -right-3 bg-amber-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
              0
            </sup>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
