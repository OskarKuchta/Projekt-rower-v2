import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home: React.FC<{
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ onClick }) => {
  return (
    <section id="home" className="relative w-full">
      <div className="home-container bg-[url('/home-background.jpg')] bg-center w-full h-full absolute brightness-[0.5]"></div>
      <h1 className="absolute top-1/2 left-1/2 transform text-center -translate-x-1/2 -translate-y-1/2 my-auto text-white landscape-sm:text-xl text-3xl md:text-5xl lg:text-6xl">
        Witaj w miejscu, gdzie twoje marzenia rowerowe stają się
        rzeczywistością!
      </h1>
      <div
        className="double-scroll-arrows-container cursor-pointer absolute bottom-[10%] md:bottom-[5%] right-[10%] border-white"
        onClick={onClick}
      >
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
