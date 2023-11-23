"use client";
import { FC } from "react";
import {
  ChainIcon,
  SteeringWheelIcon,
  WheelIcon,
  SaddleIcon,
  PedalIcon,
  DerailleurIcon,
} from "../components/SVG";
import { motion } from "framer-motion";
import Link from "next/link";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { animateScroll as scroll } from "react-scroll";

const Personalize: FC = () => {
  const handleClick = () => {
    scroll.scrollToTop();
  };

  const createAnimationObject = (y: number) => {
    return {
      hidden: { opacity: 0, y: y },
      visible: { opacity: 1, y: 0 },
    };
  };
  const fadeInAnimation = createAnimationObject(-20);
  const slideUpAnimation = createAnimationObject(20);
  return (
    <>
      <div className="black-background"></div>
      <section className="flex flex-col min-h-screen text-mainColor">
        <h2 className="mt-32 mb-16  text-xl md:text-2xl text-center mx-[10%]">
          Oferuję szeroką gamę personalizacji, abyś mógł / mogła dostosować moje
          produkty do swojego unikalnego stylu i preferencji.
        </h2>
        <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
          <motion.div
            className="mx-auto mb-6 flex justify-center items-center bg-opacity-90 bg-gray-800 p-8 border border-opacity-30 rounded-xl w-4/5 md:w-personalize-div"
            initial="hidden"
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, delay: 1 },
            }}
            variants={fadeInAnimation}
          >
            <SteeringWheelIcon />
            <h2 className="ml-6 text-2xl sm:text-3xl">Kierownica</h2>
          </motion.div>
          <motion.div
            className="mx-auto lg:mt-3 mb-6 flex justify-center items-center bg-opacity-90 bg-gray-800 p-8 border border-opacity-30 rounded-xl w-4/5 md:w-personalize-div"
            initial="hidden"
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, delay: 1.5 },
            }}
            variants={fadeInAnimation}
          >
            <ChainIcon />
            <h2 className="ml-6 text-2xl sm:text-3xl">Łańcuchy</h2>
          </motion.div>
          <motion.div
            className="mx-auto lg:mt-6 mb-6 flex justify-center items-center bg-opacity-90 bg-gray-800 p-8 border border-opacity-30 rounded-xl w-4/5 md:w-personalize-div"
            initial="hidden"
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, delay: 2 },
            }}
            variants={fadeInAnimation}
          >
            <WheelIcon />
            <h2 className="ml-6 text-2xl sm:text-3xl">Koła</h2>
          </motion.div>
          <motion.div
            className="mx-auto mb-6 flex justify-center items-center bg-opacity-90 bg-gray-800 p-8 border border-opacity-30 rounded-xl w-4/5 md:w-personalize-div"
            initial="hidden"
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, delay: 2.5 },
            }}
            variants={slideUpAnimation}
          >
            <SaddleIcon />
            <h2 className="ml-6 text-2xl sm:text-3xl">Siodełka</h2>
          </motion.div>
          <motion.div
            className="mx-auto lg:mt-6 mb-6 flex justify-center items-center bg-opacity-90 bg-gray-800 p-8 border border-opacity-30 rounded-xl w-4/5 md:w-personalize-div"
            initial="hidden"
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, delay: 3 },
            }}
            variants={slideUpAnimation}
          >
            <PedalIcon />
            <h2 className="ml-6 text-2xl sm:text-3xl">Pedały</h2>
          </motion.div>
          <motion.div
            className="mx-auto lg:mt-12 mb-6 flex justify-center items-center bg-opacity-90 bg-gray-800 p-8 border border-opacity-30 rounded-xl w-4/5 md:w-personalize-div"
            initial="hidden"
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, delay: 3.5 },
            }}
            variants={slideUpAnimation}
          >
            <DerailleurIcon />
            <h2 className="ml-6 text-2xl sm:text-3xl">Przerzutki</h2>
          </motion.div>
        </aside>
        <motion.div
          className="text-center mx-auto mt-12 mb-16"
          initial="hidden"
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, delay: 4 },
          }}
          variants={slideUpAnimation}
        >
          <h3 className="mx-auto w-3/4 mb-10">
            Mogę spersonalizować inne części roweru, żeby ustalić szczegóły
            zapraszam do kontaktu.
          </h3>
          <Link
            className=" text-center mx-auto mt-6 bg-mainColor text-black pr-6 pl-10 py-2 rounded-md text-2xl
             hover:text-white focus:text-white  focus:outline-none personalize-link"
            href="/kontakt"
            onClick={handleClick}
          >
            Kontakt
            <KeyboardDoubleArrowRightIcon className="arrow-icon ml-2 mb-1" />
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Personalize;
