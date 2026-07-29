import React from "react";

export function ProductEngineeringDeliverables() {
  return (
    <section className="py-space-32 px-space-6 md:px-8 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-space-16">
        {/* Left: Tangible Deliverables */}
        <div className="flex-1">
          <h2 className="font-heading-lg text-heading-lg text-on-surface mb-space-8">Tangible Deliverables</h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <div>
                <div className="font-heading-md text-on-surface">Scalable Architecture Blueprint</div>
                <p className="text-text-secondary text-body-md">Comprehensive technical documentation mapping every system component and data flow.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <div>
                <div className="font-heading-md text-on-surface">Production-Ready Codebase</div>
                <p className="text-text-secondary text-body-md">Clean, tested, and documented code following industry-best practices and security standards.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <div>
                <div className="font-heading-md text-on-surface">Automated CI/CD Pipelines</div>
                <p className="text-text-secondary text-body-md">Fully automated deployment workflows to ensure rapid and reliable release cycles.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <div>
                <div className="font-heading-md text-on-surface">Security &amp; Compliance Setup</div>
                <p className="text-text-secondary text-body-md">Implementation of SOC2/HIPAA ready security layers and automated auditing tools.</p>
              </div>
            </li>
          </ul>
        </div>
        
        {/* Right: Tech Pills */}
        <div className="flex-1 lg:pl-space-16 mt-8 lg:mt-0">
          <div className="bg-bg-secondary p-space-8 rounded-2xl border border-border shadow-sm">
            <h4 className="font-caption text-caption uppercase text-text-secondary tracking-widest mb-6">Expertise Stack</h4>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-surface rounded-lg font-code text-caption text-on-surface-variant border border-border">System Architecture</span>
              <span className="px-4 py-2 bg-surface rounded-lg font-code text-caption text-on-surface-variant border border-border">AWS/GCP/Azure</span>
              <span className="px-4 py-2 bg-surface rounded-lg font-code text-caption text-on-surface-variant border border-border">Full-Stack Frameworks</span>
              <span className="px-4 py-2 bg-surface rounded-lg font-code text-caption text-on-surface-variant border border-border">Kubernetes &amp; Docker</span>
              <span className="px-4 py-2 bg-surface rounded-lg font-code text-caption text-on-surface-variant border border-border">DevOps Automation</span>
              <span className="px-4 py-2 bg-surface rounded-lg font-code text-caption text-on-surface-variant border border-border">Security &amp; Audit</span>
              <span className="px-4 py-2 bg-surface rounded-lg font-code text-caption text-on-surface-variant border border-border">Performance Optimization</span>
              <span className="px-4 py-2 bg-surface rounded-lg font-code text-caption text-on-surface-variant border border-border">Event-Driven Design</span>
              <span className="px-4 py-2 bg-surface rounded-lg font-code text-caption text-on-surface-variant border border-border">Database Sharding</span>
            </div>
            
            <div className="mt-space-8 pt-space-8 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrU1pqUtK2zJCEu3ERmhaXpnF4vc8q9F3F3m-yfWKY_EVWkpR_-jFSCWinpUZDOl1BujcPsG_tvYH_deBV5mogbJmucx2D1_DXI8IMHY6WVcv0NmswF1kxOES87gFmF9ya_OjXGJrC-yNFxz4gULRQenUnqe_Ho3CJncM12k4fIuIaLAESRLt2-9M7pEUzxcc_RSbcfAdTiqAxqpFhV22UbrYBhUt1FRnfBEb24PcKctHny6gPs6LQgg" alt="Avatar 1" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyFidLhEuJKkMXDCYpW1xks2o9SCadWn0VvabohlQfAUrGCq6V3dOKMorPaiXpaJnOwYj45KXSuHORMvLuaaCmXaqlQDoiA0BhWYL_P-6JGPUl42X1YENkarm-URzgffANvPILRT-5yFjqNGvJ_6e-4qLAD8Cjf0QNunzz9qws7TPdIrNui-Gpl_79sutQiaf85uAjX8b-VYWR_woTUaSwE5m2sbeG1YhJNtfJyjvFU8lRUawLi5QbFQ" alt="Avatar 2" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTuzX0faphiqZ9oKraqmSPKuE2DI4MLJvThrhAJsMVIvA-xTC6JPfLXZtRccmzBMtvLRzOIcb-cRaovSO8RjJ0Sl8qmnZJJj683n_442LWQoHbpRkK2Mf8O2Df0bSVdXinrXxC0-g1IxX_iK6EPgp5fGq91zROCMt7BDiGeYvAdVJUNfsOrq1Nupkd_niAM9e4rfUP2hhYS8jzHu70GaxmqGj2RvF3ehvAwRKe02QjIEfu2S_EAEJ_EQ" alt="Avatar 3" />
                </div>
                <div className="text-caption text-text-secondary">Managed by elite engineering teams</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
