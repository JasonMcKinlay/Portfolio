"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.0,
          duration: 1.6,
          ease: "easeInOut",
        }}
        className="relative w-full flex flex-col items-center justify-center px-4"
      >
        <div className="flex max-w-6xl flex-col md:flex-row items-center md:items-center justify-center gap-8">
          <img
            src="/headshot.png"
            alt="headshot"
            className="rounded-full w-48 h-48 md:w-64 md:h-64"
          />

          <div className="w-full">
            <div className="font-black text-3xl md:text-6xl dark:text-neutral-100 text-center md:text-left">
              Hi, I'm Jason McKinlay.
            </div>
            <p className="font-extralight text-xs md:text-4xl dark:text-neutral-200 py-2 text-center md:text-left">
              I'm a software engineer and computer science student passionate about real solutions.
            </p>
          </div>
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 hover:scale-105 transition-transform mt-4">
          Button
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
