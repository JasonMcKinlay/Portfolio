"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Button from "@/components/ui/button";
import SmallCard from "@/components/ui/small-card";
import SignatureLogo from "@/components/ui/signature-logo";
import Carousel from "@/components/ui/carousel";


export default function Home() {
  const projects = [
    
    {
      title: "Overcast",
      description: "An intuitive and responsive weather application leveraging OpenWeather's API.",
      image: "/projects/overcast.png",
      link: "https://jasonmckinlay.github.io/Overcast/",
      github: "https://github.com/JasonMcKinlay/Overcast",
      tags: ["React", "Git", "GitHub", "REST APIs", "JavaScript", "Node.js"],
    },
    {
      title: "QuickPlate",
      description: "A cloud-native full-stack healthier meal-delivery service optimized for an athletic diet.",
      image: "/projects/quickplate.png",
      link: "http://jason-mckinlay-quickplate-frontend-build.s3-website.us-east-2.amazonaws.com/",
      github: "https://github.com/QuickPlate",
      tags: ["AWS", "React", "Spring Boot", "Java", "PostgreSQL", "Docker", "GitHub"],
    },
    {
      title: "SafeSign",
      description: `A real-time, low-latency ASL translation application for times of need or emergencies.`,
      image: "/projects/safesign.png",
      incomplete: true,
      tags: ["React", "Tailwind", "Machine Learning", "Azure"],
    },
  ];

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
              I'm a software engineer and computer science student passionate about the art of building full-stack applications that make a difference.
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <Button text="Learn More"/>
          <Button text="Contact Me" />
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
        className="relative flex flex-col justify-center items-center px-4 pb-2"
        id="about-me-section"
      >

        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl border-t border-white/20 pt-16"></div>
        </div>
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
              Outside of tech, I constantly chase self-improvement, with hobbies like cooking or weightlifting. It's every one of these aspects that shapes the kind of developer I am, and it keeps me excited for what's in store next. Let's get to work together.
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
        {/* <div className="w-full flex justify-end">
          <SignatureLogo />
        </div> */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative flex flex-col justify-center items-center px-4 pb-8 pt-12"
        id="skills-section"
      >

        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl border-t border-white/20 pt-12"></div>
        </div>
      <div className="relative flex flex-col items-center justify-center w-6xl max-w-full px-4 z-10" id="skills-section">
        <h2 className="text-4xl font-bold dark:text-white mb-8">Skills</h2>
        <div className="grid grid-cols-6 md:grid-cols-6 sm:grid-cols-4 gap-8 max-w-5xl w-full text-center">
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
            <div className={`bg-white/5 hover:bg-teal-200/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-teal-300/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-teal-200/30`}>
              <img src="/icons/tailwind.png" alt="tailwind-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">Tailwind</h3>
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
            <div className={`bg-white/5 hover:bg-lime-300/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-lime-300/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-lime-300/30`}>
              <img src="/icons/node.png" alt="nodejs-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">Node.js</h3>
            </div>
            <div className={`bg-white/5 hover:bg-blue-400/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-blue-400/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-blue-600/30`}>
              <img src="/icons/docker.png" alt="docker-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">Docker</h3>
            </div>
            <div className={`bg-white/5 hover:bg-red-400/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-red-400/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-red-400/30`}>
              <img src="/icons/git.png" alt="git-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">Git</h3>
            </div>
            <div className={`bg-white/5 hover:bg-purple-400/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-purple-400/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-purple-400/30`}>
              <img src="/icons/github.png" alt="github-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">GitHub</h3>
            </div>
            <div className={`bg-white/5 hover:bg-orange-300/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-orange-300/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-orange-300/30`}>
              <img src="/icons/aws.png" alt="aws-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">AWS</h3>
            </div>
            <div className={`bg-white/5 hover:bg-white/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-white/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-white/20`}>
              <img src="/icons/next.png" alt="nextjs-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">Next.js</h3>
            </div>
            <div className={`bg-white/5 hover:bg-blue-300/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-blue-300/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-blue-400/30`}>
              <img src="/icons/terminal.png" alt="linux-icon" className="w-10 h-10 mx-auto mb-2 object-contain" />
              <h3 className="text-md text-white font-extralight">Linux</h3>
            </div>
        </div>
      </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative flex flex-col justify-center items-center px-4 pt-12 pb-12"
        id="projects-section"
      >
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl border-t border-white/20 pt-12"></div>
        </div>

        <div className="relative flex flex-col items-center justify-center w-full max-w-6xl px-4 z-10">
          <h2 className="text-4xl font-bold dark:text-white mb-8">Here's what I've been doing.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {projects.map((p) => (
              <div key={p.title} className="group block bg-white/5 hover:bg-white/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-white/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-slate-600/50 w-full">
                <div className="h-40 w-full bg-slate-800/40 rounded-md overflow-hidden mb-4 flex items-center justify-center">
                  <img src={p.image} alt={p.title} className="object-contain w-full" />
                </div>
                <h3 className="text-xl font-semibold dark:text-white mb-1">{p.title}</h3>
                <p className="text-sm dark:text-neutral-200 mb-3 font-extralight">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs bg-white/7 text-white/90 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="flex flex-row">

                {p.link && (
                <a href={p.link}>
                  <button className="flex flex-row items-center gap-2 bg-black dark:bg-white/10 dark:backdrop-blur-md dark:border-white/20 rounded-full w-fit ring-2 dark:ring-white/20 hover:ring-white text-white hover:text-black px-4 py-2 hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-200 transition mt-4 shadow-black/20 shadow-lg hover:shadow-slate-600 duration-275">
                    <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                      width="13px" height="13px" viewBox="0 0 442.246 442.246">
                    <g>
                      <g>
                        <path d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
                          l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
                          c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
                          c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
                          C453.109,146.306,453.109,75.926,409.657,32.474z"/>
                        <path d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
                          l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
                          c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
                          c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
                          C230.035,335.719,220.243,334.496,184.135,320.114z"/>
                      </g>
                    </g>
                    </svg>
                  View
                  </button>
                </a>)}

                {p.github && (
                <a href={p.github}>
                  <button className="flex flex-row items-center gap-2 bg-black dark:bg-white/90 dark:backdrop-blur-md rounded-full w-fit text-black px-4 py-2 hover:scale-105 hover:bg-gray-800 dark:hover:bg-neutral-300 transition mt-4 mx-4 shadow-black/20 shadow-lg duration-275">
                    <svg width="16" height="16" viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"/>
                    </svg>
                  GitHub
                  </button>
                </a>)}

                {p.incomplete && (
                  <div className="flex flex-row items-center gap-2 bg-black dark:bg-white/90 dark:backdrop-blur-md rounded-full w-fit text-black px-4 py-2 hover:bg-gray-800 dark:hover:bg-neutral-300 transition mt-4 px-6 shadow-black/20 shadow-lg duration-275">
                    Coming soon!
                  </div>
                )}
                
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <Carousel projects={projects} /> */}
      </motion.div>

      <div className="pt-6 w-full flex justify-center">
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
        className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 pt-12 pb-12"
        id="contact-section"
      >

        <div className="relative flex flex-col items-center justify-center w-full max-w-6xl px-4 z-10">
          <h2 className="text-4xl font-bold dark:text-white mb-4">Contact Me</h2>
          <p className="dark:text-neutral-200 mb-8 font-extralight w-lg text-center">Whether it's a new opportunity or you just want to connect, feel free to reach out. I'm always looking forward to what's next. Let's get in touch.</p>
          <div className="w-3/4 flex flex-col md:flex-row items-center justify-center gap-8 mb-4">

            <div className="bg-white/5 hover:bg-white/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-white/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-slate-600/50 w-full">
              <div className="flex flex-col items-center gap-4">
                <svg width="32px" height="32px" fill="currentColor" viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" className="">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)" fill="#ffffff">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                              <path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z" id="email-[#1572]">

                              </path>
                          </g>
                      </g>
                  </g>
                </svg>
                <h3 className="font-light dark:text-white">jasonmckinlay.us@gmail.com</h3>
              </div>
            </div>

            <div className="bg-white/5 hover:bg-white/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-white/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-slate-600/50 w-full">
              <div className="flex flex-col items-center gap-4">
                <svg width="36x" height="36px" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 3.47059V20.5294C22 20.9194 21.8451 21.2935 21.5693 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47059C3.08056 22 2.70651 21.8451 2.43073 21.5693C2.15494 21.2935 2 20.9194 2 20.5294V3.47059C2 3.08056 2.15494 2.70651 2.43073 2.43073C2.70651 2.15494 3.08056 2 3.47059 2H20.5294C20.9194 2 21.2935 2.15494 21.5693 2.43073C21.8451 2.70651 22 3.08056 22 3.47059ZM7.88235 9.64706H4.94118V19.0588H7.88235V9.64706ZM8.14706 6.41177C8.14861 6.18929 8.10632 5.96869 8.02261 5.76255C7.93891 5.55642 7.81542 5.36879 7.65919 5.21039C7.50297 5.05198 7.31708 4.92589 7.11213 4.83933C6.90718 4.75277 6.68718 4.70742 6.46471 4.70588H6.41177C5.95934 4.70588 5.52544 4.88561 5.20552 5.20552C4.88561 5.52544 4.70588 5.95934 4.70588 6.41177C4.70588 6.86419 4.88561 7.29809 5.20552 7.61801C5.52544 7.93792 5.95934 8.11765 6.41177 8.11765C6.63426 8.12312 6.85565 8.0847 7.06328 8.00458C7.27092 7.92447 7.46074 7.80422 7.62189 7.65072C7.78304 7.49722 7.91237 7.31346 8.00248 7.10996C8.09259 6.90646 8.14172 6.6872 8.14706 6.46471V6.41177ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7799 9.77345C13.2576 10.0397 12.8143 10.4383 12.4941 10.9294H12.4118V9.64706H9.64706V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.3681 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z"/>
                </svg>
                <h3 className="font-light dark:text-white">linkedin.com/jason-mckinlay</h3>
              </div>
            </div>

            <div className="bg-white/5 hover:bg-white/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-white/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-slate-600/50 w-full">
              <div className="flex flex-col items-center gap-4">
                <svg width="32px" height="32px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="#ffffff" fillRule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">

                </path>
                            </g>
                        </g>
                    </g>
                </svg>
                <h3 className="font-light dark:text-white">github.com/JasonMcKinlay</h3>
              </div>
            </div>

          </div>
          <SignatureLogo />
        </div>

        {/* <Carousel projects={projects} /> */}
      </motion.div>

    </AuroraBackground>
  );
}
