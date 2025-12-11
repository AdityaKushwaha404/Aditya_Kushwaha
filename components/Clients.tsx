"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-xl flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 max-lg:mt-10">
          {companies.map((company) => (
            <div key={company.id} className="flex items-center gap-3 md:gap-4">
              <img
                src={company.img}
                alt={company.name}
                className="w-16 h-16 md:w-60 md:h-60 object-contain"
              />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
