import React from "react";
import ArrowLine from "../components/ArrowLine";
import Button from "../components/Button";


const Home: React.FC = () => {
    return (

        <>

            <main className="min-h-screen flex items-center justify-center  bg-cover bg-center px-2">
                <div className="w-full flex flex-col items-center">
                    <div className="p-6 sm:p-10 h-auto sm:h-[453px] w-full max-w-lg sm:max-w-xl md:max-w-2xl rounded-2xl bg-[#C7C8C9] backdrop-blur-lg shadow-xl flex flex-col items-center text-center">
                        <div>
                            <img src="avatarYo/ImgYo.png" alt="Agui Martínez"
                                className="w-24 h-24 sm:w-36 sm:h-36 rounded-full mx-auto border-4 border-white shadow-lg" />
                        </div>
                        <h1 className="mt-5 sm:mt-7 text-3xl sm:text-6xl font-medium drop-shadow-lg">
                            Hi, I´m Agui Martínez
                        </h1>
                        <p className="mt-2 sm:mt-4 text-black font-thin text-xl sm:text-4xl">
                            Frontend Developer
                        </p>
                        <div className="mt-4 sm:mt-8">
                            <ArrowLine />
                        </div>
                    </div>
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

export default Home;