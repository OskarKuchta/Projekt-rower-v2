import { FC } from "react";
import Link from "next/link";
const WomenSection: FC = () => {
  return (
    <Link href="/rowery-damskie">
      <div className="bg-[url('/womenSection-background.avif')] min-h-screen relative w-full lady-container">
        <h2 className="absolute landscape-sm:bottom-8 bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 bg-[#0e0d0d] w-full text-center text-mainColor py-2 text-4xl lg:text-7xl tracking-wide">
          Kobiety
        </h2>
      </div>
    </Link>
  );
};

export default WomenSection;
