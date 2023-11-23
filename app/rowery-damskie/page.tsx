"use client";
import ContactSubpage from "../components/ContactSubpage";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Women = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  return (
    <section className="pink-background flex flex-col items-center lg:items-start bg-[#E9EAEB]">
      <h2 className="pt-80 lg:pt-60 pb-12 text-center w-3/4 lg:w-1/2 text-2xl sm:text-3xl lg:ml-36 lg:text-4xl text-purple-900">
        Dla pań proponuję paletę kolorów, która jest bardziej jasna i pełna
        życia. Oferuję rowery w odcieniach, które podkreślają energię i
        indywidualność kobiet.
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
        className="mx-auto lg:ml-auto lg:mr-52 xl:mr-72 w-[350px] max-w-[90vw]"
      >
        <Image
          width={550}
          height={400}
          src="/women-bicycle.jpg"
          className="rounded-lg"
          alt="Dziewczyna na rowerze"
        />
      </motion.div>
      <ContactSubpage
        genderType="zainteresowana"
        textColor="text-purple-900"
        textButton="text-white"
        bgButton="bg-purple-900"
      />
    </section>
  );
};

export default Women;
