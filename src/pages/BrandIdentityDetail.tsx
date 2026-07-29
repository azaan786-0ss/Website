import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { BrandIdentityHero } from "../components/sections/service/brand/BrandIdentityHero";
import { BrandIdentityCapabilities } from "../components/sections/service/brand/BrandIdentityCapabilities";
import { BrandIdentityProcess } from "../components/sections/service/brand/BrandIdentityProcess";
import { BrandIdentityDeliverables } from "../components/sections/service/brand/BrandIdentityDeliverables";
import { BrandIdentityShowcase } from "../components/sections/service/brand/BrandIdentityShowcase";
import { BrandIdentityCTA } from "../components/sections/service/brand/BrandIdentityCTA";

export function BrandIdentityDetail() {
  return (
    <div className="bg-surface text-on-surface antialiased overflow-x-hidden selection:bg-primary-container selection:text-white min-h-screen relative font-body-md">
      <Navbar />
      <main className="relative z-10 pt-20 pb-0">
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
