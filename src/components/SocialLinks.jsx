import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const SocialLinks = () => {
  const links = [
    {
      id: 0,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/muhammad-fikran-336a57221/",
      style: "rounded-tr-md",
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
      href: "/Muhammad Fikran - Resume Q1 2025.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-r from-gray-500 to-gray-800  ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full
           text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
