import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const CapabilityCard = ({ item, idx, total }: { item: any; idx: number; total: number }) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 15%', 'end 15%'],
  });

  const isLast = idx === total - 1;

  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, isLast ? 0 : -40]);

  return (
    <div ref={targetRef} className="w-full relative" style={{ zIndex: idx + 1 }}>
      <motion.div
        className="sticky top-[15vh] group bg-white dark:bg-[#111111] p-8 sm:p-10 rounded-[32px] border border-slate-200 dark:border-[#262626] shadow-2xl flex flex-col sm:flex-row gap-6 sm:gap-8 items-start origin-top"
        style={{
          scale,
          opacity,
          y,
        }}
      >
        <div className="w-16 h-16 shrink-0 bg-indigo-50 dark:bg-[#050505] text-indigo-600 dark:text-[#c084fc] rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 dark:group-hover:bg-[#4f46e5] group-hover:text-white dark:group-hover:text-[#fafafa] group-hover:-rotate-3 transition-all duration-300 shadow-sm">
          <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
        </div>
        <div className="flex-1 pt-1">
          <h3 className="font-heading-lg text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#fafafa] mb-3 group-hover:text-indigo-600 dark:group-hover:text-[#c084fc] transition-colors">
            {item.title}
          </h3>
          <p className="text-slate-600 dark:text-[#a3a3a3] text-base sm:text-lg leading-relaxed max-w-2xl">
            {item.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export function ApiDevelopmentCapabilities() {
  const capabilities = [
    {
      icon: 'api',
      title: 'RESTful & GraphQL API Engineering',
      desc: 'Architecting intuitive, predictable, and resource-efficient interfaces for every frontend and client type.',
    },
    {
      icon: 'hub',
      title: 'Microservices Architecture & Decoupling',
      desc: 'Breaking down monoliths into scalable, independent services that communicate via high-performance protocols.',
    },
    {
      icon: 'extension',
      title: 'Third-Party & Enterprise Integrations',
      desc: 'Seamlessly bridging SaaS platforms, legacy ERP systems, and modern cloud infrastructure.',
    },
    {
      icon: 'encrypted',
      title: 'Security, Auth & Rate Limiting',
      desc: 'Implementing OAuth2, JWT, and mTLS alongside granular throttle policies to protect your data assets.',
    },
    {
      icon: 'bolt',
      title: 'Real-Time Event Streaming & Webhooks',
      desc: 'Enabling reactive systems with Kafka, RabbitMQ, and instant webhook notifications for low-latency operations.',
    },
    {
      icon: 'terminal',
      title: 'Developer Portals & Interactive SDKs',
      desc: 'Empowering third-party developers with Swagger docs, sandbox environments, and auto-generated client libraries.',
    },
  ];

  return (
    <section className="py-space-32 bg-slate-50/70 dark:bg-[#050505] px-6 md:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-space-16"
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#fafafa] mb-space-4">
            Core Capabilities
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 dark:bg-[#4f46e5] rounded-full mb-6"></div>
          <p className="font-body-lg text-slate-600 dark:text-[#a3a3a3] max-w-2xl text-base sm:text-lg">
            End-to-end API lifecycle management tailored for scale, speed, and enterprise
            resilience.
          </p>
        </motion.div>

        <div className="flex flex-col max-w-4xl mx-auto w-full gap-8 pb-[10vh]">
          {capabilities.map((item, idx) => (
            <CapabilityCard key={idx} item={item} idx={idx} total={capabilities.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
