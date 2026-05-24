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
    image: '/src/assets/Herosection/Herosection.jpg',
    experience: '15+ Years Experience',
  },
  about: {
    title: 'About Shravan Enterprises',
    paragraphs: [
      'We are a full-service infrastructure company focused on sustainable, timely and cost-effective delivery.',
    ],
    bullets: ['Client-centric approach', 'Safety first', 'On-time delivery'],
    image: '/src/assets/Herosection/ourservices.png',
  },
  visionMission: [
    { title: 'Vision', text: 'To be the country’s most trusted infrastructure partner.' },
    { title: 'Mission', text: 'Deliver exceptional projects with integrity and innovation.' },
    { title: 'Integrity', text: 'We uphold transparency, safety and ethical conduct.' },
  ],
  services: {
    title: 'Our Services',
    items: [
      {
        id: 1,
        title: 'Civil Engineering',
        desc: 'Comprehensive civil engineering and infrastructure services.',
        image: '/src/assets/services/civilservices.avif',
      },
      {
        id: 2,
        title: 'Electrical Works',
        desc: 'Reliable electrical installation and maintenance.',
        image: '/src/assets/services/electricalservice.avif',
      },
      {
        id: 3,
        title: 'Mechanical Systems',
        desc: 'Mechanical systems, plumbing and HVAC solutions.',
        image: '/src/assets/services/plumbinghero.png',
      },
      {
        id: 4,
        title: 'Project Management',
        desc: 'End-to-end project management and coordination.',
        image: '/src/assets/services/generalsupporthero.png',
      },
      {
        id: 5,
        title: 'Consultation',
        desc: 'Expert consultation and feasibility studies.',
        image: '/src/assets/services/carpenter.png',
      },
      {
        id: 6,
        title: 'Maintenance',
        desc: 'Planned and reactive maintenance services.',
        image: '/src/assets/services/repairandmaintence.avif',
      },
    ],
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