import React from 'react';
import { Rocket, User, Folder, Mail } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home', Icon: Rocket },
  { id: 'projects', label: 'Projects', Icon: Folder },
  { id: 'about', label: 'About', Icon: User },
  { id: 'contact', label: 'Contact', Icon: Mail },
];

function Navbar() {
  const handleScroll = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-black/40 border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" onClick={handleScroll('home')} className="font-semibold tracking-tight text-lg">
          <span className="text-indigo-600">flames</span>.portfolio
        </a>
        <ul className="flex items-center gap-2 sm:gap-4">
          {links.map(({ id, label, Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={handleScroll(id)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100/70 dark:hover:bg-white/10 transition-colors"
              >
                <Icon className="w-4 h-4" /> {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
