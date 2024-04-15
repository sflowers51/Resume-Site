import Hero from "../components/Hero";
import Nav from "../components/Nav";

function Home() {
  return (
    <div className="h-screen bg-[#393F40] text-white font-poppins flex flex-col">
      <Nav />
      <Hero />
    </div>
  );
}

export default Home;
