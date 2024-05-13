import Hero from "../components/Hero";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="text-white font-poppins flex flex-col">
      <Nav />
      <Hero />
    </div>
  );
}

export default Home;
