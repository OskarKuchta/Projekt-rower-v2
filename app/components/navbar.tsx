import { FC, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showArrow, setShowArrow] = useState<boolean>(false);
  const modelsListRef: React.MutableRefObject<HTMLUListElement | null> =
    useRef(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowArrow(!showArrow);
  };

  const handleMenuHover = () => {
    setIsMenuOpen(true);
    setShowArrow(true);
  };

  const handleMenuLeave = () => {
    setIsMenuOpen(false);
    setShowArrow(false);
  };

  const handleLeaveList = () => {
    setIsMenuOpen(false);
    setShowArrow(false);
  };

  return (
    <header className="w-full absolute top-0 z-10">
      <nav className="flex justify-between items-center px-6 bg-black text-white">
        <div className="flex items-center gap-[1ch]">
          <Image
            width={72}
            height={72}
            className="navbar-logo"
            src="/logo.jpg"
            alt="logo"
          />

          <Link
            href="/#home"
            onFocus={handleLeaveList}
            className="font-logoFont text-2xl"
          >
            Projekt Rower
          </Link>
        </div>
        <div className="flex px-8">
          <div
            className="relative group"
            onMouseEnter={handleMenuHover}
            onMouseLeave={handleMenuLeave}
          >
            <button
              className="text-md transition-all duration-700 text-white py-6 px-12 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:bg-white active:outline-none active:text-black "
              onClick={handleMenuClick}
              onFocus={handleMenuClick}
              onTouchStart={handleMenuClick}
              style={{
                backgroundColor:
                  location.pathname.includes("/rowery-meskie") ||
                  location.pathname.includes("/rowery-damskie")
                    ? "#FFD700"
                    : "",
              }}
            >
              Modele{" "}
              {showArrow ? (
                <KeyboardDoubleArrowDownIcon
                  style={{
                    fontSize: "16px",
                    marginBottom: "3px",
                  }}
                />
              ) : null}
            </button>

            <ul
              ref={modelsListRef}
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute left-0 right-0 text-center space-y-2 bg-white text-black border border-gray-300  z-10 models-list`}
            >
              <li>
                <Link
                  href="/rowery-meskie"
                  className="block hover:text-mainColor hover:bg-black focus:outline-none focus:text-mainColor focus:bg-black"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Mężczyźni
                </Link>
              </li>
              <li>
                <Link
                  href="/rowery-damskie"
                  className="block hover:text-mainColor hover:bg-black focus:outline-none focus:text-mainColor focus:bg-black"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Kobiety
                </Link>
              </li>
            </ul>
          </div>
          <Link
            onFocus={handleLeaveList}
            href="/personalizacja"
            className="text-md transition-all duration-700 text-white py-6 px-12 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:bg-white active:outline-none active:text-black"
            style={{
              backgroundColor: location.pathname.includes("/personalizacja")
                ? "#FFD700"
                : "",
            }}
          >
            Personalizacja
          </Link>
          <Link
            href="/kontakt"
            className="text-md transition-all duration-700 text-white py-6 px-12 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:outline-none active:text-black"
            style={{
              backgroundColor: location.pathname.includes("/kontakt")
                ? "#FFD700"
                : "",
            }}
          >
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
