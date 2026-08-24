import React from "react";
import ArrowLine from "../components/ArrowLine";
import Button from "../components/Button";
import BackgroundGray from "../components/BackgroundGray";


const About: React.FC = () => {
    return (

        <>

            <main className="min-h-screen flex items-center justify-center  bg-cover bg-center px-2">
                <div className="w-full flex flex-col items-center justify-center">
                 <BackgroundGray>
                        <h1 className=" text-xl sm:text-3xl font-medium drop-shadow-lg text-gray-200">
                            Hi, I´m Agui Judith Martínez Gutiérrez
                        </h1>
                        <p className="mt-2 sm:mt-2  font-thin text-xl sm:text-xl text-gray-200">
                            Frontend Developer
                        </p>
                        <div className="mt-2 sm:mt-2 flex items-center justify-center ">
                            <ArrowLine />
                        </div>
                        {/* Texto informativo sobre mi */}
                        <div>
                            <p className="mt-4 sm:mt-10 text-black font-thin text-xl sm:text-xl">
                               Passionate and proactive developer with experience creating dynamic and responsive user interfaces.
                                I stand out for my ability to lead teams, optimize development processes, and apply agile methodologies that guarantee the delivery of high-quality code.
                                My goal is to contribute my technical expertise and leadership to achieve the team's goals and exceed project expectations.
                            </p>
                        </div>


                   </BackgroundGray>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 -translate-y-4 sm:-translate-y-6 w-full mt-6 sm:mt-0">
                        <Button texto="COURSES" link="link/to/courses" />
                        <Button texto="PROJECTS" link="link/to/projects" />
                        <Button texto="TOOLS" link="link/to/tools" />
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;