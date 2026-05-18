const siteData = {
  company: {
    shortName: 'SE',
    name: 'Shravan Enterprises',
    year: '2008',
  },
  nav: [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Core Competency', href: '#core' },
    { label: 'Why Choose Us', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    heading: 'Infrastructure Services',
    subheading:
      'Delivering high-quality infrastructure solutions across civil, electrical and mechanical domains.',
    bullets: ['Design', 'Construction', 'Maintenance', 'Project Management'],
    buttons: [
      { label: 'Request Consultation', variant: 'primary', href: '#contact' },
      { label: 'Our Services', variant: 'secondary', href: '#services' },
    ],
    trust: ['ISO Certified', 'Govt. Approved', '100+ Projects', 'Pan-India'],
    image:
      'https://images.unsplash.com/photo-1581093588401-7a8a2a1a4b5f?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&s=0b9d3d6b1b8d89a6d6e6f2d2f1c3f1a9',
    experience: '15+ Years Experience',
  },
  about: {
    title: 'About Shravan Enterprises',
    paragraphs: [
      'We are a full-service infrastructure company focused on sustainable, timely and cost-effective delivery.',
    ],
    bullets: ['Client-centric approach', 'Safety first', 'On-time delivery'],
    image:
      'https://images.unsplash.com/photo-1509460913899-4e7a70299b7a?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&s=5b9c1c8f1f5a7a6b2c3d4e5f6a7b8c9d',
  },
  visionMission: [
    { title: 'Vision', text: 'To be the country’s most trusted infrastructure partner.' },
    { title: 'Mission', text: 'Deliver exceptional projects with integrity and innovation.' },
    { title: 'Integrity', text: 'We uphold transparency, safety and ethical conduct.' },
  ],
  services: {
    title: 'Our Services',
    items: Array.from({ length: 6 }).map((_, i) => ({
      id: i + 1,
      title: ['Civil Engineering', 'Electrical Works', 'Mechanical Systems', 'Project Management', 'Consultation', 'Maintenance'][i],
      desc: 'Comprehensive solutions tailored to project needs with focus on quality.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&s=a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7',
    })),
    cta: { heading: 'Need a Custom Solution?', sub: 'Contact our experts for a tailored plan.', btn: { label: 'Get A Quote', href: '#contact' } },
  },
  core: {
    title: 'Core Competency',
    items: [
      { title: 'Project Execution', icon: 'FiTool' },
      { title: 'Quality Assurance', icon: 'FiCheckCircle' },
      { title: 'Safety Management', icon: 'FiShield' },
      { title: 'Sustainability', icon: 'FiLeaf' },
    ],
  },
  why: {
    heading: 'Why Choose Us',
    text: 'Proven track record, expert teams and robust processes that deliver results.',
    features: [
      { title: 'Experienced Team', desc: 'Decades of combined experience.' },
      { title: 'Committed Delivery', desc: 'Milestone-driven schedules.' },
      { title: 'Cost Control', desc: 'Transparent budgeting practices.' },
      { title: 'Customer Focus', desc: 'Projects tailored to client goals.' },
    ],
  },
  testimonials: [
    { name: 'Amit Sharma', role: 'Procurement Head', rating: 5, text: 'Delivered ahead of schedule and exceeded expectations.' },
    { name: 'Priya Singh', role: 'Project Manager', rating: 5, text: 'Excellent coordination and professionalism.' },
    { name: 'R. Kumar', role: 'Director', rating: 4, text: 'Reliable partner with technical expertise.' },
  ],
  contact: {
    heading: 'Get In Touch',
    address: '123 Industrial Park, Mumbai, India',
    phone: '+91 98765 43210',
    email: 'info@shravanenterprises.com',
  },
  footer: {
    cols: [
      { heading: 'Company', links: ['About', 'Careers', 'Blog'] },
      { heading: 'Services', links: ['Civil', 'Electrical', 'Mechanical'] },
      { heading: 'Resources', links: ['Case Studies', 'News', 'Contact'] },
      { heading: 'Contact', links: ['Privacy Policy', 'Terms'] },
    ],
  },
};

export default siteData;
export const navLinks = [
  { label: "Home", path: "#hero" },
  { label: "About", path: "#about" },
  { label: "Services", path: "#services" },
  { label: "Contact", path: "#contact" },
];

export const services = [
  {
    title: "Civil Works",
    description: "High-quality civil and infrastructure services.",
  },
  {
    title: "Electrical",
    description: "Reliable electrical installation and maintenance.",
  },
];