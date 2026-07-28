export function WhyWeExistSection() {
  return (
    <section className="py-space-32 px-8 max-w-[1280px] mx-auto bg-bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-8 items-center">
        <div className="md:col-span-5">
          <img className="w-full h-[500px] object-cover rounded-DEFAULT border border-border" data-alt="A clean, modern workspace featuring multiple high-end monitors displaying complex, dark-mode code and architectural diagrams. The setting is a minimalist office with soft, diffused natural light pouring through a large window, creating a calm, focused, and professional atmosphere. The desk is uncluttered, emphasizing engineering rigor and precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCydfd8IbZHMlg7Y3hPEmSylnMsPryI2ihacI-O3FDnym9ntUzRP0HRG5XUFD8aorxyBgtnnS7MGhv0YpXJ_RZ2zdL2G5rAjXbneP5xfYkI_hd5a0jfzWGlcOrQp2erDpHouiGFsrf04tiRP2UOMP1x8JltO0f3PJRlacCkTd3qGJFJhSl9WUqSeMvHNEdjZemVd11edGA_VCj3-PK2DBN9j6KqJkUyr0a_GDRq_XpDSjSS62atrvfGwqNi2ziQ3y98lwyVcz1XXDhF" alt="Workspace" />
        </div>
        <div className="md:col-span-1"></div>
        <div className="md:col-span-6">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-space-6">Why we exist</h2>
          <p className="font-body-lg text-body-lg text-text-secondary mb-space-6">
            Nexus Strategy was born from a frustration with the ephemeral nature of modern digital agencies. Too often, we saw brilliant ideas hampered by fragile execution and short-term thinking.
          </p>
          <p className="font-body-lg text-body-lg text-text-secondary">
            We exist to bridge the gap between visionary strategy and meticulous technical execution. We don't just build products; we engineer systems that empower ambitious companies to lead their industries with unshakeable digital foundations.
          </p>
        </div>
      </div>
    </section>
  );
}
