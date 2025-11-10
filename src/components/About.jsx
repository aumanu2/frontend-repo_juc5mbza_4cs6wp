import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-200"
        >
          I’m a front‑end engineer who blends aesthetics with performance. I love building
          interactive, accessible interfaces and experimenting with motion and 3D to make
          products feel alive.
        </motion.p>
      </div>
    </section>
  );
}

export default About;
