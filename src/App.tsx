import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage"));
const CompanyProfilePage = lazy(() => import("./pages/about/CompanyProfilePage"));
const OurStrengthPage = lazy(() => import("./pages/about/OurStrengthPage"));
const AIPlatformPage = lazy(() => import("./pages/solutions/AIPlatformPage"));
const ExportServicesPage = lazy(() => import("./pages/solutions/ExportServicesPage"));
const PoCNetworkPage = lazy(() => import("./pages/network/PoCNetworkPage"));
const SuccessStoriesPage = lazy(() => import("./pages/network/SuccessStoriesPage"));
const TrackRecordPage = lazy(() => import("./pages/performance/TrackRecordPage"));
const RoadmapPage = lazy(() => import("./pages/performance/RoadmapPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-off-white">
    <div className="text-center">
      <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse">
        <span className="text-white font-display font-bold text-xl">G</span>
      </div>
      <p className="text-gray-500">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />
        
        {/* About Us */}
        <Route path="/about/company" element={<CompanyProfilePage />} />
        <Route path="/about/strength" element={<OurStrengthPage />} />
        
        {/* Solutions */}
        <Route path="/solutions/ai-platform" element={<AIPlatformPage />} />
        <Route path="/solutions/export-services" element={<ExportServicesPage />} />
        
        {/* Global Network */}
        <Route path="/network/overview" element={<PoCNetworkPage />} />
        <Route path="/network/success-stories" element={<SuccessStoriesPage />} />
        
        {/* Performance */}
        <Route path="/performance/track-record" element={<TrackRecordPage />} />
        <Route path="/performance/roadmap" element={<RoadmapPage />} />
        
        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
