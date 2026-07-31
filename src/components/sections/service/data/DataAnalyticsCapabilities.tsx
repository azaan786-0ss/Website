import { motion } from 'framer-motion';

export function DataAnalyticsCapabilities() {
  const capabilities = [
    {
      icon: 'hub',
      title: 'Data Pipeline Architecture',
      desc: 'Scalable ETL and ELT processes built with dbt and Fivetran to ensure data reliability across the enterprise.',
    },
    {
      icon: 'monitoring',
      title: 'Product Analytics',
      desc: 'Implementation of Mixpanel and PostHog for granular user journey tracking and feature adoption measurement.',
    },
    {
      icon: 'dashboard_customize',
      title: 'Custom BI Dashboards',
      desc: 'Tailored visualization layers in Looker or Tableau that surface critical KPIs to every stakeholder.',
    },
    {
      icon: 'storage',
      title: 'Data Warehousing',
      desc: 'Optimizing Snowflake and BigQuery architectures for cost-efficiency and high-performance querying.',
    },
    {
      icon: 'rebase_edit',
      title: 'CDP Integration',
      desc: 'Unifying customer profiles via Segment to power personalized marketing and product experiences.',
    },
    {
      icon: 'query_stats',
      title: 'Predictive Analytics',
      desc: 'Deploying machine learning models to forecast churn, LTV, and revenue growth with statistical rigor.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="py-space-32 bg-slate-50/70 border-y border-slate-200/60">
      <div className="px-6 md:px-8 max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-space-16"
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-space-4">
            Our Data Capabilities
          </h2>
          <p className="font-body-lg text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            End-to-end engineering that transforms your messy event streams into a competitive
            advantage.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <span
                    className="material-symbols-outlined text-[24px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
