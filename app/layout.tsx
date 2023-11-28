"use client";

import { useState, useEffect, Suspense, useLayoutEffect } from "react";
import "./globals.css";
import Head from "./head";
import Navbar from "./components/navbar";
import MobileNavbar from "./components/mobilenavbar";
import { useRouter } from "next/navigation";

const RootLayout: React.FC<Children> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isPhone: boolean = windowWidth < 769;
  const router = useRouter();

  useEffect(() => {
    const handleHashChange = () => {
      const hash: undefined | string = location.hash;
      if (hash) {
        const targetElement: Element | null = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [router]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <html lang="pl">
      <Head />
      <body>
        <Suspense
          fallback={
            <div className="loading">
              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              Loading...
            </div>
          }
        >
          {isPhone ? <MobileNavbar /> : <Navbar />}
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
