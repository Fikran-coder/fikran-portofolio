import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "portofolio",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      className="flex justify-between items-center w-full h-20 text-white
    fixed bg-gradient-to-r from-slate-900 via-black to-zinc-900 px-4 "
    >
      {/* name part */}
      <div>
        <h1 className="font-signature text-4xl ml-2">M.Fikran</h1>
      </div>

      {/* mapping navbar button */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500
        hover:scale-150 hover:text-orange-300 duration-200"
          >
            <Link to={link} smooth duration={550}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      {/* ternary checking for mobile version and mapping again for mobile version */}
      <div
        onClick={handleClick}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute 
top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-orange-300 duration-200"
            >
              <Link onClick={handleClick} to={link} smooth duration={550}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
