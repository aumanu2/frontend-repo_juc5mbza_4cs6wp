import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Get In Touch
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-8 grid gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="w-full rounded-xl border border-black/10 dark:border-white/20 bg-white/80 dark:bg-white/5 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
            <input type="email" className="w-full rounded-xl border border-black/10 dark:border-white/20 bg-white/80 dark:bg-white/5 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email address" />
          </div>
          <textarea rows={5} className="w-full rounded-xl border border-black/10 dark:border-white/20 bg-white/80 dark:bg-white/5 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your message" />
          <div>
            <button className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-600 text-white font-medium shadow hover:bg-indigo-500 transition-colors">Send Message</button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
