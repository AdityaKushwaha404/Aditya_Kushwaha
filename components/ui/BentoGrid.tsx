"use client";
import { useState, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import { socialMedia } from "@/data";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["React.js", "Next.js", "Tailwind CSS", "Express"];
  const rightLists = [
    "Node.js",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Supabase",
    "Docker",
    "GitHub",
    "GCP",
    "Vercel",
  ];

  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  const shouldPlay = copied;

  // Ensure client-only render for Lottie to avoid SSR document access
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = () => {
    const text = "kushwahaaditya431@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento transition duration-300 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 hover:border-white/20 hover:drop-shadow-[0_0_22px_rgba(124,58,237,0.25)]",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* description: objective uses wider width; tech stack uses structured groups; contact uses icons */}
          {id === 2 ? (
            <div className="z-10">
              {/* social buttons at the top */}
              <div className="flex items-center gap-3">
                {socialMedia.map((info) => (
                  <a
                    key={info.id}
                    href={(info as any).href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                  >
                    <img src={info.img} alt="icon" width={20} height={20} />
                  </a>
                ))}

                <span className="inline-block text-xs z-50 lg:text-sm px-3 py-1 rounded-md bg-[#10132E] text-[#C1C2D3] border border-white/[0.08]">
                  kushwahaaditya431@gmail.com
                </span>
              </div>

              {/* email and phone badges under buttons */}
              <div className="mt-4 flex flex-wrap items-center gap-3 relative z-50">
                {/* <span className="inline-block text-xs lg:text-sm px-3 py-1 rounded-md z-50 bg-[#10132E] text-[#C1C2D3] border border-white/[0.08]">
                  kushwahaaditya431@gmail.com
                </span> */}
                <span className="inline-block text-xs z-50 lg:text-sm px-3 py-1 rounded-md bg-[#10132E] text-[#C1C2D3] border border-white/[0.00]"></span>
              </div>
            </div>
          ) : id !== 3 ? (
            <div
              className={cn(
                "font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10",
                id === 1 ? "md:max-w-64 lg:max-w-80" : "md:max-w-32"
              )}
            >
              {description}
            </div>
          ) : (
            <div className="z-10">
              <div className="space-y-3 md:space-y-4">
                <div>
                  <span className="font-semibold text-white">Frontend:</span>
                  <p className="mt-0.5 text-[#C1C2D3] text-xs lg:text-sm">
                    React.js, Next.js, Tailwind CSS
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-white">Backend:</span>
                  <p className="mt-0.5 text-[#C1C2D3] text-xs lg:text-sm">
                    Node.js, Express, FastAPI
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-white">Database:</span>
                  <p className="mt-0.5 text-[#C1C2D3] text-xs lg:text-sm">
                    PostgreSQL, MongoDB, Supabase
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-white">
                    Cloud & Tools:
                  </span>
                  <p className="mt-0.5 text-[#C1C2D3] text-xs lg:text-sm">
                    Docker, GitHub, GCP, Vercel
                  </p>
                </div>
              </div>
            </div>
          )}
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          {id !== 6 && (
            <div
              className={`font-sans text-lg lg:text-3xl max-w-96 font-bold ${
                id === 2 ? "z-50 mt-auto" : "z-10"
              }`}
            >
              {title}
            </div>
          )}

          {/* phone & email already shown above for contact card */}

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-3 py-2 px-2 text-[10px] lg:text-xs opacity-80 lg:opacity-100 rounded-md text-center bg-[#10132E] border border-white/[0.08] transition-all duration-300 hover:border-white/30 hover:bg-[#12163A] relative z-10 hover:drop-shadow-[0_0_14px_rgba(124,58,237,0.55)]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-3 lg:px-3 py-3 px-2 rounded-md text-center bg-[#10132E] border border-white/[0.08]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-3 lg:px-3 py-3 px-2 rounded-md text-center bg-[#10132E] border border-white/[0.08]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-3 py-2 px-2 text-[10px] lg:text-xs opacity-80 lg:opacity-100 rounded-md text-center bg-[#10132E] border border-white/[0.08] transition-all duration-300 hover:border-white/30 hover:bg-[#12163A] relative z-10 hover:drop-shadow-[0_0_14px_rgba(59,130,246,0.55)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && mounted && (
            <div className="mt-5 relative">
              {/* Creative headline replacing helper text */}
              <div className="mb-5">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70 text-xl lg:text-3xl font-semibold tracking-wide">
                  Copy & Connect — let’s build something brilliant.
                </p>
              </div>

              {/* Decorative ambient elements to fill space */}
              <div className="pointer-events-none absolute inset-0 -z-0">
                {/* soft glow blobs */}
                <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full blur-2xl opacity-20 bg-fuchsia-500" />
                <div className="absolute top-10 right-6 h-28 w-28 rounded-full blur-2xl opacity-20 bg-indigo-500" />
                <div className="absolute bottom-6 left-10 h-20 w-20 rounded-full blur-xl opacity-20 bg-purple-400" />
                {/* subtle gradient line */}
                <div className="absolute left-6 right-6 top-16 h-px bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
                {/* spark dots */}
                <div className="absolute top-6 right-10 h-1 w-1 rounded-full bg-white/60" />
                <div className="absolute top-24 right-20 h-1 w-1 rounded-full bg-white/40" />
                <div className="absolute bottom-12 left-16 h-1 w-1 rounded-full bg-white/50" />
                {/* corner highlights */}
                <div className="absolute left-0 top-0 h-16 w-16 rounded-tl-3xl bg-gradient-to-br from-white/10 to-transparent" />
                <div className="absolute right-0 bottom-0 h-16 w-16 rounded-br-3xl bg-gradient-to-tl from-white/10 to-transparent" />
                {/* noise overlay */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 1px)",
                    backgroundSize: "6px 6px",
                  }}
                />
              </div>
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${
                  shouldPlay ? "block" : "block"
                }`}
              >
                {mounted && (
                  <Lottie
                    animationData={animationData}
                    autoplay={shouldPlay}
                    loop={shouldPlay}
                    style={{ height: 200, width: 400 }}
                  />
                )}
              </div>

              <div className="flex items-center gap-3">
                <MagicButton
                  title={copied ? "Copied!" : "Copy email"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#0F1430] hover:!bg-[#12183A] transition-all duration-300 shadow-[0_0_0_2px_rgba(255,255,255,0.06)] hover:shadow-[0_0_0_2px_rgba(255,255,255,0.12),0_10px_35px_rgba(17,24,63,0.45)] ring-1 ring-white/5 hover:ring-white/10"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
