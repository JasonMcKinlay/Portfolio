"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  description?: string;
  image?: string;
  link?: string;
  github?: string;
  tags?: string[];
};

export default function Carousel({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  // useEffect(() => {
  //   timerRef.current = window.setInterval(() => {
  //     setIndex((i) => (i + 1) % projects.length);
  //   }, 6000);
  //   return () => {
  //     if (timerRef.current) window.clearInterval(timerRef.current);
  //   };
  // }, [projects.length]);

  function prev() {
    setIndex((i) => (i - 1 + projects.length) % projects.length);
  }

  function next() {
    setIndex((i) => (i + 1) % projects.length);
  }

  return (
    <div className="w-full max-w-4xl min-h-screen">
      <div className="relative">
        <AnimatePresence initial={false} mode="wait">
          {projects.map((p, i) =>
            i === index ? (
              <motion.div
                key={p.title}
                className="group block bg-white/5 hover:bg-white/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-white/30 transition duration-300 shadow-lg shadow-black/20 hover:shadow-slate-600/50 w-full"
                // initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.45 }}
              >
                <div className="h-80 w-full bg-slate-800/40 rounded-md overflow-hidden mb-4 flex items-center justify-center">
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="object-contain w-full" />
                  ) : (
                    <div className="text-sm text-neutral-300">No image</div>
                  )}
                </div>
                <h3 className="text-xl font-semibold dark:text-white mb-1">{p.title}</h3>
                <p className="text-sm dark:text-neutral-200 mb-3 font-extralight">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.tags?.map((t) => (
                    <span key={t} className="text-xs bg-white/7 text-white/90 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>

                <div className="flex flex-row mt-4">
                  {p.link && (
                    <a href={p.link} className="mr-2">
                      <button className="flex flex-row items-center gap-2 bg-black dark:bg-white/10 dark:backdrop-blur-md dark:border-white/20 rounded-full w-fit ring-2 dark:ring-white/20 hover:ring-white text-white hover:text-black px-4 py-2 hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-200 transition shadow-black/20 shadow-lg">
                        <svg
                          fill="currentColor"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="13px"
                          height="13px"
                          viewBox="0 0 442.246 442.246"
                        >
                          <g>
                            <g>
                              <path d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
                          l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
                          c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
                          c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
                          C453.109,146.306,453.109,75.926,409.657,32.474z" />
                              <path d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
                          l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
                          c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
                          c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
                          C230.035,335.719,220.243,334.496,184.135,320.114z" />
                            </g>
                          </g>
                        </svg>
                        View
                      </button>
                    </a>
                  )}

                  {p.github && (
                    <a href={p.github} className="ml-2">
                      <button className="flex flex-row items-center gap-2 bg-black dark:bg-white/90 dark:backdrop-blur-md rounded-full w-fit text-black px-4 py-2 hover:scale-105 hover:bg-gray-800 dark:hover:bg-neutral-300 transition shadow-black/20 shadow-lg">
                        <svg width="16" height="16" viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"/>
                        </svg>
                        GitHub
                      </button>
                    </a>
                  )}
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Prev / Next Controls */}
        <div className="absolute inset-y-1/2 left-3 -translate-y-1/2">
          <button
            aria-label="Previous project"
            onClick={prev}
            className="bg-white/5 hover:bg-white/10 p-2 rounded-full border border-white/20 shadow-md transform duration-275 hover:scale-105"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="absolute inset-y-1/2 right-3 -translate-y-1/2">
          <button
            aria-label="Next project"
            onClick={next}
            className="bg-white/5 hover:bg-white/10 p-2 rounded-full border border-white/20 shadow-md transform duration-275 hover:scale-105"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-6 justify-center">
          {projects.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to project ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
