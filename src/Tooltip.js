import React, { useState } from "react";

export default function Tooltip({ buttonName, buttonCSS, text, textCSS }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group inline-block">
      {/* Button that triggers the hover */}
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={ buttonCSS }
      >
        { buttonName }
      </span>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 
                    transition-opacity duration-700 ease-in-out
                   w-auto
                    ${ isHovered ? "opacity-80 pointer-events-auto" : "opacity-0 pointer-events-none"} ${ textCSS }`}
      >
        { text }
      </div>
    </div>
  );
};