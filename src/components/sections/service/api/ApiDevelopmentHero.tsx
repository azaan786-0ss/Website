import React from "react";
import { Link } from "react-router-dom";

export function ApiDevelopmentHero() {
  return (
    <section className="relative px-space-6 max-w-7xl mx-auto pb-space-24 bg-[linear-gradient(to_right,#D8DAE0_1px,transparent_1px),linear-gradient(to_bottom,#D8DAE0_1px,transparent_1px)] bg-[length:40px_40px] bg-opacity-10 rounded-3xl overflow-hidden mt-space-12 pt-space-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface pointer-events-none"></div>
      <div className="relative z-10 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
        <p className="font-code text-code text-primary uppercase tracking-widest mb-space-4">Engineering &amp; Cloud / API Development</p>
        <h1 className="font-display-xl-mobile md:font-display-xl text-on-surface mb-space-6 leading-tight">
          Robust Integrations &amp; High-Performance Microservices Architecture
        </h1>
        <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl mb-space-12">
          We design, build, and secure enterprise-grade RESTful, GraphQL, and gRPC APIs that connect complex ecosystems, support high data throughput, and accelerate system integration.
        </p>
        <div className="flex flex-col sm:flex-row gap-space-4 mb-space-16">
          <Link to="/start-project">
            <button className="bg-primary text-on-primary px-space-8 py-space-3 rounded-xl font-heading-md hover:shadow-[0_8px_30px_rgba(79,70,229,0.3)] transition-all">
              Discuss API Architecture
            </button>
          </Link>
          <button className="border border-outline-variant bg-surface px-space-8 py-space-3 rounded-xl font-heading-md hover:bg-surface-container-low transition-all">
            Explore Integration Stack
          </button>
        </div>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-6 border-t border-outline-variant pt-space-8">
          <div>
            <p className="font-display-md text-display-md text-primary">&lt; 50ms</p>
            <p className="font-caption text-caption text-text-secondary">Latency Performance</p>
          </div>
          <div>
            <p className="font-display-md text-display-md text-primary">10M+</p>
            <p className="font-caption text-caption text-text-secondary">Daily Requests</p>
          </div>
          <div>
            <p className="font-display-md text-display-md text-primary">100%</p>
            <p className="font-caption text-caption text-text-secondary">Documented Specs</p>
          </div>
          <div>
            <p className="font-display-md text-display-md text-primary">Zero-Trust</p>
            <p className="font-caption text-caption text-text-secondary">Security Protocol</p>
          </div>
        </div>
      </div>
      
      {/* Hero Image Background Mockup */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-1/3 h-2/3 opacity-20 lg:opacity-100 mix-blend-multiply animate-in fade-in duration-1000 delay-300">
        <img className="w-full h-full object-contain" alt="A clean, minimalist 3D rendering of a futuristic server node network with glowing lines of data connecting abstract geometric hubs." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_Cmgq7MqErfIOeJmeyc2WOdHhMX7OJaTY6dMw0SccKH4rqvMxGeCvwGTv09rNXixivB7kDt47VE4MR7WYVLuXVJ-u8v88EJq1qO8a3wFn377ztY6MJVhUKnGBiu_mW2-8LhJFHguWCjUobscPRmCQSsQbLSlG_U3I2zAAs6rMflE0dCFZ2EG-XEOHJGpPL7roo7y_7uFoMmTEqYfcpkt1cTIKj8E3zbFhWwuSU7EP6w1trCGUirJpsQ" />
      </div>
    </section>
  );
}
