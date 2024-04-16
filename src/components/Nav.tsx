import React, { useState } from "react";
import MediaIcons from "./MediaIcons";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#393F40] w-full text-white p-4 z-50 flex flex-row justify-between pt-[15px] px-[25px] text-2xl">
        <a href="/">SF</a>
        <div className="space-x-20">
          <a href="../views/About.tsx">Home</a>
          <button onClick={() => setIsMenuOpen((prev: boolean) => !prev)}>
            Contact
          </button>
          <a href="/about">About</a>
        </div>
      </div>
      {/* Ensure that the MediaIcons component is positioned correctly */}
      {isMenuOpen && <MediaIcons />}
    </>
  );
};

export default Nav;
