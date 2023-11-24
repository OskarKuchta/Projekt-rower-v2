import { FC } from "react";
import Link from "next/link";

const PersonalizeSection: FC = () => {
  return (
    <Link href="/personalizacja">
      <div className="bg-[url('/personalizeSection-background.jpg')] personalize-background h-screen relative">
        <h2 className="absolute max-w-full landscape-sm:bottom-8 bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 bg-[#0e0d0d] w-screen text-center text-white text-4xl py-2 lg:text-7xl tracking-wide">
          Personalizacja
        </h2>
      </div>
    </Link>
  );
};

export default PersonalizeSection;
