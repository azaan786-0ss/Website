import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer 
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12 w-full relative z-10 overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 md:gap-12 pb-12 border-b border-slate-900">
          
          {/* Brand block */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block font-display-md text-xl md:text-2xl font-bold tracking-tighter text-white">
              Nexus Strategy
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Next-generation B2B engineering strategy and architecture consulting. Delivering unshakeable digital foundations.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 text-slate-400 hover:bg-indigo-600 hover:text-white flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 text-slate-400 hover:bg-indigo-600 hover:text-white flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-[20px]">alternate_email</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 text-slate-400 hover:bg-indigo-600 hover:text-white flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-[20px]">code</span>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-4 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Services</h4>
              <ul className="space-y-3">
                <li><Link className="text-sm hover:text-indigo-400 hover:underline transition-colors" to="/services/web-design">Web Design</Link></li>
                <li><Link className="text-sm hover:text-indigo-400 hover:underline transition-colors" to="/services/mobile-app">Mobile Apps</Link></li>
                <li><Link className="text-sm hover:text-indigo-400 hover:underline transition-colors" to="/services/ai-solutions">AI Solutions</Link></li>
                <li><Link className="text-sm hover:text-indigo-400 hover:underline transition-colors" to="/services/cloud-architecture">Cloud Architecture</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Company</h4>
              <ul className="space-y-3">
                <li><Link className="text-sm hover:text-indigo-400 hover:underline transition-colors" to="/about">About Us</Link></li>
                <li><a className="text-sm hover:text-indigo-400 hover:underline transition-colors" href="#">Careers</a></li>
                <li><Link className="text-sm hover:text-indigo-400 hover:underline transition-colors" to="/start-project">Contact</Link></li>
                <li><a className="text-sm hover:text-indigo-400 hover:underline transition-colors" href="#">Newsroom</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Legal</h4>
              <ul className="space-y-3">
                <li><a className="text-sm hover:text-indigo-400 hover:underline transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="text-sm hover:text-indigo-400 hover:underline transition-colors" href="#">Terms of Service</a></li>
                <li><a className="text-sm hover:text-indigo-400 hover:underline transition-colors" href="#">Security Standards</a></li>
                <li><a className="text-sm hover:text-indigo-400 hover:underline transition-colors" href="#">Compliance</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="text-slate-500 flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-indigo-500">verified</span>
            © {new Date().getFullYear()} Nexus Strategy. Engineering Excellence for Global Leaders.
          </div>
          <div className="flex gap-6 text-slate-500">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">United States (English)</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Server Status: Normal</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
