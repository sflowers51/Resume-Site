import Hero from "../components/Hero";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="lg:h-screen h-full bg-[#393F40] text-white font-poppins flex flex-col">
      <Nav />
      <Hero />
    </div>
  );
}

export default Home;
