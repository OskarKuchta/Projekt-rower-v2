import { FC } from "react";
import Link from "next/link";

const MenSection: FC = () => {
  return (
    <Link href="/rowery-meskie">
      <div className="men-container bg-[url('/menSection-background.avif')] w-full landscape-sm:mt-[72px] h-screen relative">
        <h2 className="absolute landscape-sm:bottom-8 bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 bg-[#0e0d0d] w-full text-center text-lime py-2 text-4xl lg:text-7xl tracking-wide">
          Mężczyźni
        </h2>
      </div>
    </Link>
  );
};

export default MenSection;