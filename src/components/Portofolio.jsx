import React from "react";
import clusterCovid from "@assets/clusterCovid.png";
import augmentedReality from "@assets/augmentedReality.jpg";
import mobileAttendanceApp from "@assets/mobileAttendanceApp.png";
import loyalty from "@assets/loyalty.png";
import jagakarsaWeb from "@assets/jagakarsaWeb.png";
import biroPsikologiHijau from "@assets/biroSpikologiHijau.png";

const Portofolio = () => {
  const portfolios = [
    {
      id: 1,
      src: clusterCovid,
      about:
        "Clustering data Covid of the world in 2021, using K-Means algorithm and using Python language programming",
    },
    {
      id: 2,
      src: augmentedReality,
      about:
        "Making an augmented Reality using C# and Unity editor and Blender as 3D object Rendering, a mobile android App ",
    },
    {
      id: 3,
      src: mobileAttendanceApp,
      about: "Making a Mobile app Attendance Design using Figma",
      href: "https://www.figma.com/file/EixhbzZwVMMscG9aKWO9KS/Mobile-Attendance-Design-app?type=whiteboard&node-id=0%3A1&t=We6jbayf3kzAy9fI-1",
    },
    {
      id: 4,
      src: loyalty,
      about: "Making a Wireframe using Figma for a Loyalty web applications",
      href: "https://www.figma.com/file/7EOEpcvHMszCLvyptUHOw5/Untitled?type=design&node-id=0%3A1&mode=design&t=OKxoJGIIErdtUrO6-1",
    },
    {
      id: 5,
      src: jagakarsaWeb,
      about:
        "Created a Company Profile Website for Jagakarya Bhakti Abadi. Using Wordpress, CMS",
      href: "https://jagakaryabhaktiabadi.com/",
    },
    {
      id: 6,
      src: biroPsikologiHijau,
      about:
        "Performed maintenance on the Website for Biro Psikologi Hijau. using Wordpress, CMS",
      href: "https://biropsikologihijau.com/",
    },
  ];
  return (
    <div
      name="portofolio"
      className=" md:h-screen bg-gradient-to-b pt-40 from-gray-800 to-black w-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, about, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 py-4 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-[250%]"
              />

              <div className="flex items-center justify-center text-justify">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className=" hover:text-orange-300 mx-4 my-4 hover:scale-110 duration-100"
                >
                  {about}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
