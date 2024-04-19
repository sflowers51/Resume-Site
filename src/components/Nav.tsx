import { useState } from "react";
import MediaIcons from "./MediaIcons";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#393F40] w-full text-white p-4 z-50 flex flex-row justify-between pt-[15px] px-[25px] text-2xl absolute pl-5 ">
        <Link to="/">SF</Link>
        <div className="relative flex flex-row gap-24 -z-10">
          <Link to="/">Home</Link>
          <div className="relative">
            <button onClick={() => setIsMenuOpen((prev: boolean) => !prev)}>
              Contact
            </button>
            {isMenuOpen && <MediaIcons />}
          </div>
          <Link to="/about">About</Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
