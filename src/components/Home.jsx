import React from "react";
import HeroImage from "@assets/IMG_3457.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="lg:h-screen lg:w-full bg-gradient-to-b from-black via-gray-600 to-blue-950 text-white pt-24"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center h-screen  justify-center px-5 md:flex-row">
        <div className="md:hidden pt-48">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full"
          />
        </div>
        {/* About Me */}
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          {/* Image */}
          <div className="hidden md:block md:max-w-screen-sm pr-5">
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-full md:max-w-screen-2xl"
            />
          </div>
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white py-5">
              I'm a Java Developer and React Enthusiast
            </h2>
            <p className="text-gray-300 text-lg max-w-md text-justify">
              I'm a passionate software developer with expertise in Java and web
              technologies like React, JavaScript, and Tailwind CSS. I excel at
              building and designing software projects and strive to create
              innovative solutions that make a difference.
            </p>

            {/* Button for smooth scrolling */}
            <Link
              to="portofolio"
              smooth
              duration={550}
              className="group text-white w-fit px-6 py-3 my-4
              flex items-center rounded-md bg-gradient-to-r
              from-orange-700 to-orange-300 cursor-pointer hover:from-orange-300 hover:to-orange-700 transition-all duration-300"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
