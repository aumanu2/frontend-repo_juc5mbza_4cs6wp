import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A playful hero using Spline and smooth scroll interactions.',
    icon: Sparkles,
    tags: ['Spline', 'Framer Motion', 'Vite']
  },
  {
    title: 'Realtime Dashboard',
    description: 'Streaming metrics with beautiful micro-interactions.',
    icon: Rocket,
    tags: ['WebSockets', 'Tailwind', 'React']
  },
  {
    title: 'Dev Tools Suite',
    description: 'CLI + UI toolkit for faster developer workflows.',
    icon: Code,
    tags: ['Node', 'TypeScript', 'Design Systems']
  }
];

function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Selected Projects
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, icon: Icon, tags }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 border border-black/5 dark:border-white/10">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
