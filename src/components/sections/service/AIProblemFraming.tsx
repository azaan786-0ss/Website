import { motion } from "framer-motion";

export function AIProblemFraming() {

  const challenges = [
    {
      num: "01",
      title: "Manual operational bottlenecks",
      desc: "High-friction workflows requiring constant human oversight degrade efficiency and increase error rates."
    },
    {
      num: "02",
      title: "Untapped data potential",
      desc: "Vast repositories of structured and unstructured data remain dormant, yielding zero strategic insight."
    },
    {
      num: "03",
      title: "Slow decision-making cycles",
      desc: "Reliance on retrospective analytics rather than predictive models delays critical market responses."
    }
  ];

  return (
    <section className="bg-bg-secondary py-32 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
          
          {/* Sticky Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/3 lg:sticky lg:top-40"
          >
            <h2 className="font-display-lg text-4xl md:text-5xl font-bold text-slate-900 mb-6">The Challenge Landscape</h2>
            <p className="font-body-lg text-lg text-slate-600 leading-relaxed">
              Legacy systems struggle to process modern data volumes, leading to inefficiencies that compound at scale.
            </p>
          </motion.div>
          
          {/* Scrolling Right Column */}
          <div className="lg:w-2/3 flex flex-col gap-16 md:gap-32 pb-16">
            {challenges.map((challenge, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <span className="text-5xl md:text-7xl font-bold text-slate-200 group-hover:text-indigo-600 transition-colors duration-500 font-mono tracking-tighter">
                    {challenge.num}
                  </span>
                  <div className="flex flex-col pt-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 transition-colors duration-500 group-hover:text-indigo-600">
                      {challenge.title}
                    </h3>
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <p className="text-lg text-slate-600 leading-relaxed transition-transform duration-500 transform group-hover:translate-x-6 max-w-xl">
                        {challenge.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
