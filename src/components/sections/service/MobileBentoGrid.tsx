import { motion } from "framer-motion";

export function MobileBentoGrid() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-space-32 border-t border-outline-variant/30" id="features">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-space-24"
      >
        <h2 className="font-display-lg text-display-lg mb-6">Engineering Capabilities</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          A comprehensive approach to mobile development, ensuring excellence from architecture to App Store.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-6 auto-rows-[minmax(280px,auto)]">
        {/* React Native & Flutter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-1 md:col-span-12 xl:col-span-8 glass-card p-6 sm:p-8 xl:p-space-12 rounded-2xl flex flex-col justify-end relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary-container mb-4 xl:mb-6 text-4xl xl:text-5xl">layers</span>
            <h3 className="font-display-md text-xl sm:text-2xl xl:text-display-md mb-3 xl:mb-4">Cross-Platform Excellence</h3>
            <p className="font-body-lg text-sm sm:text-base xl:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              React Native & Flutter development that achieves near-native performance while sharing up to 90% of the codebase.
            </p>
          </div>
        </motion.div>
        {/* Native Dev */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-1 md:col-span-6 xl:col-span-4 glass-card p-6 sm:p-8 xl:p-space-12 rounded-2xl flex flex-col justify-between group"
        >
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors text-3xl xl:text-4xl mb-6 xl:mb-8">smartphone</span>
          <div>
            <h3 className="font-heading-lg text-lg sm:text-xl xl:text-heading-lg mb-2 xl:mb-3">Native iOS/Android</h3>
            <p className="font-body-md text-xs sm:text-sm xl:text-body-md text-on-surface-variant leading-relaxed">Swift & Kotlin expertise for hardware-intensive applications.</p>
          </div>
        </motion.div>
        {/* Offline Sync */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-1 md:col-span-6 xl:col-span-4 glass-card p-6 sm:p-8 xl:p-space-12 rounded-2xl flex flex-col justify-between group"
        >
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors text-3xl xl:text-4xl mb-6 xl:mb-8">sync_saved_locally</span>
          <div>
            <h3 className="font-heading-lg text-lg sm:text-xl xl:text-heading-lg mb-2 xl:mb-3">Offline Sync</h3>
            <p className="font-body-md text-xs sm:text-sm xl:text-body-md text-on-surface-variant leading-relaxed">Robust local-first architectures ensuring seamless operation without connectivity.</p>
          </div>
        </motion.div>
        {/* Biometric Security */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-1 md:col-span-6 xl:col-span-4 glass-card p-6 sm:p-8 xl:p-space-12 rounded-2xl flex flex-col justify-between group"
        >
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors text-3xl xl:text-4xl mb-6 xl:mb-8">fingerprint</span>
          <div>
            <h3 className="font-heading-lg text-lg sm:text-xl xl:text-heading-lg mb-2 xl:mb-3">Biometric Security</h3>
            <p className="font-body-md text-xs sm:text-sm xl:text-body-md text-on-surface-variant leading-relaxed">Enterprise-grade authentication utilizing FaceID and TouchID APIs.</p>
          </div>
        </motion.div>
        {/* App Store Optimization */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-1 md:col-span-6 xl:col-span-4 glass-card p-6 sm:p-8 xl:p-space-12 rounded-2xl flex flex-col justify-between group"
        >
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors text-3xl xl:text-4xl mb-6 xl:mb-8">storefront</span>
          <div>
            <h3 className="font-heading-lg text-lg sm:text-xl xl:text-heading-lg mb-2 xl:mb-3">ASO</h3>
            <p className="font-body-md text-xs sm:text-sm xl:text-body-md text-on-surface-variant leading-relaxed">App Store Optimization and automated deployment pipelines.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
