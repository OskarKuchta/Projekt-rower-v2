"use client";
import React from "react";
import Home from "./components/Home";
import MenSection from "./components/MenSection";
import WomenSection from "./components/WomenSection";
import PersonalizeSection from "./components/PersonalizeSection";

const Page = () => {
  return (
    <main className="main-container">
      <Home />
      <MenSection />
      <WomenSection />
      <PersonalizeSection />
    </main>
  );
};

export default Page;
