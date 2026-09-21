import React, { useEffect } from 'react';
import { Hero } from '../components/hero/Hero';
import { ProductsSection } from '../components/products/ProductsSection';
import { FeaturedProjectsSection } from '../components/projects/FeaturedProjectsSection';
import { StatsClientsStrip } from '../components/stats/StatsClientsStrip';
import { ImageCarouselSection } from '../components/carousel/ImageCarouselSection';
import { ServicesSection } from '../components/services/ServicesSection';
import { IndustriesSection } from '../components/industries/IndustriesSection';
import { RegionalPresenceSection } from '../components/sections/RegionalPresenceSection';
import { FinalCTA } from '../components/cta/FinalCTA';
import { SEOHead } from '../components/seo/SEOHead';

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Quantum Mesh — #1 Website Developer & Custom Software Company in Uttarakhand | IT Services India"
        description="Looking for a top website developer near you or custom software company in Uttarakhand? Quantum Mesh (PSA Plaza, Rudrapur HQ) builds enterprise web apps, school ERP SaaS, biometric attendance ecosystems, and agentic AI."
        keywords="website developer near me, software company near me, website development company in rudrapur, website developer in dehradun, web development in haldwani, IT company in uttarakhand, custom software development company uttarakhand, biometric attendance machine rudrapur"
        canonicalPath="/"
      />

      {/* 1. Hero Section with 3D product showcase */}
      <Hero />

      {/* 2. Products Section (5 Pastel Cards from Reference) */}
      <ProductsSection />

      {/* 3. Featured Projects (Our Work) */}
      <FeaturedProjectsSection />

      {/* 4. Statistics & Authentic Client Strip */}
      <StatsClientsStrip />

      {/* 5. Live Showcase Image Carousel Section */}
      <ImageCarouselSection />

      {/* 6. Services Section (3D Cards) */}
      <ServicesSection />

      {/* 7. Industries Section */}
      <IndustriesSection />

      {/* 8. Regional & Local Presence (Uttarakhand & Pan-India SEO) */}
      <RegionalPresenceSection />

      {/* 9. Final Dark Navy CTA with Mesh Graphic */}
      <FinalCTA />
    </div>
  );
};
