import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Rishabh, nice to meet you. Please check out my website and
              let me know if you have any questions.
            </p>
          </div>
          <div>
            <p>
              I am young, energetic, and disciplined undergrad student, freshly
              graduated from Minnesota State University, Mankato. Creative,
              Problem-Solving, Time Management, Decision making, and
              Multitasking ability. Highly motivated with a willingness to learn
              and strong organizational skills. Looking for work experience in
              Front-end development, Quality Assurance, and Data Science/Analyst
              to improve and contribute my skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
