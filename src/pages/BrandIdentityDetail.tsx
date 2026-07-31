import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { BrandIdentityHero } from '../components/sections/service/brand/BrandIdentityHero';
import { BrandIdentityCapabilities } from '../components/sections/service/brand/BrandIdentityCapabilities';
import { BrandIdentityProcess } from '../components/sections/service/brand/BrandIdentityProcess';
import { BrandIdentityDeliverables } from '../components/sections/service/brand/BrandIdentityDeliverables';
import { BrandIdentityShowcase } from '../components/sections/service/brand/BrandIdentityShowcase';
import { BrandIdentityCTA } from '../components/sections/service/brand/BrandIdentityCTA';

export function BrandIdentityDetail() {
  return (
    <div className="bg-surface text-on-surface antialiased overflow-x-hidden selection:bg-primary-container selection:text-white min-h-screen relative font-body-md">
      {/* Global Page Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:64px_64px]"></div>
      </div>
      <Navbar />
      <main className="relative z-10 pt-24 pb-0">
        <BrandIdentityHero />
        <BrandIdentityCapabilities />
        <BrandIdentityProcess />
        <BrandIdentityDeliverables />
        <BrandIdentityShowcase />
        <BrandIdentityCTA />
      </main>
      <Footer />
    </div>
  );
}
