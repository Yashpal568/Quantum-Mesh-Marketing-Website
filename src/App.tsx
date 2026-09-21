import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { GlobalModal } from './components/modals/GlobalModal';

import { ScrollToTop } from './components/layout/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetails } from './pages/ProductDetails';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { Careers } from './pages/Careers';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Locations } from './pages/Locations';
import { NotFound } from './pages/NotFound';

// Dedicated Solution Pages
import { BiometricEcosystem } from './pages/solutions/BiometricEcosystem';
import { AgenticAI } from './pages/solutions/AgenticAI';
import { CloudDevopsGenAI } from './pages/solutions/CloudDevopsGenAI';
import { LeadsCRM } from './pages/LeadsCRM';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ModalProvider>
        <div className="flex flex-col min-h-screen bg-[#FAFCFF] text-slate-900 selection:bg-brand-blue selection:text-white">
          {/* Sticky Header */}
          <Navbar />

          {/* Main Page Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetails />} />
              <Route path="/servora" element={<Navigate to="/products/restaurant-saas" replace />} />
              <Route path="/products/servora" element={<Navigate to="/products/restaurant-saas" replace />} />
              <Route path="/gatesphere" element={<Navigate to="/products/vms" replace />} />
              <Route path="/products/gatesphere" element={<Navigate to="/products/vms" replace />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Admin & Inbound Leads CRM */}
              <Route path="/leads" element={<LeadsCRM />} />
              <Route path="/admin/leads" element={<LeadsCRM />} />

              {/* Resources Pages */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/terms" element={<TermsOfService />} />
              
              {/* Local SEO & Regional IT Service Hubs */}
              <Route path="/locations" element={<Locations />} />
              <Route path="/locations/uttarakhand" element={<Locations />} />
              
              {/* Dedicated Enterprise Solution Routes */}
              <Route path="/solutions/biometric-attendance" element={<BiometricEcosystem />} />
              <Route path="/solutions/agentic-ai" element={<AgenticAI />} />
              <Route path="/solutions/cloud-devops-genai" element={<CloudDevopsGenAI />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Global Modal Host */}
          <GlobalModal />
        </div>
      </ModalProvider>
    </BrowserRouter>
  );
};

export default App;
