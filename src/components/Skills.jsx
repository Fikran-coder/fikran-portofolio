import React from "react";
// import html from "@assets/html.png";
// import css from "@assets/css.png";
import figma from "@assets/figma.png";
// import github from "@assets/github.png";
import gitlab from "@assets/gitlab.png";
import java from "@assets/java.png";
import reactImage from "@assets/react.png";
// import javascript from "@assets/javascript.png";
import mysql from "@assets/mysql.png";
import postgre from "@assets/postgre.png";
import spring from "@assets/spring.png";
import tailwind from "@assets/tailwind.png";
import zkoss from "@assets/zkoss.png";
import mybatis from "@assets/mybatis.png";

const Skills = () => {
  const exp = [
    // {
    //   id: 1,
    //   src: html,
    //   title: "HTML",
    //   style: "shadow-orange-500",
    // },
    // {
    //   id: 2,
    //   src: css,
    //   title: "CSS",
    //   style: "shadow-blue-500",
    // },
    {
      id: 3,
      src: java,
      title: "Java",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: figma,
      title: "Figma",
      style: "shadow-blue-500",
    },

    {
      id: 5,
      src: gitlab,
      title: "Gitlab",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-500",
    },
    // {
    //   id: 7,
    //   src: github,
    //   title: "Github",
    //   style: "shadow-white",
    // },
    // {
    //   id: 8,
    //   src: javascript,
    //   title: "Javascript",
    //   style: "shadow-yellow-500",
    // },
    {
      id: 9,
      src: mysql,
      title: "MySql",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: postgre,
      title: "Postgre",
      style: "shadow-blue-500",
    },
    {
      id: 11,
      src: spring,
      title: "Spring",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 13,
      src: zkoss,
      title: "Zkoss",
      style: "shadow-blue-500",
    },
    {
      id: 14,
      src: mybatis,
      title: "MyBatis",
      style: "shadow-white",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b pt-40 from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-7 text-center py-8 px-4 sm:px-0">
          {exp.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-5 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
