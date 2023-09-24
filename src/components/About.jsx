import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen pt-40 text-justify h-screen text-white bg-gradient-to-b from-blue-950 to-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className=" text-xl mt-20">
          Greetings! I'm Fikran, a Java backend developer who finds joy in the
          world of programming. My specialization lies in Java, and I'm
          fortunate to have experience with tools like Spring Boot and ZK
          Framework, which I use to create applications that are both functional
          and user-friendly. Working with databases, including MySQL and
          PostgreSQL, is a skill I've honed, using tools like JDBC and MyBatis
          to ensure smooth data connectivity.
        </p>
        <br />
        <p className=" text-xl">
          The technology landscape fascinates me, and I'm always eager to learn
          new things. This curiosity drives me to keep growing and to seek out
          innovative solutions to challenges. Being part of a team is important
          to me, as I value collaboration and effective communication. I believe
          that working together brings out the best in everyone.
        </p>
        <br />
        <p className="text-xl">
          My goal is to write code that not only meets requirements but also
          lays the groundwork for scalable and maintainable software. If you're
          in search of someone who's dedicated, open-minded, and committed to
          contributing their best, I'd be thrilled to explore the possibility of
          joining your team.
        </p>
      </div>
    </div>
  );
};

export default About;
