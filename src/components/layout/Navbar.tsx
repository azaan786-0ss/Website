import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

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
    { name: "Case Studies", to: "/" },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none transition-all duration-500 ease-in-out ${isScrolled ? "px-2 sm:px-4 pt-2 sm:pt-4" : "px-0 pt-0"}`}>
      <nav 
        className={`pointer-events-auto w-full transition-all duration-500 ease-in-out backdrop-blur-md flex flex-col justify-center ${
          isScrolled 
            ? "max-w-7xl rounded-full bg-white/95 border border-slate-200/60 shadow-lg shadow-black/5 h-16" 
            : "max-w-[4000px] rounded-none bg-white/80 border-b border-slate-200/50 shadow-sm h-20"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center h-full">
          <Link to="/" onClick={closeMobileMenu} className="font-display-md text-xl md:text-2xl font-bold tracking-tighter text-slate-900 whitespace-nowrap relative z-50">
            Nexus Strategy
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.to} 
                className="font-medium text-sm xl:text-base text-slate-600 hover:text-indigo-600 transition-colors hover:bg-indigo-50 px-3 xl:px-4 py-2 rounded-full"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/start-project"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm xl:text-base font-semibold rounded-full transition-all duration-300 shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 ml-2 whitespace-nowrap"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 -mr-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors relative z-50 flex items-center justify-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed inset-0 bg-white pointer-events-auto flex flex-col z-40 overflow-y-auto lg:hidden shadow-xl border-t border-slate-100 ${isScrolled ? "top-[4.5rem] rounded-b-3xl" : "top-20"}`}
          >
            <div className="flex flex-col px-6 pt-6 pb-12 gap-2 h-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    onClick={closeMobileMenu}
                    className="block text-xl sm:text-2xl font-semibold text-slate-800 py-4 border-b border-slate-100 hover:text-indigo-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-8"
              >
                <Link
                  to="/start-project"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20"
                >
                  Start a Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
