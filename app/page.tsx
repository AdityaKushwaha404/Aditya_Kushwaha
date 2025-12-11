"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
// FloatingNav replaced by global Navbar

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <section id="home">
          <Hero />
        </section>
        <section id="about-grid">
          <Grid />
        </section>
        <section id="projects">
          <RecentProjects />
        </section>
        <section id="skills">
          <Experience />
        </section>
        <section id="about">
          <Approach />
        </section>
        <section id="contact">
          <Clients />
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
