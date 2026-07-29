import React from "react";

export function ApiDevelopmentDeliverables() {
  return (
    <section className="px-space-6 py-space-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-space-16">
      <div>
        <h3 className="font-display-md text-display-md text-on-surface mb-space-8">Standard Deliverables</h3>
        <ul className="space-y-space-4">
          <li className="flex items-center gap-space-3 p-space-3 border-b border-outline-variant group">
            <span className="material-symbols-outlined text-success group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="font-body-md text-body-md">Production-ready OpenAPI (Swagger) specifications</span>
          </li>
          <li className="flex items-center gap-space-3 p-space-3 border-b border-outline-variant group">
            <span className="material-symbols-outlined text-success group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="font-body-md text-body-md">Shared Postman workspaces for testing &amp; QA</span>
          </li>
          <li className="flex items-center gap-space-3 p-space-3 border-b border-outline-variant group">
            <span className="material-symbols-outlined text-success group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="font-body-md text-body-md">TypeScript &amp; Python client-side SDKs</span>
          </li>
          <li className="flex items-center gap-space-3 p-space-3 border-b border-outline-variant group">
            <span className="material-symbols-outlined text-success group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="font-body-md text-body-md">API Gateway &amp; WAF security configurations</span>
          </li>
          <li className="flex items-center gap-space-3 p-space-3 border-b border-outline-variant group">
            <span className="material-symbols-outlined text-success group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="font-body-md text-body-md">Comprehensive load testing &amp; JMeter suites</span>
          </li>
        </ul>
      </div>
      <div className="bg-surface-container-low p-space-8 rounded-2xl border border-outline-variant group hover:border-primary transition-colors duration-300">
        <h4 className="font-heading-md text-heading-md mb-space-6 text-on-surface">Engineering Stack</h4>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-space-6">
          <div className="flex flex-col items-center gap-space-2 group-hover:translate-y-0 translate-y-1 transition-transform duration-500 hover:!-translate-y-1">
            <div className="w-12 h-12 bg-white rounded-lg border border-outline-variant flex items-center justify-center text-primary font-bold shadow-sm">JS</div>
            <span className="font-caption text-caption">Node.js</span>
          </div>
          <div className="flex flex-col items-center gap-space-2 group-hover:translate-y-0 translate-y-1 transition-transform duration-500 delay-[50ms] hover:!-translate-y-1">
            <div className="w-12 h-12 bg-white rounded-lg border border-outline-variant flex items-center justify-center text-primary font-bold shadow-sm">TS</div>
            <span className="font-caption text-caption">TypeScript</span>
          </div>
          <div className="flex flex-col items-center gap-space-2 group-hover:translate-y-0 translate-y-1 transition-transform duration-500 delay-[100ms] hover:!-translate-y-1">
            <div className="w-12 h-12 bg-white rounded-lg border border-outline-variant flex items-center justify-center text-primary font-bold shadow-sm">Go</div>
            <span className="font-caption text-caption">Golang</span>
          </div>
          <div className="flex flex-col items-center gap-space-2 group-hover:translate-y-0 translate-y-1 transition-transform duration-500 delay-[150ms] hover:!-translate-y-1">
            <div className="w-12 h-12 bg-white rounded-lg border border-outline-variant flex items-center justify-center text-primary font-bold shadow-sm">GQL</div>
            <span className="font-caption text-caption">GraphQL</span>
          </div>
          <div className="flex flex-col items-center gap-space-2 group-hover:translate-y-0 translate-y-1 transition-transform duration-500 delay-[200ms] hover:!-translate-y-1">
            <div className="w-12 h-12 bg-white rounded-lg border border-outline-variant flex items-center justify-center text-primary font-bold shadow-sm text-sm">AWS</div>
            <span className="font-caption text-caption text-center leading-tight mt-1">API Gateway</span>
          </div>
          <div className="flex flex-col items-center gap-space-2 group-hover:translate-y-0 translate-y-1 transition-transform duration-500 delay-[250ms] hover:!-translate-y-1">
            <div className="w-12 h-12 bg-white rounded-lg border border-outline-variant flex items-center justify-center text-primary font-bold shadow-sm text-sm">Redis</div>
            <span className="font-caption text-caption">Caching</span>
          </div>
          <div className="flex flex-col items-center gap-space-2 group-hover:translate-y-0 translate-y-1 transition-transform duration-500 delay-[300ms] hover:!-translate-y-1">
            <div className="w-12 h-12 bg-white rounded-lg border border-outline-variant flex items-center justify-center text-primary font-bold shadow-sm text-sm">Kong</div>
            <span className="font-caption text-caption">Gateway</span>
          </div>
          <div className="flex flex-col items-center gap-space-2 group-hover:translate-y-0 translate-y-1 transition-transform duration-500 delay-[350ms] hover:!-translate-y-1">
            <div className="w-12 h-12 bg-white rounded-lg border border-outline-variant flex items-center justify-center text-primary font-bold shadow-sm">PG</div>
            <span className="font-caption text-caption">PostgreSQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
