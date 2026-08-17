import React from "react";
import ArrowLine from "../components/ArrowLine";
import Button from "../components/Button";
import BackgroundGray from "../components/BackgroundGray";


const Home: React.FC = () => {
    return (

        <>

            <main className="min-h-screen flex items-center justify-center  bg-cover bg-center px-2 ">
                <div className="w-full flex flex-col items-center ">
                    <BackgroundGray>
                        <h1 className="mt-7  text-3xl sm:text-6xl font-saira  font-semibold tracking-wider drop-shadow-lg">
                            Hi, I´m Agui Martínez
                        </h1>
                        <p className="mt-2 sm:mt-4 text-black font-saira font-light text-xl sm:text-4xl">
                            Frontend Developer
                        </p>
                        <div className="mt-4 sm:mt-8">
                            <ArrowLine />
                        </div>
                    </BackgroundGray>
                    <div className="flex  flex-row justify-center items-center 
                     gap-8 md:gap-24 -translate-y-4  w-full mt-2 md:mt-0 ">
                        <Button texto="COURSES" link="link/to/courses" />
                        <Button texto="PROJECTS" link="/projects" />
                        <Button texto="TOOLS" link="link/to/tools" />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;