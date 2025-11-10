import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Enable smooth scrolling behavior for anchor links across the page
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    return () => {
      if (typeof window !== 'undefined') {
        document.documentElement.style.scrollBehavior = '';
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white dark:from-black dark:to-neutral-900 text-gray-900 dark:text-gray-50">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
