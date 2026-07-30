import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function BrandIdentityShowcase() {
  return (
    <section className="py-space-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-slate-800"
        >
          <div className="p-8 sm:p-12 lg:p-16 lg:w-1/2 flex flex-col justify-center">
            <span className="text-indigo-400 font-caption text-xs font-semibold uppercase tracking-widest mb-space-4 block">Featured Transformation</span>
            <h2 className="text-white font-display-lg text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-space-6 leading-tight">Cloud Platform Complete Rebrand</h2>
            <div className="flex items-center gap-6 mb-space-8">
              <div className="text-white text-4xl sm:text-5xl font-extrabold text-indigo-400">300%</div>
              <div className="text-slate-300 text-sm sm:text-base max-w-[170px] leading-snug">Increase in Enterprise Inquiries</div>
            </div>
            <Link to="/start-project">
              <motion.button 
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="w-fit px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30"
              >
                View Brand Showcase
              </motion.button>
            </Link>
          </div>
          <div 
            className="lg:w-1/2 h-80 lg:h-auto min-h-[380px] bg-cover bg-center" 
            title="A sophisticated collage of premium brand identity assets for a cloud technology company." 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnereYSEnpwlVx5J9wazO9Eny6hOaRZyVK0nuRNdV1FzP6oGd59M-ihGRDr7Lrf7l-6MwON0BslWDa8nHfQ31Sk7QDS2Fs4ZvmhdT9T_0UXmnDzN6kL5uFlHFwizjDRytQ9nu_wlj_rOkdwCjtQjM2sHui2cinZQqGtEcubsIC4ziIP7gonjdmJPmyyn09EjlMPTyVFvwR1jK_iwEXiVXSW0JQcjXJHY62RxYT_QgNWAePAgDNNAWsiw')" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
