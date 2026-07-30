import { Link } from "react-router-dom";

export function ServiceBackLink() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-8 pt-8">
      <Link 
        to="/services" 
        className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors font-medium text-sm group"
      >
        <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
        Back to Services
      </Link>
    </div>
  );
}
