import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";
import { FC } from "react";
interface ContactSubpage {
  genderType: string;
  textColor: string;
  textButton: string;
  bgButton: string;
}

const ContactSubpage: FC<ContactSubpage> = ({
  genderType,
  textColor,
  textButton,
  bgButton,
}) => {
  const handleClick = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <h2
        className={`mt-12 text-center mx-auto text-base sm:text-2xl w-2/3 md:w-1/2 lg:text-4xl ${textColor}`}
      >
        Jeżeli jesteś {genderType} tym jak możemy dopasować rower do Twojego
        stylu zapraszam do kontaktu.
      </h2>
      <Link
        className={`text-center mx-auto my-6 ${bgButton} ${textButton}	pr-6 pl-10 py-2 rounded-md text-2xl
        hover:text-[#000000] focus:text-[#000000]  focus:outline-none personalize-link`}
        href="/kontakt"
        onClick={handleClick}
      >
        Kontakt
        <KeyboardDoubleArrowRightIcon className="arrow-icon ml-2 mb-1" />
      </Link>
    </>
  );
};

export default ContactSubpage;
