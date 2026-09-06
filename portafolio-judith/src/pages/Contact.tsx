import { useState } from "react";
import ArrowLine from "../components/ArrowLine";
import BackgroundGray from "../components/BackgroundGray";
import Contact_Methods from "../components/Contact/Contact_Methods";
import ContactForm from "../components/Contact/ContactForm";

const Contact: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const methods = [
    {
      name: "Email",
    
      hover: "bg-red-500",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/aguimartinezg",
      hover: "bg-blue-500",
    },
    {
      name: "GitHub",
      link: "https://github.com/JudithMart",
      hover: "bg-black",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/aguimtz16/",
      hover: "bg-pink-500",
    },
    {
      name: "Whatsapp",
      link: "https://wa.me/524591237833?text=Hola%20Agui,%20vi%20tu%20portfolio%20y%20me%20gustaría%20hablar%20contigo.",
      hover: "bg-green-500",
    },
  ];
  return (
    <section className=" z-50 flex items-center justify-center px-4 pt-36 md:pt-32  pb-28">
      {/* CONTENEDOR GENERAL DEL HERO */}
      <div className=" relative  ">
        <BackgroundGray>
          <div className=" flex flex-col items-center justify-center py-10 px-4  md:p-20">
            <p className=" text-gray-200 text-xl text-center md:text-3xl font-semibold tracking-wider drop-shadow-lg">
              Interested in working together?
            </p>

            <p className=" mt-2 text-white font-light text-sm md:text-xl text-center">
              Have a project or opportunity in mind? Let's talk.
            </p>

            <div className="mt-2">
              <ArrowLine />
            </div>
          </div>
        </BackgroundGray>
        {/* =================================================
            BOTONES
        ================================================== */}

        <div
          className=" absolute z-30 -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap
            justify-center items-center gap-5 sm:gap-8 md:gap-4 w-full"
        >
          {methods.map((method, index) => (
            <Contact_Methods
              key={index}
              name={method.name}
              link={method.link}
              hover={method.hover}
              onClick={
                method.name === "Email" ? () => setShowForm(true) : undefined
              }
            />
          ))}
        </div>
        {/* FORMULARIO */}

        {showForm && <ContactForm onClose={() => setShowForm(false)} />}
      </div>
    </section>
  );
};
export default Contact;
