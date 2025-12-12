import { FaLocationArrow } from "react-icons/fa6";
import React, { useEffect } from "react";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.7, ease: "power3.out" },
      });

      // spotlights enter first with a soft stagger
      tl.from(
        ".hero-spot",
        {
          opacity: 0,
          y: 30,
          scale: 0.98,
          stagger: 0.08,
          duration: 0.9,
          ease: "expo.out",
        },
        0
      );

      // tag, title, subtitle, CTA
      tl.from(
        ".hero-tag",
        { opacity: 0, y: 12, duration: 0.6, ease: "power2.out" },
        0.12
      )
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 18,
            duration: 0.9,
            stagger: 0.02,
            ease: "power3.out",
          },
          0.18
        )
        .from(
          ".hero-sub",
          { opacity: 0, y: 12, duration: 0.6, ease: "power2.out" },
          0.44
        )
        .from(
          ".hero-cta",
          {
            opacity: 0,
            scale: 0.96,
            y: 8,
            duration: 0.5,
            ease: "back.out(1.2)",
          },
          0.6
        );

      // gentle floating loop on spotlights (disabled on coarse pointers)
      if (!coarsePointer) {
        gsap.to(".hero-spot", {
          y: "+=6",
          duration: 5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });

        // small parallax following mouse for spotlights
        const onMove = (e: MouseEvent) => {
          const w = window.innerWidth;
          const h = window.innerHeight;
          const nx = (e.clientX / w - 0.5) * 2; // -1..1
          const ny = (e.clientY / h - 0.5) * 2;
          gsap.to(".hero-spot", {
            x: nx * 12,
            y: `+=${ny * 6}`,
            duration: 0.6,
            overwrite: true,
            ease: "power2.out",
          });
        };
        window.addEventListener("mousemove", onMove);

        // cleanup mousemove listener on teardown
        return () => {
          window.removeEventListener("mousemove", onMove);
          tl.kill();
          gsap.killTweensOf(".hero-spot");
        };
      }
      // cleanup timeline if coarse pointer or reduced
      return () => {
        tl.kill();
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="home" className="pb-20 pt-24">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="hero-spot -top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="hero-spot h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="hero-spot left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-36 z-10">
        <div className="max-w-[89vw] md:max-w-4xl lg:max-w-[70vw] flex flex-col items-center justify-center">
          <p className="hero-tag uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            ADITYA KUSHWAHA — FULL-STACK / SOFTWARE ENGINEER
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Aspiring Full-Stack Engineer crafting backends and elegant frontends"
            className="hero-title text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="hero-sub text-center md:tracking-wider mb-4 text-sm md:text-base lg:text-lg">
            I&apos;m Aditya — blending interfaces and systems to create seamless
            digital journeys.
          </p>

          <div className="flex gap-3 hero-cta">
            <a href="/cv" target="_blank" rel="noopener noreferrer">
              <MagicButton
                title="View my resume"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
