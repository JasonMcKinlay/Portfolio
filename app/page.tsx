"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Button from "@/components/ui/button";
import SmallCard from "@/components/ui/small-card";
import SignatureLogo from "@/components/ui/signature-logo";


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
              I'm a software engineer and Computer Science student passionate about the art of building full-stack applications that make a difference.
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <Button text="Learn More"/>
          <Button text="Contact Me" />
        </div>
      </motion.div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl border-t border-white/20"></div>
      </div>

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative flex flex-col justify-center items-center px-4 pt-12 pb-8"
        id="about-me-section"
      >
        <div className="relative flex flex-col md:flex-row items-center max-w-6xl w-full gap-8 z-10">
          <div className="md:w-3/5 w-full">
            <h2 className="text-4xl font-bold dark:text-white mb-4">About Me</h2>
            <p className="text-lg dark:text-neutral-200 mb-6 font-extralight">
              Since I was young, I’ve always been creating, whether it’s music, film, or graphics. I don't just write code; I build products. That background gives me an eye for design that many engineers miss.
            </p>
            <p className="text-lg dark:text-neutral-200 mb-6 font-extralight">
              I'm a third-year CS major at Penn State, but the learning doesn't stop there. I live by the philosophy of watching the sun set every day knowing I've learned one new thing. That drive alone fostered experience with powerful tools like React, Spring Boot, or AWS. 
            </p>
            <p className="text-lg dark:text-neutral-200 mb-6 font-extralight">
              Outside of tech, I constantly chase self-improvement, with hobbies like cooking or weightlifting. It's every one of these aspects that shapes the kind of developer I am; it keeps me excited for what's in store next. Let's get to work together.
            </p>
          </div>

          <div className="w-full md:flex-1 flex flex-col items-stretch gap-8">
          {/* <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
            <img
            src="/test.png"
            alt="aws-certification"
            className="w-48 h-48 md:w-64 md:h-64 hover:scale-105 transition duration-400"
            />
          </div> */}
            <div className="bg-white/5 hover:bg-white/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-white/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-slate-600/50 w-full">
              <div className="flex items-center gap-4">
                <img src="/psu-logo.png" alt="psu-logo" className="w-16 h-auto md:w-24 md:h-auto object-contain mix-blend-color-dodge mr-2" />
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold dark:text-white">The Pennsylvania State University</h3>
                  <p className="mt-1 text-sm dark:text-white font-extralight">B.S. in Computer Science</p>
                  <p className="mt-1 text-sm dark:text-white font-extralight">August 2023 - May 2027</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 hover:bg-white/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-white/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-slate-600/50 w-full">
              <div className="flex items-center gap-4">
                <img src="/aws-logo-dark.png" alt="aws-logo" className="w-16 h-auto md:w-24 md:h-auto object-contain mr-2" />
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold dark:text-white">AWS Certified Cloud Practitioner</h3>
                  <p className="mt-1 text-sm dark:text-white font-extralight">Amazon</p>
                  <p className="mt-1 text-sm dark:text-white font-extralight">August 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <SignatureLogo />
        </div>
      </motion.div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl border-t border-white/20"></div>
      </div>

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative flex flex-col justify-center items-center px-4 pt-12 pb-8"
        id="skills-section"
      >
      <div className="relative flex flex-col items-center justify-center px-4 z-10" id="skills-section">
        <h2 className="text-4xl font-bold dark:text-white mb-8">Skills</h2>
        <div className="grid grid-cols-6 md:grid-cols-5 sm:grid-cols-4 gap-8 max-w-4xl w-full text-center">
            <div className={`bg-white/5 hover:bg-amber-200/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-amber-300/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-amber-200/30`}>
              <img src="/icons/javascript.png" alt="javascript-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">JavaScript</h3>
            </div>
            <div className={`bg-white/5 hover:bg-blue-400/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-blue-300/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-blue-300/30`}>
              <img src="/icons/typescript.png" alt="typescript-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">TypeScript</h3>
            </div>
            <div className={`bg-white/5 hover:bg-red-400/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-red-300/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-red-400/30`}>
              <img src="/icons/html.png" alt="html-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">HTML</h3>
            </div>
            <div className={`bg-white/5 hover:bg-blue-500/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-blue-400/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-blue-600/30`}>
              <img src="/icons/css.png" alt="css-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">CSS</h3>
            </div>
            <div className={`bg-white/5 hover:bg-cyan-300/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-cyan-300/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-cyan-600/30`}>
              <img src="/icons/react.png" alt="react-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">React</h3>
            </div>
            <div className={`bg-white/5 hover:bg-amber-200/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-amber-300/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-amber-200/30`}>
              <img src="/icons/python.png" alt="python-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">Python</h3>
            </div>
            <div className={`bg-white/5 hover:bg-blue-400/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-blue-400/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-blue-500/30`}>
              <img src="/icons/java.png" alt="java-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">Java</h3>
            </div>
            <div className={`bg-white/5 hover:bg-blue-400/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-blue-400/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-blue-400/30`}>
              <img src="/icons/c.png" alt="c-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">C</h3>
            </div>
            <div className={`bg-white/5 hover:bg-lime-300/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-lime-300/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-lime-200/30`}>
              <img src="/icons/spring boot.png" alt="spring-boot-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">Spring Boot</h3>
            </div>
            <div className={`bg-white/5 hover:bg-sky-200/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-sky-300/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-sky-200/30`}>
              <img src="/icons/postgresql.png" alt="postgresql-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">PostgreSQL</h3>
            </div>
            <div className={`bg-white/5 hover:bg-teal-200/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-teal-300/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-teal-200/30`}>
              <img src="/icons/tailwind.png" alt="tailwind-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">Tailwind</h3>
            </div>
            <div className={`bg-white/5 hover:bg-blue-400/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-blue-400/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-blue-600/30`}>
              <img src="/icons/docker.png" alt="docker-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">Docker</h3>
            </div>
            <div className={`bg-white/5 hover:bg-red-400/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-red-400/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-red-400/30`}>
              <img src="/icons/git.png" alt="git-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">Git</h3>
            </div>
            <div className={`bg-white/5 hover:bg-orange-300/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-orange-300/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-orange-300/30`}>
              <img src="/icons/aws.png" alt="aws-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">AWS</h3>
            </div>
            <div className={`bg-white/5 hover:bg-lime-300/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-lime-300/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-lime-300/30`}>
              <img src="/icons/node.png" alt="nodejs-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">Node.js</h3>
            </div>
        </div>
      </div>
      </motion.div>
    </AuroraBackground>
  );
}
