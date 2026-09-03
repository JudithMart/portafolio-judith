import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { Mail } from "lucide-react";

import DogBlink from "../components/DogBlink";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "GITHUB",
      icon: FaGithub,
      link: "https://github.com/JudithMart",
    },
    {
      name: "LINKEDIN",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/aguimartinezg",
    },
    {
      name: "INSTAGRAM",
      icon: FaInstagram,
      link: "https://www.instagram.com/aguimtz16/",
    },
    {
      name: "EMAIL",
      icon: Mail,
      link: "mailto:aguimtz.2003@gmail.com",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
       
        px-5
        pt-8
        pb-4
        md:px-16
        md:pt-10
      "
    >
      {/* =====================================================
          TOP LINE
      ====================================================== */}

      <div className="relative flex items-center w-full">
        <div className="h-[2px] w-full bg-[#6C958D]" />

        {/* LEFT DIAMOND */}

        <div
          className="
            absolute
            left-0
            w-3
            h-3
            bg-[#6C958D]
            rotate-45
          "
        />

        {/* RIGHT DIAMOND */}

        <div
          className="
            absolute
            right-0
            w-3
            h-3
            bg-[#6C958D]
            rotate-45
          "
        />
      </div>

      {/* =====================================================
          MAIN TITLE
      ====================================================== */}

      <div
        className="
          relative
          grid
          grid-cols-2
          items-start
          mt-8
          md:mt-10
        "
      >
        {/* LEFT */}

        <div
          className="
            text-[#24312F]
            font-black
            italic
            uppercase
            leading-[0.82]
            tracking-[-0.06em]

            text-[4rem]

            sm:text-[5rem]

            md:text-[7rem]

            lg:text-[8rem]
          "
        >
          <p>Let's</p>
          <p>talk</p>
        </div>

        {/* RIGHT */}

        <div
          className="
            flex
            flex-col
            items-end
            justify-start

            text-[#24312F]
            font-black
            italic
            uppercase
            leading-[0.8]
          "
        >
          <p
            className="
              text-2xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            BY AGUI
          </p>

          <div className="relative">
            {/* decorative lines */}

            <div
              className="
                absolute
                left-0
                top-1/2
                w-full
                h-[2px]
                bg-[#24312F]
                -rotate-6
              "
            />

            <div
              className="
                absolute
                left-0
                top-[58%]
                w-full
                h-[2px]
                bg-[#24312F]
                -rotate-6
              "
            />

            <p
              className="
                relative
                text-3xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                tracking-tight
              "
            >
              MARTÍNEZ
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          DESCRIPTION
      ====================================================== */}

      <div
        className="
          flex
          flex-col
          items-center
          justify-center

          mt-7
          md:-mt-2
        "
      >
        <p
          className="
            text-[#9A9A9A]
            text-[9px]
            sm:text-xs
            md:text-sm

            uppercase
            tracking-[0.3em]
            text-center
          "
        >
          Frontend-focused Full-Stack Developer
        </p>

        {/* SMALL LINE */}

        <div className="mt-3 w-5 h-[2px] bg-[#6C958D]" />
      </div>

      {/* =====================================================
          SOCIAL LINKS
      ====================================================== */}

      <div
        className="
          flex
          flex-wrap
          items-center
          justify-center

          mt-5
          md:mt-6
        "
      >
        {socialLinks.map((social, index) => {
          const Icon = social.icon;

          return (
            <React.Fragment key={social.name}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group

                  flex
                  items-center
                  gap-2

                  px-3
                  md:px-5

                  text-[#9A9A9A]

                  text-[9px]
                  md:text-xs

                  tracking-[0.15em]

                  transition-all
                  duration-300

                  hover:text-[#8FC9BD]
                "
              >
                <Icon
                  className="
                    text-sm
                    md:text-base

                    transition-transform
                    duration-300

                    group-hover:-translate-y-1
                  "
                />

                <span>{social.name}</span>
              </a>

              {index < socialLinks.length - 1 && (
                <span className="text-[#6C958D]/50">
                  |
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* =====================================================
          BOTTOM AREA
      ====================================================== */}

      <div
        className="
          relative

          mt-5
          md:mt-4

          border-t
          border-white/[0.08]

          pt-3
          md:pt-4

          flex
          items-end
          justify-between
        "
      >
        {/* COPYRIGHT */}

        <p
          className="
            text-[#777]

            text-[8px]
            md:text-[10px]

            uppercase
            tracking-[0.25em]
          "
        >
          © 2026 AGUI MARTÍNEZ
        </p>

        {/* =================================================
            DOGS
        ================================================== */}

        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2

            bottom-[-25px]

            flex
            items-end
            gap-8
            md:gap-44
          "
        >
          <DogBlink
            openImage="/dogs/Chiquitin/open.png"
            closedImage="/dogs/Chiquitin/close.png"
            className="
              w-20
              h-20

              md:w-20
              md:h-20
            "
          />

          <DogBlink
            openImage="/dogs/Chiquitin/open.png"
            closedImage="/dogs/Chiquitin/close.png"
            className="
              w-20
              h-20

              md:w-20
              md:h-20
            "
          />
        </div>

        {/* BACK TO TOP */}

        <button
          onClick={scrollToTop}
          className="
            group

            flex
            items-center
            gap-2

            text-[#777]

            text-[8px]
            md:text-[10px]

            uppercase
            tracking-[0.25em]

            transition-colors
            duration-300

            hover:text-[#8FC9BD]
          "
        >
          <span>Back to top</span>

          <span
            className="
              flex
              items-center
              justify-center

              w-6
              h-6

              md:w-7
              md:h-7

              rounded-full

              border
              border-[#6C958D]/70

              text-[#6C958D]

              transition-all
              duration-300

              group-hover:-translate-y-1
              group-hover:border-[#8FC9BD]
            "
          >
            ↑
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;