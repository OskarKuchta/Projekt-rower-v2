import { FC } from "react";
import Home from "./components/Home";
import MenSection from "./components/MenSection";
import WomenSection from "./components/WomenSection";
import PersonalizeSection from "./components/PersonalizeSection";

const Page: FC = () => {
  return (
    <>
      <Home />
      <MenSection />
      <WomenSection />
      <PersonalizeSection />
    </>
  );
};

export default Page;
