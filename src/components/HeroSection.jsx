import herovid from "../assets/hero.mp4"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 transition-all duration-1300 mb-10 ">
      <h1 className="text-4xl text-white sm:text-6xl lg:text-7xl text-center tracking-wide">
        Exterprise build tools
        <span className="bg-gradient-to-r from-orange-500 to-blue-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-white max-w-4xl">
        Develop you creativity with our exterprise grade tools that can enhance
        the user experience beyond your immagination
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 text-white rounded-md border"
        >
          Our Docs
        </a>
      </div>
      <div className="absolute inset-0 -z-20 h-full overflow-hidden">
        <video
          src={herovid}
          className="h-full w-full object-cover md:brightness-100"
          muted
          autoPlay
          loop
          playsInline
        ></video>
      </div>
    </div>
  );
};

export default HeroSection;
