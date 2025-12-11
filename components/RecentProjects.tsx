"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Crafted <span className="text-purple">Systems</span> & Backend Builds
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-20 mt-12">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] mt-6 mb-10"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-semibold lg:text-xl md:text-lg text-sm line-clamp-1 tracking-tight">
                {item.title}
              </h1>

              <p
                className="lg:text-base md:text-sm text-xs font-light line-clamp-3"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex flex-col gap-3 mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="tech icon" className="p-2" />
                    </div>
                  ))}
                </div>
                {item.tech && (
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs rounded-full border border-white/20 text-white/80 bg-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
