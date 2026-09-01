import React from "react";
import ArrowLine from "../components/ArrowLine";
import Button from "../components/Button";
import BackgroundGray from "../components/BackgroundGray";

const About: React.FC = () => {
  return (
    <>
      <main className="pt-20 md:pt-44 flex items-center justify-center  bg-cover bg-center">
        <div className=" w-full max-w-5xl relative flex flex-col items-center justify-center  px-4  md:px-0">
          <BackgroundGray>
            <div className="flex flex-col items-center justify-center p-8 sm:p-10 ">
              <h1 className=" text-center text-xl sm:text-3xl font-medium drop-shadow-lg text-gray-200 ">
                 I´m Agui Judith Martínez Gutiérrez
              </h1>
              <p className="mt-2 sm:mt-2  font-thin text-xl sm:text-xl text-gray-200">
                Frontend Developer
              </p>
              <div className="mt-2 sm:mt-2 flex items-center justify-center ">
                <ArrowLine />
              </div>
              {/* Texto informativo sobre mi */}
              <div className=" pb-8 text-justify mt-4 sm:mt-10 text-gray-400 font-normal text-sm md:text-base">
                <p>
                  Frontend-focused Full-Stack Developer with experience building
                  responsive web applications using JavaScript/TypeScript,
                  React, Next.js, and Vue/Nuxt.js. Experienced in creating
                  reusable, component-based interfaces, managing relational
                  databases, and implementing unit tests. Proficient in Node.js,
                  Express, PostgreSQL, Prisma, Git, and Agile methodologies,
                  applied across web projects and collaborative development
                  environments.
                </p>
                <p className="mt-4 sm:mt-6">
                  I like simple things—for example, drinking Americano coffee,
                  listening to music, and watching movies—and, most importantly,
                  I love my dogs and my family.
                </p>
              </div>
            </div>
          </BackgroundGray>
          <div
            className=" absolute z-30 -bottom-[20px] md:-bottom-[15px] left-1/2 -translate-x-1/2 flex flex-wrap justify-center items-center
          gap-5 sm:gap-8   md:gap-16  w-full"
          >
            <Button texto="COURSES" link="/courses" />

            <Button texto="PROJECTS" link="/projects" />

            <Button texto="TOOLS" link="/tools" />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
