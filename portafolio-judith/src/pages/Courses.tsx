import React from "react";
import Button from "../components/Button";

import BackgroundGray from "../components/BackgroundGray";
import { motion } from "motion/react";
import Course from "../components/Course";

const Courses: React.FC = () => {
  const courses = [
    {
      image: "/Courses/IA.png",
      pdf: "/Courses/IA.pdf",
      title: "Introduction to Artificial Intelligence",
    },

    {
      image: "/Courses/Unity.png",
      pdf: "/Courses/Unity.pdf",
      title: "Unity y C# Fundamentals: VideoGame Development 2D",
    },
  ];

  return (
    <>
      <section className="min-h-screen flex items-center justify-center ">
        <div className=" relative flex flex-col    ">
          <BackgroundGray className="">
            <div className="mt-4 p-6 pb-20 md:pb-32 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-10 ">
              {courses.map((course) => (
                <Course
                  key={course.title}
                  image={course.image}
                  pdf={course.pdf}
                  title={course.title}
                 
                />
              ))}
            </div>
          </BackgroundGray>
          <motion.div
            initial={{ y: 60 }}
            animate={{ y: -20 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            layoutId="course-button"
            className="z-30 absolute h-8 w-24  md:h-12 md:w-32 bg-[#6C958D] rounded-2xl flex items-center justify-center
            text-white text-sm md:text-base font-semibold shadow-lg md:left-60 left-2
 "
          >
            COURSES
          </motion.div>
          <div
            className="
             absolute
            z-30

            -bottom-6
            sm:bottom-[40px]
            md:bottom-[-14px]

            left-1/2
            -translate-x-1/2

            flex
            flex-wrap
            justify-center
            items-center

            gap-4
            sm:gap-8
            md:gap-16

            w-full
          "
          >
            <button
              className="  h-10
          w-24
          md:h-12
          md:w-32"
            />
            <Button texto="PROJECTS" link="/projects" />
            <Button texto="TOOLS" link="/tools" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
