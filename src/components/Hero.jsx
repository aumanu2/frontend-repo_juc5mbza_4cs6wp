import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 dark:from-black/40 dark:via-black/20 dark:to-black/60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600"
        >
          Modern, Playful, Interactive Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto"
        >
          I craft delightful web experiences with performance, accessibility and a sprinkle of 3D magic.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="inline-flex items-center px-5 py-3 rounded-full bg-indigo-600 text-white font-medium shadow hover:bg-indigo-500 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-full border border-black/10 dark:border-white/20 text-gray-800 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
