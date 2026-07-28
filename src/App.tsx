import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ServiceDetail } from "./pages/ServiceDetail";
import { MobileServiceDetail } from "./pages/MobileServiceDetail";
import { AIServiceDetail } from "./pages/AIServiceDetail";
import { StartProject } from "./pages/StartProject";
import { ServicesIndex } from "./pages/ServicesIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/web-design" element={<ServiceDetail />} />
        <Route path="/services/mobile-app" element={<MobileServiceDetail />} />
        <Route path="/services/ai-solutions" element={<AIServiceDetail />} />
        <Route path="/start-project" element={<StartProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
