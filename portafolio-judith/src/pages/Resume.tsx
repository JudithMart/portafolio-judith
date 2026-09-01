import React from "react";
import { motion } from "motion/react";
import BackgroundGray from "../components/BackgroundGray";
import Skill from "../components/Resume/Skill";
import SectionTitle from "../components/Resume/SectionTitle";
import Achievement from "../components/Resume/Achievement";
import ProjectCard from "../components/Resume/ProjectCard";
import Experience from "../components/Resume/Experience";

const Resume: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-20 md:pt-32 pb-32 px-4"
    >
      <div className="w-full max-w-5xl mx-auto relative">
        <BackgroundGray>
          <div className="w-full p-6 sm:p-10 md:p-14 text-gray-300">
            {/* =========================
                HEADER
            ========================== */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="border-b border-white/10 pb-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-200">
                Agui Judith Martínez Gutiérrez
              </h1>

              <p className="mt-2 text-lg md:text-xl text-[#8FC9BD]">
                Frontend-focused Full-Stack Developer
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-400">
                <span>Morelia, Michoacán, México</span>
                <span>+52 459 123 78 33</span>

                <a
                  href="mailto:aguimtz.2003@gmail.com"
                  className="hover:text-[#8FC9BD] transition-colors"
                >
                  aguimtz.2003@gmail.com
                </a>

                <a
                  href="https://linkedin.com/in/aguimartinezg"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#8FC9BD] transition-colors"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/JudithMart"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#8FC9BD] transition-colors"
                >
                  GitHub
                </a>
              </div>
            </motion.header>

            {/* =========================
                SUMMARY
            ========================== */}
            <motion.section
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-10"
            >
              <SectionTitle title="Professional Summary" />

              <p className="mt-4 text-sm md:text-base leading-7 text-gray-400">
                Frontend-focused Full-Stack Developer with experience building
                responsive web applications using JavaScript, TypeScript, React,
                Next.js, and Vue/Nuxt.js. Experienced in creating reusable,
                component-based interfaces, managing relational databases,
                integrating APIs, implementing authentication, and developing
                unit tests.
              </p>

              <p className="mt-3 text-sm md:text-base leading-7 text-gray-400">
                Proficient in Node.js, Express, PostgreSQL, Prisma, Git, and
                Agile methodologies, applied across web projects and
                collaborative development environments.
              </p>
            </motion.section>

            {/* =========================
                EXPERIENCE
            ========================== */}
            <motion.section
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-12"
            >
              <SectionTitle title="Professional Experience" />

              <div className="mt-6 space-y-8">
                {/* BICITAS */}
                <Experience
                  company="BiCitas Históricas"
                  link="https://www.bicitashistoricas.com/"
                  doc=""
                  role="Interactive Map Web Application"
                  date="March 2026 – June 2026"
                  description={[
                    "Independently developed a web application for a real client using React, JavaScript, Vite, and Tailwind CSS.",
                    "Implemented user geolocation, dynamic markers, visual categorization, and route calculation using Mapbox.",
                    "Integrated Supabase/PostgreSQL for application data.",
                    "Developed an administrative dashboard with authentication, role-based authorization, and protected routes.",
                    "Managed the development process using Git and Jira and deployed the application to Vercel.",
                  ]}
                />

                {/* GENCODE */}
                <Experience
                  company="GenCode Tech"
                  link="https://gencodetech.com/"
                  doc=""
                  role="Frontend Developer — Professional Residency"
                  date="January 2026 – May 2026"
                  description={[
                    "Contributed to the redesign and development of the company's corporate website using Nuxt 3 and JavaScript.",
                    "Developed responsive interfaces and reusable components following a mobile-first approach.",
                    "Implemented dynamic service pages using slug-based routing.",
                    "Integrated Sanity as a headless CMS for dynamic blog content.",
                    "Worked with Git branches and an issue-based development workflow.",
                  ]}
                />

                {/* PASITOS */}
                <Experience
                  company="Pasitos"
                  link=""
                  doc="/projects/pasitos"
                  role="Unity / C# Developer"
                  date="June 2025 – April 2026"
                  description={[
                    "Contributed to the development of a motor rehabilitation video game for the Virtual Reality Therapy area at CRIT Morelia.",
                    "Developed the player's calibration system using Unity, C#, and Orbbec Astra cameras.",
                    "Implemented player interactions, collision detection, and gameplay mechanics.",
                    "Participated in integrating session-generated data with the existing database.",
                  ]}
                />
              </div>
            </motion.section>

            {/* =========================
                PROJECTS
            ========================== */}
            <motion.section
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-12"
            >
              <SectionTitle title="Projects" />

              <div className="mt-6 grid md:grid-cols-2 gap-5">
                <ProjectCard
                  title="Flight Search Engine"
                  date="December 2025"
                  link="https://github.com/JudithMart/flight_search_engine"
                  description="Full-stack flight search application integrating the Amadeus Flight Offers API."
                  technologies="React · Node.js · Express · Jest"
                />

                <ProjectCard
                  title="ChefPick"
                  link="https://chefpick.vercel.app/"
                  date="February 2025 – July 2025"
                  description="Recipe discovery platform focused on finding recipes based on available ingredients."
                  technologies="React · Next.js · Tailwind CSS"
                />

                <ProjectCard
                  title="Physical Threat Detection"
                  link=""
                  date="May 2025"
                  description="Research project focused on detecting physical threats using computer vision and YOLOv5."
                  technologies="Python · YOLOv5 · Computer Vision"
                />
              </div>
            </motion.section>

            {/* =========================
                EDUCATION + ACHIEVEMENTS
            ========================== */}
            <div className="mt-12 grid md:grid-cols-2 gap-10">
              {/* EDUCATION */}
              <motion.section
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <SectionTitle title="Education" />

                <div className="mt-5">
                  <h3 className="text-gray-200 font-semibold">
                    Instituto Tecnológico de Morelia
                  </h3>

                  <p className="mt-1 text-[#8FC9BD] text-sm">
                    B.S. Computer Systems Engineering
                  </p>

                  <p className="text-gray-400 text-sm mt-1">
                    Specialization in Software Development
                  </p>

                  <p className="text-gray-500 text-sm mt-2">
                    2021 – 2026 · Graduation pending
                  </p>
                </div>
              </motion.section>

              {/* ACHIEVEMENTS */}
              <motion.section
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <SectionTitle title="Achievements" />

                <div className="mt-5 space-y-4">
                  <Achievement
                    year="2026"
                    text='Recognition for "Pasitos" Video Game Development — CRIT Morelia'
                  />

                  <Achievement
                    year="2025"
                    text="3rd Place — 7th Undergraduate Technological Research Project Fair"
                  />

                  <Achievement
                    year="2023"
                    text="5th Place — Coding Cup Michoacán"
                  />
                </div>
              </motion.section>
            </div>

            {/* =========================
                TECHNICAL SKILLS
            ========================== */}
            <motion.section
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-12"
            >
              <SectionTitle title="Technical Skills" />

              <div className="mt-6 space-y-4">
                <Skill
                  title="Frontend"
                  skills="JavaScript · TypeScript · React · Next.js · Vue.js · Nuxt.js · HTML · CSS · Tailwind CSS · Vite"
                />

                <Skill
                  title="Backend & APIs"
                  skills="Node.js · PostgreSQL · SQL  · Supabase"
                />

                <Skill
                  title="Testing & Tools"
                  skills="Git · GitHub · Jira · Vercel · Sanity"
                />

                <Skill title="Other" skills="C# · Unity · Python · Java" />

                <Skill title="Languages" skills="English — B1" />
              </div>
            </motion.section>

            {/* =========================
                DOWNLOAD
            ========================== */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-12 pt-8 border-t border-white/10 flex justify-center"
            >
              <a
                href="/resume/Agui_Martinez.pdf"
                download
                className=" px-6 py-3 rounded-2xl bg-[#6C958D] text-white font-semibold text-sm shadow-lg hover:scale-105 hover:bg-[#7da99f] transition-all duration-300"
              >
                DOWNLOAD RESUME
              </a>
            </motion.div>
          </div>
        </BackgroundGray>
      </div>
    </motion.main>
  );
};

export default Resume;
