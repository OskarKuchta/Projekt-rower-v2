"use client";
import { FC } from "react";
import ContactSubpage from "../components/ContactSubpage";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Men: FC = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  return (
    <>
      <div className="bg-[url('/men-background.webp')] bg-no-repeat bg-cover fixed top-0 left-0 w-full min-h-screen z-[-1] brightness-[0.3]"></div>
      <section className="flex flex-col items-center text-white">
        <h2 className="pt-32 pb-16 px-8 md:px-32 md:w-4/5 lg:w-2/3 mx-auto text-center text-base md:text-2xl">
          Dla mężczyzn proponuję rowery w eleganckich, ciemnych odcieniach.
          Rowery, które emanują siłą i charakterem, idealne dla nowoczesnych
          mężczyzn, którzy cenią sobie styl i wyraźną prezencję.
        </h2>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: inView ? 1 : 0,
            scale: inView ? 1 : 0,
          }}
          transition={{
            duration: 2,
          }}
          ref={inViewRef}
          className="w-[550px] max-w-[90vw]"
        >
          <Image
            width={550}
            height={400}
            src="/men-bicycle.jpg"
            className="rounded-lg"
            alt="Dziewczyna na rowerze"
          />
        </motion.div>
        <ContactSubpage
          genderType="zainteresowany"
          textColor="text-white"
          textButton="text-black"
          bgButton="bg-gray-300"
        />
      </section>
    </>
  );
};

export default Men;
