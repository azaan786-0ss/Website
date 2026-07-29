import React from "react";

export function ApiDevelopmentLifecycle() {
  return (
    <section className="bg-bg-secondary py-space-32">
      <div className="px-space-6 max-w-7xl mx-auto">
        <div className="mb-space-16 text-center md:text-left">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-space-4">The API Lifecycle</h2>
          <p className="font-body-lg text-body-lg text-text-secondary">A methodical approach to building robust digital bridges.</p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-space-12">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent hidden md:block -z-0"></div>
          
          <div className="relative z-10 bg-surface p-space-8 border border-outline-variant rounded-xl group transition-all hover:-translate-y-2 hover:border-primary hover:shadow-lg cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-heading-md mb-space-4 shadow-md group-hover:scale-110 transition-transform">1</div>
            <h4 className="font-heading-md text-heading-md mb-space-2 group-hover:text-primary transition-colors">Schema &amp; Contract Design</h4>
            <p className="font-caption text-caption text-text-secondary">Defining types, endpoints, and data flows using OpenAPI/Swagger specifications.</p>
          </div>
          
          <div className="relative z-10 bg-surface p-space-8 border border-outline-variant rounded-xl group transition-all hover:-translate-y-2 hover:border-primary hover:shadow-lg cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-heading-md mb-space-4 shadow-md group-hover:scale-110 transition-transform">2</div>
            <h4 className="font-heading-md text-heading-md mb-space-2 group-hover:text-primary transition-colors">Core Engineering &amp; Middleware</h4>
            <p className="font-caption text-caption text-text-secondary">Building highly concurrent backend logic with robust logging and error handling.</p>
          </div>
          
          <div className="relative z-10 bg-surface p-space-8 border border-outline-variant rounded-xl group transition-all hover:-translate-y-2 hover:border-primary hover:shadow-lg cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-heading-md mb-space-4 shadow-md group-hover:scale-110 transition-transform">3</div>
            <h4 className="font-heading-md text-heading-md mb-space-2 group-hover:text-primary transition-colors">Security Hardening &amp; Caching</h4>
            <p className="font-caption text-caption text-text-secondary">Implementing Redis layers, WAF rules, and comprehensive identity management.</p>
          </div>
          
          <div className="relative z-10 bg-surface p-space-8 border border-outline-variant rounded-xl group transition-all hover:-translate-y-2 hover:border-primary hover:shadow-lg cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-heading-md mb-space-4 shadow-md group-hover:scale-110 transition-transform">4</div>
            <h4 className="font-heading-md text-heading-md mb-space-2 group-hover:text-primary transition-colors">Docs, SDKs &amp; Monitoring</h4>
            <p className="font-caption text-caption text-text-secondary">Continuous integration with automated testing and real-time observability dashboards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
