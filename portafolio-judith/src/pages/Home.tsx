import React from "react";
import ArrowLine from "../components/ArrowLine";
import Button from "../components/Button";
import BackgroundGray from "../components/BackgroundGray";
import { TypeAnimation } from "react-type-animation";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="w-full max-w-5xl flex flex-col items-center">
        {/* =====================================================
            CONTENEDOR DEL HERO
        ====================================================== */}

        <div className="relative w-full ">
          {/* =================================================
              CARD
          ================================================== */}

          <BackgroundGray>
            <div className="mt-10 flex flex-col items-center justify-center">
              <TypeAnimation
                sequence={["Hi, I´m Agui Martínez", 1000]}
                wrapper="h1"
                speed={40}
                cursor={true}
                className="
     text-gray-200 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-wider drop-shadow-lg"
                repeat={0}
              />
              <TypeAnimation
                sequence={["Frontend Developer", 3000]}
                wrapper="p"
                speed={90}
                cursor={false}
                className="mt-2 text-white font-light text-xl sm:text-3xl md:text-4xl"
                repeat={0}
              />{" "}
              <div className="mt-4">
                <ArrowLine />
              </div>
            </div>
          </BackgroundGray>

          {/* =================================================
              AVATAR
          ================================================== */}

          <img
            src="/avatarYo/Me7.png"
            alt="Agui Martínez"
            className="
              fixed
              z-20
            
 
              w-[400px]
              2xl:w-[450px]
              h-auto
              object-contain
              hidden
              sm:block
              
                bottom-0
               right-[-10px]
                2xl:right-[150px]

       
            "
          />

          {/* =================================================
              BOTONES
          ================================================== */}

          <div
            className="
              relative
              z-30

              flex
              flex-wrap
              justify-center
              items-center

              gap-5
              sm:gap-8
              md:gap-16

              mt-[-10px]
              sm:mt-[-20px]
            "
          >
            <Button texto="COURSES" link="link/to/courses" />

            <Button texto="PROJECTS" link="/projects" />

            <Button texto="TOOLS" link="link/to/tools" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
