import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="text-start text-xl font-semibold text-gray-800">
      <Typewriter
        options={{
          strings: [
            "Frontend Developer",
            "Next.js Developer",
            "React Developer",
            "Committed Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default Type;
