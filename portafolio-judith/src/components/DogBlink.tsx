import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface DogBlinkProps {
  openImage: string;
  closedImage: string;
  className?: string;
}

const DogBlink: React.FC<DogBlinkProps> = ({
  openImage,
  closedImage,
  className = "",
}) => {
  const [eyesClosed, setEyesClosed] = useState(false);

  useEffect(() => {
    let blinkTimer: ReturnType<typeof setTimeout>;

    const scheduleBlink = () => {
   
      blinkTimer = setTimeout(
        () => {
          setEyesClosed(true);

          blinkTimer = setTimeout(() => {
            setEyesClosed(false);

            scheduleBlink();
          }, 100);
        },
        3500 + Math.random() * 2500,
      );
    };

    scheduleBlink();

    return () => {
      clearTimeout(blinkTimer);
    };
  }, []);

  return (
    <motion.div className={`relative ${className}`}>
      <img
        src={openImage}
        alt=""
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-75 ${
          eyesClosed ? "opacity-0" : "opacity-100"
        }`}
      />

      <img
        src={closedImage}
        alt=""
        className={`relative w-full h-full object-contain transition-opacity duration-75 ${
          eyesClosed ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.div>
  );
};

export default DogBlink;
