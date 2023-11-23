import { FC } from "react";
import Home from "./components/Home";
import MenSection from "./components/MenSection";
import WomenSection from "./components/WomenSection";

const Page: FC = () => {
  return (
    <>
      <Home />
      <MenSection />
      <WomenSection />
    </>
  );
};

export default Page;
