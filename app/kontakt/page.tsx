"use client";
import { FC } from "react";
import Link from "next/link";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const Contact: FC = () => {
  const emailAddress: string = "abcde@gmail.com";
  const subject: string = "Pytania odnośnie produktów";
  const createAnimationObject = (y: number) => {
    return {
      hidden: { opacity: 0, y: y },
      visible: { opacity: 1, y: 0 },
    };
  };
  const fadeInAnimation = createAnimationObject(-40);
  const slideUpAnimation = createAnimationObject(40);
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "transparent",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "star",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="black-background"></div>
      <section className="contact-page flex flex-col pt-32 items-center text-mainColor min-h-screen">
        <h2 className="text-4xl ">Kontakt ze mną:</h2>
        <aside className="contact-options flex flex-col md:flex-row w-4/5">
          <motion.div
            variants={fadeInAnimation}
            initial="hidden"
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, delay: 1 },
            }}
            className="contact-phone mt-8 flex flex-col items-center w-full text-center"
          >
            <Link
              href="tel:+48123456789"
              className="hover:text-white focus:outline-none focus:text-white transition-all duration-500"
            >
              <PhoneInTalkIcon
                style={{
                  fontSize: "4rem",
                }}
              />
            </Link>
            <h4 className="md:px-8 mt-6">
              Jeżeli chciałbyś/chciałabyś uzgodnić kilka kwestii, dzwoń pod
              numer {""}
              <Link
                href="tel:+48123456789"
                className="hover:text-white focus:outline-none focus:text-white transition-all duration-500"
              >
                +48 123 456 789
              </Link>
              .
            </h4>
          </motion.div>
          <motion.div
            variants={fadeInAnimation}
            initial="hidden"
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, delay: 2 },
            }}
            className="contact-mail mt-8 flex flex-col items-center w-full text-center"
          >
            <Link
              className="hover:text-white focus:outline-none focus:text-white transition-all duration-500"
              href={`mailto:${emailAddress}?subject=${encodeURIComponent(
                subject
              )}`}
            >
              <MailOutlineIcon
                style={{
                  fontSize: "4rem",
                }}
              />
            </Link>
            <h4 className="md:px-8 mt-6">
              W razie braku odezwu na numer telefonu zostaw swoją wiadomość na
              mailu. Adres:{" "}
              <Link
                className="hover:text-white focus:outline-none focus:text-white transition-all duration-500"
                href={`mailto:${emailAddress}?subject=${encodeURIComponent(
                  subject
                )}`}
              >
                {emailAddress}
              </Link>
              .
            </h4>
          </motion.div>
          <motion.div
            variants={fadeInAnimation}
            initial="hidden"
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, delay: 3 },
            }}
            className="contact-facebook mt-8 flex flex-col items-center w-full text-center"
          >
            <Link
              href="https://www.facebook.com"
              target="blank"
              className="hover:text-white focus:outline-none focus:text-white transition-all duration-500"
            >
              <FacebookIcon
                style={{
                  fontSize: "4rem",
                }}
              />
            </Link>
            <h4 className="md:px-8 mt-6">
              Zapraszam także do kontaktu przez Facebook, wystarczy{" "}
              <Link
                href="https://www.facebook.com/oskar.kuchta.39/"
                className="hover:text-white focus:outline-none focus:text-white transition-all duration-500"
              >
                kliknąć tutaj
              </Link>
              .
            </h4>
          </motion.div>
        </aside>
        <motion.div
          variants={slideUpAnimation}
          initial="hidden"
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, delay: 4 },
          }}
          className="contact-phone mt-8 flex flex-col items-center w-full text-center"
        >
          <iframe
            className=" mx-32 my-16 z-10"
            src="https://maps.google.com/maps?q=Nidzica,%20Ogrodowa%205&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            style={{ width: "clamp(250px,80vw, 600px)", height: "400px" }}
            allowFullScreen
            title="Nidzica Map"
          ></iframe>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
