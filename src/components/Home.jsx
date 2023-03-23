import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <pc className="text-green-600">Hi, my name is</pc>
        <h1 className="text-4xl sm:ext-7xl font-bold text-[#ccd6f7]">
          Rishabh Vaidya
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] ">
          I'm a Web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a recent graduated student majoring in Computer Information
          Technology with a minor in Mathematics and speciziling in software
          development. I'm focused on web-applications, data Science/Analyst,
          and Software Quality Assurance.
        </p>
        <div>
          <button
            onClick={handleClick}
            className="text-[#ccd6f7] group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600"
          >
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>
            <span
              onClick={handleClick}
              className="group-hover:rotate-90 duration-300"
            >
              <Link to="projects" smooth={true} duration={500}>
                <HiArrowNarrowRight className="ml-2" />
              </Link>
            </span>
          </button>
        </div>
      </div>
      ;
    </div>
  );
};

export default Home;
