"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";


export default function Home() {
  return (
    <AuroraBackground>
      <div className="min-h-screen flex flex-col justify-center items-center relative px-4">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative min-h-screen flex flex-col justify-center items-center px-4"
        id="hero-section"
      >
        <div className="flex max-w-6xl flex-col md:flex-row items-center md:items-center justify-center gap-8">
          <img
            src="/headshot.png"
            alt="headshot"
            className="rounded-full shadow-2xl shadow-black/50 w-48 h-48 md:w-64 md:h-64 hover:scale-105 hover:shadow-blue-300/20 transition duration-400"
          />

          <div className="w-full">
            <div className="font-black text-3xl md:text-6xl dark:text-neutral-100 text-center md:text-left">
              Hi, I'm Jason McKinlay.
            </div>
            <p className="font-extralight text-2xl dark:text-neutral-200 py-2 text-center md:text-left">
              I'm a software engineer and third-year computer science student at Penn State passionate about the art of building full-stack applications.
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <button className="bg-black dark:bg-white/10 dark:backdrop-blur-md dark:border-white/20 rounded-full w-fit ring-2 dark:ring-white/20 hover:ring-white text-white hover:text-black px-4 py-2 hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-200 transition mt-4 px-6 mx-2 shadow-black/20 shadow-lg hover:shadow-slate-600 duration-275">
            Learn More
          </button>
          <button className="bg-black dark:bg-white/10 dark:backdrop-blur-md dark:border-white/20 rounded-full w-fit ring-2 dark:ring-white/20 hover:ring-white text-white hover:text-black px-4 py-2 hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-200 transition mt-4 px-6 mx-2 shadow-black/20 shadow-lg hover:shadow-slate-600 duration-275">
            Contact Me
          </button>
        </div>
      </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative min-h-screen flex flex-col justify-center items-center px-4"
      >
      <div className="relative flex flex-col items-center justify-center px-4 z-10" id="skills-section">
        <h2 className="text-4xl font-bold dark:text-white mb-8">Skills</h2>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8 max-w-4xl w-full">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold text-white">Test</h3>
                <p className="text-neutral-300 mt-2">Add some more text here.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold text-white">Test</h3>
                <p className="text-neutral-300 mt-2">Add some more text here.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold text-white">Test</h3>
                <p className="text-neutral-300 mt-2">Add some more text here.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold text-white">Test</h3>
                <p className="text-neutral-300 mt-2">Add some more text here.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold text-white">Test</h3>
                <p className="text-neutral-300 mt-2">Add some more text here.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold text-white">Test</h3>
                <p className="text-neutral-300 mt-2">Add some more text here.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold text-white">Test</h3>
                <p className="text-neutral-300 mt-2">Add some more text here.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold text-white">Test</h3>
                <p className="text-neutral-300 mt-2">Add some more text here.</p>
            </div>
        </div>
      </div>
      </motion.div>
    </AuroraBackground>
  );
}
