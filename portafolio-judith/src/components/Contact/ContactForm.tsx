import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      });

      setSent(true);
      form.current.reset();
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3 }}
      className=" absolute z-50 -translate-x-1/2 top-0 w-full rounded-3xl bg-[#6C958D]/90 backdrop-blur-xl border
        border-white/10 p-6 md:p-8 shadow-2xl"
    >
      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-white text-xl md:text-2xl font-semibold">
            Let's work together
          </h2>

          <p className="text-white/60 text-sm mt-1">
            Send me a message and I'll get back to you.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className=" text-white/60  hover:text-white text-xl transition-colors "
        >
          ✕
        </button>
      </div>

      {/* FORM */}

      {!sent ? (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          {/* NAME */}

          <div>
            <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="  w-full  rounded-xl  bg-black/10  border  border-white/10  px-4  py-3  text-white  placeholder:text-white/30  outline-none  focus:border-white/40  transition-colors "
            />
          </div>

          {/* EMAIL */}

          <div>
            <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="you@email.com"
              className="  w-full  rounded-xl  bg-black/10  border  border-white/10  px-4  py-3  text-white  placeholder:text-white/30  outline-none focus:border-white/40  transition-colors"
            />
          </div>

          {/* MESSAGE */}

          <div>
            <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">
              Message
            </label>

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              className=" w-full rounded-xl bg-black/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none resize-none focus:border-white/40 transition-colors
              "
            />
          </div>

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className=" mt-2 w-full rounded-xl bg-white text-[#6C958D] py-3 font-semibold  hover:scale-[1.02] transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {loading ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </form>
      ) : (
        /* SUCCESS */

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-10 text-center"
        >
          <div className="text-4xl mb-4">✓</div>

          <h3 className="text-white text-xl font-semibold">Message sent!</h3>

          <p className="text-white/60 text-sm mt-2">
            Thank you for reaching out. I'll get back to you soon.
          </p>

          <button
            onClick={onClose}
            className=" mt-6 px-6 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors
            "
          >
            Close
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ContactForm;
