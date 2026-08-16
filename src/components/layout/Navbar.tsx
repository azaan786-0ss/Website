import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "About", to: "/about" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] flex flex-col items-center pointer-events-none transition-all duration-300 ${isScrolled ? "px-3 sm:px-6 pt-3" : "px-0 pt-0"}`}>
      <nav 
        className={`pointer-events-auto w-full transition-all duration-300 ease-out backdrop-blur-xl flex flex-col justify-center ${
          isScrolled 
            ? "max-w-7xl rounded-full bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700/60 shadow-lg shadow-indigo-950/5 dark:shadow-slate-950/50 h-16 px-4 sm:px-6" 
            : "max-w-[4000px] rounded-none bg-white/80 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800/80 shadow-xs h-20 px-6 sm:px-8"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-2.5 relative z-50 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-transform">
              N
            </div>
            <span className="font-display-md text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              IronStack <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Systems</span>
            </span>
          </Link>
          
          {/* Desktop Navigation Links & Theme Switcher */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link 
                  key={link.name}
                  to={link.to} 
                  className={`font-semibold text-sm xl:text-base px-4 py-2 rounded-full transition-all ${
                    isActive 
                      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-950/50" 
                      : "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 ml-1 rounded-full text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center cursor-pointer active:scale-95"
              aria-label="Toggle light/dark theme"
              title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <span className="material-symbols-outlined text-[20px]">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <Link
              to="/start-project"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm xl:text-base font-bold rounded-full transition-all duration-300 shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/35 hover:-translate-y-0.5 ml-2 whitespace-nowrap"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center active:scale-95"
              aria-label="Toggle theme"
            >
              <span className="material-symbols-outlined text-[22px]">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <button 
              className="p-2 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors relative z-50 flex items-center justify-center active:scale-95"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-[26px]">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Dropdown (Direct Header Extension) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`pointer-events-auto w-full overflow-hidden lg:hidden ${
              isScrolled 
                ? "max-w-7xl mt-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 shadow-xl" 
                : "max-w-[4000px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/70 dark:border-slate-800 shadow-md"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/90 dark:bg-indigo-950/60 font-bold"
                        : "text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                    )}
                  </Link>
                );
              })}

              <button
                onClick={toggleTheme}
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px]">
                    {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                  </span>
                  <span>Theme</span>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </span>
              </button>
              
              <div className="pt-3 mt-1 border-t border-slate-100 dark:border-slate-800">
                <Link
                  to="/start-project"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-sm shadow-md shadow-indigo-600/20 active:scale-[0.99] transition-all"
                >
                  <span>Start a Project</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


