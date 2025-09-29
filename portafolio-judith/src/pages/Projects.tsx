import React from "react";
import Button from "../components/Button";
import  Computer from "../components/Computer";


const Projects: React.FC = () => {
    return (

        <>

            <main className="min-h-screen flex items-center justify-center  bg-cover bg-center px-2">
                <div className="w-full flex flex-col items-center">
                   
                    
                    <div className="p-6 sm:p-10 h-auto sm:h-[453px] w-full max-w-lg sm:max-w-xl md:max-w-2xl
                     rounded-2xl bg-[#C7C8C9] backdrop-blur-lg shadow-xl flex flex-col items-center text-center">
                        
                    <div className="flex justify-center items-center  -translate-y-12  sm:-translate-y-14 w-full  ">
                        <Button texto="PROJECTS" link="" />
                    </div>
                    <Computer />

                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-52 -translate-y-4 sm:-translate-y-6 w-full mt-6 sm:mt-0">
                        <Button texto="COURSES" link="link/to/courses" />
                        {/* <Button texto="PROJECTS" link="link/to/projects" /> */}
                        <Button texto="TOOLS" link="link/to/tools" />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Projects;