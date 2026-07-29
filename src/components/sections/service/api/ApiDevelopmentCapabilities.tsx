import React from "react";

export function ApiDevelopmentCapabilities() {
  return (
    <section className="px-space-6 py-space-32 max-w-7xl mx-auto">
      <div className="text-center mb-space-16">
        <h2 className="font-display-lg text-display-lg text-on-surface mb-space-4">Core Capabilities</h2>
        <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl mx-auto">End-to-end API lifecycle management tailored for scale and resilience.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-6">
        {/* Card 1 */}
        <div className="bg-white/70 backdrop-blur-md border border-outline-variant p-space-8 rounded-2xl flex flex-col gap-space-4 transition-all duration-300 hover:border-primary hover:shadow-[0_4px_20px_rgba(79,70,229,0.08)] group cursor-pointer">
          <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>api</span>
          <h3 className="font-heading-lg text-heading-lg group-hover:text-primary transition-colors">RESTful &amp; GraphQL API Engineering</h3>
          <p className="font-body-md text-body-md text-text-secondary">Architecting intuitive, predictable, and resource-efficient interfaces for every frontend and client type.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white/70 backdrop-blur-md border border-outline-variant p-space-8 rounded-2xl flex flex-col gap-space-4 transition-all duration-300 hover:border-primary hover:shadow-[0_4px_20px_rgba(79,70,229,0.08)] group cursor-pointer">
          <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
          <h3 className="font-heading-lg text-heading-lg group-hover:text-primary transition-colors">Microservices Architecture &amp; Decoupling</h3>
          <p className="font-body-md text-body-md text-text-secondary">Breaking down monoliths into scalable, independent services that communicate via high-performance protocols.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white/70 backdrop-blur-md border border-outline-variant p-space-8 rounded-2xl flex flex-col gap-space-4 transition-all duration-300 hover:border-primary hover:shadow-[0_4px_20px_rgba(79,70,229,0.08)] group cursor-pointer">
          <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>extension</span>
          <h3 className="font-heading-lg text-heading-lg group-hover:text-primary transition-colors">Third-Party &amp; Enterprise Integrations</h3>
          <p className="font-body-md text-body-md text-text-secondary">Seamlessly bridging SaaS platforms, legacy ERP systems, and modern cloud infrastructure.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white/70 backdrop-blur-md border border-outline-variant p-space-8 rounded-2xl flex flex-col gap-space-4 transition-all duration-300 hover:border-primary hover:shadow-[0_4px_20px_rgba(79,70,229,0.08)] group cursor-pointer">
          <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>encrypted</span>
          <h3 className="font-heading-lg text-heading-lg group-hover:text-primary transition-colors">Security, Auth &amp; Rate Limiting</h3>
          <p className="font-body-md text-body-md text-text-secondary">Implementing OAuth2, JWT, and mTLS alongside granular throttle policies to protect your data assets.</p>
        </div>
        {/* Card 5 */}
        <div className="bg-white/70 backdrop-blur-md border border-outline-variant p-space-8 rounded-2xl flex flex-col gap-space-4 transition-all duration-300 hover:border-primary hover:shadow-[0_4px_20px_rgba(79,70,229,0.08)] group cursor-pointer">
          <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
          <h3 className="font-heading-lg text-heading-lg group-hover:text-primary transition-colors">Real-Time Event Streaming &amp; Webhooks</h3>
          <p className="font-body-md text-body-md text-text-secondary">Enabling reactive systems with Kafka, RabbitMQ, and instant webhook notifications for low-latency operations.</p>
        </div>
        {/* Card 6 */}
        <div className="bg-white/70 backdrop-blur-md border border-outline-variant p-space-8 rounded-2xl flex flex-col gap-space-4 transition-all duration-300 hover:border-primary hover:shadow-[0_4px_20px_rgba(79,70,229,0.08)] group cursor-pointer">
          <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
          <h3 className="font-heading-lg text-heading-lg group-hover:text-primary transition-colors">Developer Portals &amp; Interactive SDKs</h3>
          <p className="font-body-md text-body-md text-text-secondary">Empowering third-party developers with Swagger docs, sandbox environments, and auto-generated client libraries.</p>
        </div>
      </div>
    </section>
  );
}
