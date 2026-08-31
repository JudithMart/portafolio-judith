import React from "react";
import ArrowLine from "../components/ArrowLine";
import Button from "../components/Button";
import BackgroundGray from "../components/BackgroundGray";
import { TypeAnimation } from "react-type-animation";
import MegaTail from "../components/MegaTail";

const Home: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      {/* CONTENEDOR GENERAL DEL HERO */}
      <div
        className="
          relative
          w-full
          max-w-5xl
          min-h-[520px]
        "
      >
        {/* =================================================
            CARD
        ================================================== */}

        <div className="relative z-10">
          <BackgroundGray className="h-[300px] sm:h-[453px] ">
            <div className=" flex flex-col items-center justify-center">
              <TypeAnimation
                sequence={["Hi, I´m Agui Martínez", 1000]}
                wrapper="h1"
                speed={40}
                cursor={true}
                className="
                  text-gray-200
                  text-2xl
                  sm:text-2xl
                  md:text-6xl
                  font-semibold
                  tracking-wider
                  drop-shadow-lg
                "
                repeat={0}
              />

              <TypeAnimation
                sequence={["Frontend Developer", 3000]}
                wrapper="p"
                speed={90}
                cursor={false}
                className="
                  mt-2
                  text-white
                  font-light
                  text-xl
                  sm:text-3xl
                  md:text-4xl
                "
                repeat={0}
              />

              <div className="mt-4">
                <ArrowLine />
              </div>
            </div>
          </BackgroundGray>
        </div>

        {/* =================================================
            AVATAR
        ================================================== */}

        <img
          src="/avatarYo/Me7.png"
          alt="Agui Martínez"
          className="
            absolute
            z-40

            w-[260px]
            sm:w-[330px]
            md:w-[400px]
            2xl:w-[450px]

            h-auto
            object-contain

            left-[0px]
            sm:left-[-30px]
            md:left-[-96px]
            2xl:left-[-145px]

            bottom-16
            sm:bottom-[10px]
            md:bottom-[-20px]

            pointer-events-none
          "
        />

        {/* =================================================
            MEGA
        ================================================== */}
        <div
          className="
    absolute
    z-50
    right-[-20px]
    bottom-[-20px]
    group
  "
        >
          {/* BURBUJA */}
          <div
            className="
      absolute
      right-[20px]
      bottom-[180px]

      w-[150px]
      px-4
      py-3

      rounded-2xl
      bg-black/40
      backdrop-blur-md

      border
      border-white/20

      text-gray-100
      text-sm
      font-medium
      text-center

      shadow-[0_8px_25px_rgba(0,0,0,0.25)]

      opacity-0
      scale-90
      translate-y-2

      pointer-events-none

      group-hover:opacity-100
      group-hover:scale-100
      group-hover:translate-y-0

      transition-all
      duration-300
      ease-out


      
    "
          >
            Hello I´m Mega
          </div>

          <div
            className="
            absolute
            z-40
          
            right-5
            sm:right-[-30px]
            md:right-[-45px]

           
            bottom-20
            sm:bottom-[-10px]
            md:bottom-[-20px]
            pointer-events-auto
           
          "
          >
            <MegaTail />
          </div>
        </div>

        {/* =================================================
            BOTONES
        ================================================== */}

        <div
          className="
            absolute
            z-30

            bottom-9
            sm:bottom-[40px]
            md:bottom-[40px]

            left-1/2
            -translate-x-1/2

            flex
            flex-wrap
            justify-center
            items-center

            gap-5
            sm:gap-8
            md:gap-16

            w-full
          "
        >
          <Button texto="COURSES" link="/courses" />

          <Button texto="PROJECTS" link="/projects" />

          <Button texto="TOOLS" link="/tools" />
        </div>
      </div>
    </section>
  );
};

export default Home;
