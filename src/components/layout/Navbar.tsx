import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/80 dark:bg-bg-dark-primary/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center h-20">
        <Link to="/" className="font-display-md text-display-md tracking-tighter text-on-surface dark:text-on-primary-fixed">
          Nexus Strategy
        </Link>
        <div className="hidden md:flex items-center gap-space-8">
          <Link to="/" className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim hover:text-on-surface dark:hover:text-on-primary-fixed transition-colors hover:bg-accent-subtle dark:hover:bg-on-secondary-fixed-variant/10 px-3 py-2 rounded-DEFAULT">
            Home
          </Link>
          <Link to="/services" className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim hover:text-on-surface dark:hover:text-on-primary-fixed transition-colors hover:bg-accent-subtle dark:hover:bg-on-secondary-fixed-variant/10 px-3 py-2 rounded-DEFAULT">
            Services
          </Link>
          <Link to="/about" className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim hover:text-on-surface dark:hover:text-on-primary-fixed transition-colors hover:bg-accent-subtle dark:hover:bg-on-secondary-fixed-variant/10 px-3 py-2 rounded-DEFAULT">
            About
          </Link>
          <Link to="/services/mobile-app" className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim hover:text-on-surface dark:hover:text-on-primary-fixed transition-colors hover:bg-accent-subtle dark:hover:bg-on-secondary-fixed-variant/10 px-3 py-2 rounded-DEFAULT">
            Mobile Apps
          </Link>
          <Link to="/" className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim hover:text-on-surface dark:hover:text-on-primary-fixed transition-colors hover:bg-accent-subtle dark:hover:bg-on-secondary-fixed-variant/10 px-3 py-2 rounded-DEFAULT">
            Case Studies
          </Link>
          <Link
            to="/start-project"
            className="hidden md:inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-on-primary font-body-md text-body-md rounded-DEFAULT transition-all duration-300 shadow-lg shadow-primary-container/20 hover:-translate-y-0.5"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </nav>
  );
}
