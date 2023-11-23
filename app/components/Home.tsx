import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home = () => {
  return (
    <section id="home">
      <div className="home-container bg-[url('/home-background.jpg')] bg-center w-full  brightness-[0.5] relative h-screen"></div>
      <h1 className="absolute top-1/2 left-1/2 transform text-center -translate-x-1/2 -translate-y-1/2 my-auto text-white landscape-sm:text-xl text-3xl md:text-5xl lg:text-6xl">
        Witaj w miejscu, gdzie twoje marzenia rowerowe stają się
        rzeczywistością!
      </h1>
      <div className="double-scroll-arrows-container cursor-pointer absolute bottom-[10%] md:bottom-[5%] right-[10%] border-white">
        <div className="scroll-arrow">
          <KeyboardArrowDownIcon className="scroll-arrow-icon stroke-mainColor" />
        </div>
        <div className="scroll-arrow">
          <KeyboardArrowDownIcon className="scroll-arrow-icon stroke-mainColor" />
        </div>
      </div>
    </section>
  );
};

export default Home;
