const Nav = () => {
  return (
    <div className=" bg-[#393F40] w-full text-white p-4 z-50 flex flex-row justify-between  pt-[15px] px-[25px] text-2xl">
      <a href="/">SF</a>
      <div className="space-x-20">
        <a href="../views/About.tsx">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Nav;
