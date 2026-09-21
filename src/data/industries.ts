import type { Industry } from '../types';

export const industries: Industry[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Digitizing hospitals, diagnostics, and clinics with secure, compliant health systems.',
    iconName: 'Activity',
    solutions: ['Hospital Management', 'Patient Portals', 'Pharmacy Inventory', 'EHR Systems']
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Transforming universities, colleges, and schools through unified campus ERP and LMS platforms.',
    iconName: 'GraduationCap',
    solutions: ['Campus ERP', 'Online Admissions', 'Examination Engines', 'Student Portals']
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    description: 'Modern guest check-in, concierge automation, and property management systems.',
    iconName: 'Hotel',
    solutions: ['Front Desk Kiosks', 'Room Service Apps', 'Booking Engines', 'Staff Allocation']
  },
  {
    id: 'restaurants',
    name: 'Restaurants',
    description: 'Contactless QR ordering, multi-outlet billing, kitchen displays, and digital menus.',
    iconName: 'UtensilsCrossed',
    solutions: ['QR Dine-In Ordering', 'KDS Terminals', 'Inventory & Waste Tracking', 'Loyalty Apps']
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Automating high-volume business workflows, visitor security, and internal company portals.',
    iconName: 'Building',
    solutions: ['Visitor Security (VMS)', 'Workflow Automation', 'Executive Dashboards', 'Intranet Portals']
  },
  {
    id: 'retail',
    name: 'Retail & Commerce',
    description: 'Point-of-sale platforms, barcode dispatch, multi-store inventory, and omnichannel tools.',
    iconName: 'ShoppingBag',
    solutions: ['Cloud POS', 'Inventory Sync', 'Customer Loyalty Programs', 'Order Fulfillment']
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Tenant management, property listings, lead management, and maintenance request portals.',
    iconName: 'Home',
    solutions: ['Tenant Portals', 'Lease Tracking', 'Maintenance Workflow', 'Property CRM']
  },
  {
    id: 'government',
    name: 'Government & Public Sector',
    description: 'Citizen service portals, municipal grievance tracking, and transparent digital public administration.',
    iconName: 'Landmark',
    solutions: ['Citizen Grievance Portals', 'Permit Management', 'Department Workflows', 'Public Dashboards']
  }
];
