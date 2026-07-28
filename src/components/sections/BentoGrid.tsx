export function BentoGrid() {
  return (
    <section className="py-space-32 px-6 md:px-8 max-w-7xl mx-auto bg-surface-bright rounded-xl mb-space-32">
      <div className="mb-space-16 flex justify-between items-end">
        <div>
          <h2 className="font-display-md text-display-md mb-space-4">Selected Concepts</h2>
          <p className="font-body-lg text-body-lg text-secondary">Demonstrations of technical capability and design language.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-4 md:grid-rows-2">
        <div className="md:col-span-2 md:row-span-2 bg-bg-primary rounded-lg border border-border overflow-hidden group hover:border-primary transition-colors relative">
          <div className="absolute top-4 left-4 z-10 bg-surface-dim/80 backdrop-blur px-2 py-1 rounded font-code text-xs text-on-surface">Concept</div>
          <div className="bg-cover bg-center w-full h-64 md:h-full min-h-[300px] transition-transform duration-700 group-hover:scale-105" data-alt="A sophisticated dark-mode financial dashboard interface featuring high-contrast neon teal data visualization charts, clean typography, and a sleek minimalist layout. The UI is professional, modern, and conveys engineering rigor." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-dNMFtRYwYI_gdXPPS43w1g6fZwzUsAuFg6EBzMzYPmuITttOnc_xzR7_H6zb5-N7SMxxMIk7yBDsVNUzas7DeUlu7JV9MHLmWw6sNsnLpUezzwL8d4bUr8qhvpahm1cGZhDlwwINwHxLKrPQ_f_v3So0fsSK3ilX2wjNo9e9mnfa8_NG3QsUhrTSK315Sqcm1iUlMid5OHF4OYZKlJ1q7MLiy7T9iLAEOGBvZ5j3oks38e4_MYWuQ8bbcczFpveYF4wqwcuPALWN')" }}></div>
        </div>
        <div className="bg-bg-primary rounded-lg border border-border overflow-hidden group hover:border-primary transition-colors relative">
          <div className="absolute top-4 left-4 z-10 bg-surface-dim/80 backdrop-blur px-2 py-1 rounded font-code text-xs text-on-surface">Concept</div>
          <div className="bg-cover bg-center w-full h-48 md:h-full min-h-[200px] transition-transform duration-700 group-hover:scale-105" data-alt="A clean, minimalist mobile application interface for a healthcare startup. The design uses plenty of white space, soft blue accents, and readable typography to convey trust and clarity." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDF4s5QidrIbN8sXt2tMhCjm373nRkrtUfSlsK0zk5E1Pb7ScAJIzjMVbSrhfoJGEsHyUpt1pO6nZnlcAh8eqjpq3xSClhNfOT1zOgQJZ7hOZtiyVMgOrYCW6SShp9KQHKDP2H4SHf1swkJLQgWGJSE6Zotdi-gmsjED8jwYvFQEr-AH8pv2BpUiuKUpP800nCgoXNKvqJQlEcVp8-34jtCR7sNBfPSYARkIN4H0mh89-QHs229luLtZakZxp0sb4GozxSIjOtgg23a')" }}></div>
        </div>
        <div className="bg-bg-primary rounded-lg border border-border overflow-hidden group hover:border-primary transition-colors relative">
          <div className="absolute top-4 left-4 z-10 bg-surface-dim/80 backdrop-blur px-2 py-1 rounded font-code text-xs text-on-surface">Concept</div>
          <div className="bg-cover bg-center w-full h-48 md:h-full min-h-[200px] transition-transform duration-700 group-hover:scale-105" data-alt="An abstract 3D geometric illustration featuring intersecting planes, glass-like textures, and subtle indigo lighting against a pristine white background. It represents complex software architecture." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPxnLh5C6cVRANSamp87eRn4_YPiRtkMe-B0R476rCQmlgmxNcMQkuNKMGcIN87wAIp5mMPiLnNPMceKarSU0nd8Ec0w73Djhc4rRm6rXHdc5oX_2JaD8j28o9llasEMlX7r5wURBTShoSB0MrAEO0t0g-eSqQbIMUTb3fWctmvo1ZK1KfzxpNpEtScSSMTq0T9lXqilBLet5zSzD-86HfPVEc2bJ20VVDxnV5dNxikw2cOzyuN5wjHvxwA4dmIImt9ew3v-sNde2F')" }}></div>
        </div>
      </div>
    </section>
  );
}
