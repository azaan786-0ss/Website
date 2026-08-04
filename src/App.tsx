import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ServiceDetail } from "./pages/ServiceDetail";
import { MobileServiceDetail } from "./pages/MobileServiceDetail";
import { AIServiceDetail } from "./pages/AIServiceDetail";
import { UxUiServiceDetail } from "./pages/UxUiServiceDetail";
import { ProductStrategyDetail } from "./pages/ProductStrategyDetail";
import { BrandIdentityDetail } from "./pages/BrandIdentityDetail";
import { ProductEngineeringDetail } from "./pages/ProductEngineeringDetail";
import { CloudArchitectureDetail } from "./pages/CloudArchitectureDetail";
import { ApiDevelopmentDetail } from "./pages/ApiDevelopmentDetail";
import { DataAnalyticsDetail } from "./pages/DataAnalyticsDetail";
import { ProcessAutomationDetail } from "./pages/ProcessAutomationDetail";
import { PerformanceOptimizationDetail } from "./pages/PerformanceOptimizationDetail";
import { StartProject } from "./pages/StartProject";
import { ServicesIndex } from "./pages/ServicesIndex";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/web-design" element={<ServiceDetail />} />
        <Route path="/services/mobile-app" element={<MobileServiceDetail />} />
        <Route path="/services/ai-solutions" element={<AIServiceDetail />} />
        <Route path="/services/ux-ui-design" element={<UxUiServiceDetail />} />
        <Route path="/services/product-strategy" element={<ProductStrategyDetail />} />
        <Route path="/services/brand-identity" element={<BrandIdentityDetail />} />
        <Route path="/services/product-engineering" element={<ProductEngineeringDetail />} />
        <Route path="/services/cloud-architecture" element={<CloudArchitectureDetail />} />
        <Route path="/services/api-development" element={<ApiDevelopmentDetail />} />
        <Route path="/services/data-analytics" element={<DataAnalyticsDetail />} />
        <Route path="/services/process-automation" element={<ProcessAutomationDetail />} />
        <Route path="/services/performance-optimization" element={<PerformanceOptimizationDetail />} />




        <Route path="/start-project" element={<StartProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
