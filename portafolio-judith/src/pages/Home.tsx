import React from "react";
import ArrowLine from "../components/ArrowLine";
import Button from "../components/Button";
import BackgroundGray from "../components/BackgroundGray";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 pt-16">
      
      <div className="w-full max-w-5xl flex flex-col items-center">

        {/* =====================================================
            CONTENEDOR DEL HERO
        ====================================================== */}

        <div className="relative w-full">

          {/* =================================================
              CARD
          ================================================== */}

          <BackgroundGray>

            <h1
              className="
                text-gray-200
                text-3xl
                sm:text-5xl
                md:text-6xl
                font-semibold
                tracking-wider
                drop-shadow-lg
              "
            >
              Hi, I´m Agui Martínez
            </h1>

            <p
              className="
                mt-2
                text-white
                font-light
                text-xl
                sm:text-3xl
                md:text-4xl
              "
            >
              Frontend Developer
            </p>

            <div className="mt-4">
              <ArrowLine />
            </div>

          </BackgroundGray>


          {/* =================================================
              AVATAR
          ================================================== */}

          <img
            src="/avatarYo/Me7.png"
            alt="Agui Martínez"
            className="
              absolute
              z-20

              pointer-events-none

              w-64
              sm:w-72
              md:w-80
              lg:w-[380px]

              h-auto
              object-contain

              right-[-25px]
              sm:right-[-35px]
              md:right-[-45px]
              lg:right-[-55px]

              bottom-[-105px]
              sm:bottom-[-115px]
              md:bottom-[-125px]

              animate-avatar-float
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
              sm:mt-[-8px]
            "
          >

            <Button
              texto="COURSES"
              link="link/to/courses"
            />

            <Button
              texto="PROJECTS"
              link="/projects"
            />

            <Button
              texto="TOOLS"
              link="link/to/tools"
            />

          </div>

        </div>

      </div>

    </main>
  );
};

export default Home;