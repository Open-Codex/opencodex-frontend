"use client";

import ReactLenis from "lenis/react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import ProjectCard from "@/components/landing/ProjectCard";
import HowWork from "@/components/landing/HowWork";
import ToAction from "@/components/landing/ToAction";
import Footer from "@/components/landing/Footer";

export default function Home() {

  return (
    <ReactLenis root>
        <main className="flex-grow">
          <Header />
          <Hero />
          <Stats />
          <ProjectCard />
          <HowWork />
          <ToAction />
        </main>

        <Footer />
    </ReactLenis>
  );
}