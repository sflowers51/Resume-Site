import Nav from "../components/Nav";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-[#393F40] text-white">
      <Nav />
      <div className="text-center mt-20">
        <h1 className="text-4xl">404</h1>
        <h2 className="text-2xl">Page Not Found</h2>
        <h1 className="text-6xl mt-16"> ¯\_(ツ)_/¯ </h1>
      </div>
    </div>
  );
};

export default ErrorPage;
