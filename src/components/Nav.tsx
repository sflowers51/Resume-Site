import { useState } from "react";
import MediaIcons from "./MediaIcons";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#393F40] w-full text-white p-4 z-50 flex flex-row md:justify-between justify-end pt-[15px] md:px-[25px] text-2xl absolute pl-5 ">
        <Link to="/" className="hover:text-[#CCCCCC] hidden md:block">SF</Link>
        <div className="relative flex flex-row md:gap-24 -z-10 gap-10">
          <Link to="/" className="hover:text-[#CCCCCC] hover:underline">Home</Link>
          <div className="relative hover:text-[#CCCCCC] hover:underline">
            <button onClick={() => setIsMenuOpen((prev: boolean) => !prev)}>
              Contact
            </button>
            {isMenuOpen && <MediaIcons />}
          </div>
          <Link to="/about" className="hover:text-[#CCCCCC] hover:underline">About</Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
