export function Footer() {
  return (
    <footer className="bg-bg-secondary dark:bg-bg-dark-secondary w-full py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="font-display-md text-display-md text-on-surface dark:text-on-primary-fixed mb-4">
            Nexus Strategy
          </div>
          <p className="font-caption text-caption text-primary dark:text-inverse-primary">
            © 2024 Nexus Strategy. Engineering Excellence for Global Leaders.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-caption text-caption font-semibold text-on-surface">Legal</h4>
          <a className="font-caption text-caption text-text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary hover:underline transition-all" href="#">Privacy Policy</a>
          <a className="font-caption text-caption text-text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary hover:underline transition-all" href="#">Terms of Service</a>
          <a className="font-caption text-caption text-text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary hover:underline transition-all" href="#">Cookie Policy</a>
          <a className="font-caption text-caption text-text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary hover:underline transition-all" href="#">Security</a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-caption text-caption font-semibold text-on-surface">Company</h4>
          <a className="font-caption text-caption text-text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary hover:underline transition-all" href="#">About</a>
          <a className="font-caption text-caption text-text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary hover:underline transition-all" href="#">Careers</a>
          <a className="font-caption text-caption text-text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary hover:underline transition-all" href="#">Contact</a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-caption text-caption font-semibold text-on-surface">Social</h4>
          <a className="font-caption text-caption text-text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary hover:underline transition-all" href="#">LinkedIn</a>
          <a className="font-caption text-caption text-text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary hover:underline transition-all" href="#">Twitter</a>
          <a className="font-caption text-caption text-text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary hover:underline transition-all" href="#">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
