import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  const links = [
    {
      id: 0,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/muhammad-fikran-336a57221/",
    },
    {
      id: 1,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Fikran-coder?tab=repositories",
    },
    {
      id: 2,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:muhammadfikranjobs@gmail.com",
    },
    {
      id: 3,
      child: (
        <>
          Instagram <AiFillInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/muhammadfikran07/",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "",
      download: true,
    },
  ];

  return (
    <footer className="bg-gray-800 via-gray-900 text-white py-8 md:hidden">
      <div className="container px-4 mx-auto flex flex-col justify-center items-center">
        {/* Footer content */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-bold">Connect with me:</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 items-center space-x-4 mt-2">
          {links.map(({ id, href, child, download }) => (
            <a
              key={id}
              href={href}
              className="text-white hover:text-orange-300 hover:scale-110 transition duration-300"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {/* Replace with your social media icon (e.g., Font Awesome) */}
              <button className="flex flex-col items-center">{child}</button>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
