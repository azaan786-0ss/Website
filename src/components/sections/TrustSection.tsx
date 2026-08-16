import { motion, type Variants } from 'framer-motion';
import { CircleDollarSign, Clock, MessageSquare, ShieldCheck } from 'lucide-react';

const trustItems = [
  {
    icon: CircleDollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden costs. Clear milestones and estimates.',
  },
  {
    icon: Clock,
    title: 'Weekly Progress Updates',
    description: 'Receive regular updates throughout development.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Founder Communication',
    description: 'Communicate directly with the engineering team.',
  },
  {
    icon: ShieldCheck,
    title: 'Post-Launch Support',
    description: 'We continue supporting your product after delivery.',
  },
];

export function TrustSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-[60px] md:pt-[100px] pb-4"
    >
      {trustItems.map((item, index) => {
        const Icon = item.icon;
        return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`
                group flex flex-col
                py-10 lg:py-4
                px-4 md:px-8 lg:px-10
                border-slate-100 dark:border-zinc-850
                first:pt-4 md:first:pt-10 lg:first:pt-4
                last:pb-4 md:last:pb-10 lg:last:pb-4
                ${index !== 3 ? 'border-b' : ''}
                ${index % 2 === 0 ? 'md:border-r' : 'md:border-r-0'}
                ${index > 1 ? 'md:border-b-0' : ''}
                ${index !== 3 ? 'lg:border-r' : 'lg:border-r-0'}
                lg:border-b-0
              `}
            >
              <div className="mb-4 text-slate-400 dark:text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 group-hover:scale-110 origin-left inline-flex">
                <Icon strokeWidth={1.5} size={24} />
              </div>
              <h3 className="text-[18px] font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 mb-2">
                {item.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-slate-500 dark:text-zinc-400 max-w-[220px] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
    </motion.div>
  );
}
