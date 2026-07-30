
import { motion } from "framer-motion";

export function DataAnalyticsDeliverables() {
  const deliverables = [
    { title: "Warehouse Schema", desc: "Documented and optimized Star-schema for analytical speed." },
    { title: "Automated ETL Pipelines", desc: "Robust data movers ensuring <1% failure rates on daily syncs." },
    { title: "Executive BI Dashboards", desc: "Board-ready reporting with drill-down functionality." },
    { title: "Global Tracking Plan", desc: "The source of truth for all events across your product ecosystem." },
    { title: "Anomaly Detection", desc: "Proactive Slack/Email alerts for business metric deviations." },
  ];

  const dataStack = [
    "Snowflake", "BigQuery", "dbt", "Looker", "PostHog", "Mixpanel", "Segment", "Fivetran", "Python"
  ];

  return (
    <section className="py-space-32 bg-slate-50/80 border-y border-slate-200/80 overflow-hidden">
      <div className="px-6 md:px-8 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display-md text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">Hard Deliverables</h2>
          <ul className="space-y-4">
            {deliverables.map((item, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-indigo-300 transition-all group"
              >
                <span className="material-symbols-outlined text-indigo-600 text-[24px] mt-0.5 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                  <p className="text-slate-600 text-sm mt-0.5">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all"
        >
          <h3 className="font-caption text-xs uppercase font-bold text-slate-400 tracking-widest mb-6 text-center">Our Certified Data Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            {dataStack.map((tool, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                className="p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm text-slate-800 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/50 shadow-xs transition-all cursor-pointer flex items-center justify-center"
              >
                {tool}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-indigo-50/60 rounded-2xl border border-indigo-100">
            <p className="text-slate-700 text-sm italic leading-relaxed">
              "We select the right tool for the job, ensuring your infrastructure is built for future scale without unnecessary technical debt."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
