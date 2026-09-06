import React from "react";
import { motion } from "motion/react";

const Project_pasitos: React.FC = () => {
  const scrollReveal = {
    hidden: {
      opacity: 0,
      y: 32,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const galleryItem = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };
  return (
    <article>
      <motion.div
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-gray-200 text-2xl md:text-4xl font-semibold tracking-wider">
          PASITOS — VIDEO GAME
        </h1>

        <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
          Pasitos is a 3D therapeutic video game developed as part of the
          RehabilyTec suite to support motor rehabilitation for children at CRIT
          Michoacán. The game transforms physical therapy exercises into an
          interactive experience where patients control the game using real body
          movements.
        </p>

        <p className="mt-4 text-[#8FC9BD] text-sm md:text-base font-semibold">
          Unity · C# · Orbbec Astra · Nuitrack
        </p>
      </motion.div>

      {/* HOW IT WORKS */}
      <motion.div
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mt-4"
      >
        <h2 className="text-gray-300 text-xl  font-semibold tracking-wider">
          HOW IT WORKS
        </h2>
        <img
          src="/Projects/Pasitos/HOW-IT-WORKS.png"
          alt="How It Works"
          className=" w-full "
        />
      </motion.div>

      {/* Video Presentation */}
      <motion.div
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-4xl mt-2"
      >
        <h2 className="text-gray-300 text-xl  font-semibold tracking-wider">
          PRESENTED AT CRIT MICHOACÁN
        </h2>

        <div className="mt-4 overflow-hidden rounded-2xl ">
          <video controls className="w-full h-80">
            <source src="/Projects/Pasitos/Presentation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
      {/* MY CONTRIBUTION */}
      <motion.div
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mt-10"
      >
        <h2 className="text-gray-300 text-xl  font-semibold tracking-wider">
          MY CONTRIBUTION
        </h2>
        <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
          I contributed to the development of the player calibration system in
          Unity and C#. I also worked on gameplay interactions, collision
          behavior, visual assets, and the integration of session-generated data
          with the existing platform.
        </p>
      </motion.div>

      {/* MANUAL */}
      <div className="w-full max-w-4xl mt-10">
        <h2 className="text-gray-300 text-xl  font-semibold tracking-wider">
          USER MANUAL
        </h2>

        <div
          className="
      mt-5
      flex flex-col md:flex-row
      items-center
      justify-between
      gap-5
      p-6
      rounded-2xl
      bg-white/10
      border border-white/10
    "
        >
          <div>
            <h3 className="text-white font-semibold">Pasitos — User Manual</h3>

            <p className="mt-1 text-sm text-white/60">
              Technical and gameplay instructions for therapists.
            </p>
          </div>

          <a
            href="/Projects/Pasitos/manualPasitos.pdf"
            target="_blank"
            rel="noreferrer"
            className="
        px-5 py-3
        rounded-xl
        bg-[#6C958D]
        text-white
        text-sm
        font-semibold
        hover:scale-105
        transition-transform
      "
          >
            Open Manual
          </a>
        </div>
      </div>

      {/* GALLERY */}
      <div className="w-full max-w-4xl mt-14">
        <h2 className="text-gray-300 text-xl font-semibold tracking-wider">
          PASITOS IN ACTION
        </h2>

        <p className="mt-2 text-sm text-white/50">
          Project presentation and testing at CRIT Michoacán.
        </p>

        {/* GALERÍA */}
        <div className="w-full max-w-4xl mt-6">
          <div
            className="
      grid
      grid-cols-2
      md:grid-cols-4
      gap-3
      auto-rows-[140px]
      md:auto-rows-[150px]
    "
          >
            {/* FOTO 1 — PRINCIPAL */}
            <motion.div
              custom={0}
              variants={galleryItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="
    col-span-2
    row-span-2
    overflow-hidden
    rounded-2xl
    group
  "
            >
              <img
                src="/Projects/Pasitos/Pasitos1.jpeg"
                alt="Pasitos presentation at CRIT Michoacán"
                className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
              />
            </motion.div>

            {/* FOTO 2 */}
            <motion.div
              custom={1}
              variants={galleryItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="
        col-span-1
        row-span-1
        overflow-hidden
        rounded-2xl
        group
      "
            >
              <img
                src="/Projects/Pasitos/Pasitos2.jpeg"
                alt="Pasitos"
                className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
              />
            </motion.div>

            {/* FOTO 3 */}
            <motion.div
              custom={2}
              variants={galleryItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="
    col-span-1
    row-span-1
    overflow-hidden
    rounded-2xl
    group
  "
            >
              <img
                src="/Projects/Pasitos/Pasitos3.jpeg"
                alt="Pasitos project"
                className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
              />
            </motion.div>

            {/* FOTO 4 */}
            <motion.div
              custom={3}
              variants={galleryItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="
    col-span-1
    row-span-1
    overflow-hidden
    rounded-2xl
    group
  "
            >
              <img
                src="/Projects/Pasitos/Pasitos4.jpeg"
                alt="Pasitos project presentation"
                className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
              />
            </motion.div>

            {/* FOTO 5 */}
            <motion.div
              custom={4}
              variants={galleryItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="
    col-span-1
    row-span-1
    overflow-hidden
    rounded-2xl
    group
  "
            >
              <img
                src="/Projects/Pasitos/Pasitos5.jpeg"
                alt="Pasitos"
                className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project_pasitos;
