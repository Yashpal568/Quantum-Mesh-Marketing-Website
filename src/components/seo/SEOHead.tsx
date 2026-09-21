import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'business.business';
  schema?: Record<string, any> | Array<Record<string, any>>;
  breadcrumbs?: BreadcrumbItem[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalPath,
  ogImage = 'https://www.quantumesh.in/assets/generated/tech-headquarters.jpg',
  ogType = 'website',
  schema,
  breadcrumbs
}) => {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `https://www.quantumesh.in${currentPath.startsWith('/') ? currentPath : `/${currentPath}`}`;

  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = title.includes('Quantum Mesh') ? title : `${title} | Quantum Mesh`;
    document.title = fullTitle;

    // Helper to safely set meta tag content
    const setMetaTag = (selector: string, attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Update Primary SEO Meta
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);
    }

    // 3. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Update OpenGraph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);

    // 5. Update Twitter Card Tags
    setMetaTag('meta[property="twitter:title"]', 'property', 'twitter:title', fullTitle);
    setMetaTag('meta[property="twitter:description"]', 'property', 'twitter:description', description);
    setMetaTag('meta[property="twitter:image"]', 'property', 'twitter:image', ogImage);

    // 6. Ingest Page Specific JSON-LD Schema (e.g. FAQPage, BreadcrumbList, Product, SoftwareApplication)
    const scriptId = 'page-jsonld-schema';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const schemaGraph: any[] = [];

    // Add BreadcrumbList if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemaGraph.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: b.name,
          item: `https://www.quantumesh.in${b.url.startsWith('/') ? b.url : `/${b.url}`}`
        }))
      });
    }

    // Add custom schema if provided
    if (schema) {
      if (Array.isArray(schema)) {
        schemaGraph.push(...schema);
      } else {
        schemaGraph.push(schema);
      }
    }

    if (schemaGraph.length > 0) {
      scriptEl.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': schemaGraph
      });
    } else {
      scriptEl.text = '';
    }

    return () => {
      // Optional cleanup on unmount
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schema, breadcrumbs]);

  return null;
};
