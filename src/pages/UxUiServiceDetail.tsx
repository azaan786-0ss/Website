import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { UxUiHero } from "../components/sections/service/uxui/UxUiHero";
import { UxUiCapabilities } from "../components/sections/service/uxui/UxUiCapabilities";
import { UxUiProcess } from "../components/sections/service/uxui/UxUiProcess";
import { UxUiDeliverables } from "../components/sections/service/uxui/UxUiDeliverables";
import { UxUiCTA } from "../components/sections/service/uxui/UxUiCTA";

export function UxUiServiceDetail() {
  return (
    <div className="bg-surface text-on-surface antialiased overflow-x-hidden selection:bg-primary-container selection:text-white min-h-screen relative font-body-md">
      <Navbar />
      <main className="relative z-10 pt-32 pb-0">
        <UxUiHero />
        <UxUiCapabilities />
        <UxUiProcess />
        <UxUiDeliverables />
        {/* Case Study Spotlight omitted for now as it was empty in HTML */}
        <UxUiCTA />
      </main>
      <Footer />
    </div>
  );
}
