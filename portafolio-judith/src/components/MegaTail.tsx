import React, { useEffect, useState } from "react";

const tailFrames = [
  "/dogs/Mega/image1.png",
  "/dogs/Mega/image2.png",

 
];

const MegaTail: React.FC = () => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((current) => (current + 1) % tailFrames.length);
    },900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dog-tail-container">
      <img
        src={tailFrames[frame]}
        alt="Mi perro"
        className="dog-tail"
      />
    </div>
  );
};

export default MegaTail;