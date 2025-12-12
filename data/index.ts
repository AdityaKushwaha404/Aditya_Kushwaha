export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#achievements" },
  { name: "Education", link: "#achievements" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Objective",
    description:
      "Full-stack developer creating meaningful digital experiences through clean interfaces and solid backend engineering. I enjoy solving problems, designing smooth user flows, and building systems that scale.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Contact",
    description: "+91 7905915437 • kushwahaaditya431@gmail.com",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech Stack",
    description:
      "Frontend: React.js, Next.js, Tailwind CSS\nBackend: Node.js, Express, FastAPI\nDatabase: PostgreSQL, MongoDB, Supabase\nCloud & Tools: Docker, GitHub, GCP, Vercel",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Currently Learning",
    description: "Next.js • Cloud Integrations (GCP + Supabase)",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Tools & Cloud",
    description: "Git, GitHub, GCP (Basics), Vercel, Render, Figma, Canva",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Connect",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AgriChain – Blockchain-based Agricultural Supply Chain Platform",
    des: "Decentralized supply chain with QR verification, Clerk auth, Razorpay payments, and REST APIs for blockchain verification and product management.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/next.svg", "/ts.svg", "/three.svg"],
    tech: [
      "React.js",
      "Tailwind CSS",
      "Web3.js",
      "FastAPI",
      "MongoDB",
      "Clerk",
      "Razorpay",
    ],
    link: "https://agritrace-phi.vercel.app/",
  },
  {
    id: 2,
    title: "Rabbit – Digital Marketplace Web App",
    des: "Express + MongoDB REST APIs for product, cart, and orders. Responsive UI with Tailwind, filters, sorting, and reusable components.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/next.svg", "/ts.svg"],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Context API",
      "Tailwind CSS",
    ],
    link: "https://e-commerce-k-ji-q8g6.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio – Personal Website (This Site)",
    des: "Next.js + Tailwind portfolio with animated interactions, hover 3D effects, and responsive design.",
    img: "/p3.svg",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
    ],
    link: "/",
  },
  {
    id: 4,
    title: "Payment Gateway Simulation + Fraud Detection",
    des: "End-to-end payment flow simulator with webhook mocks, risk rules, and anomaly heuristics. Dashboard for transactions and alerts.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/next.svg", "/ts.svg"],
    tech: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "FastAPI",
      "MongoDB",
      "Razorpay (mock)",
    ],
    link: "#",
  },
];

export const testimonials = [];

export const companies = [
  {
    id: 1,
    name: "React",
    img: "/tech/react.svg",
    nameImg: "/tech/react.svg",
  },
  {
    id: 2,
    name: "Next.js",
    img: "/tech/nextjs.svg",
    nameImg: "/tech/nextjs.svg",
  },
  {
    id: 3,
    name: "Node.js",
    img: "/tech/nodejs.svg",
    nameImg: "/tech/nodejs.svg",
  },
  {
    id: 4,
    name: "FastAPI",
    img: "/tech/fastapi.svg",
    nameImg: "/tech/fastapi.svg",
  },
  {
    id: 5,
    name: "PostgreSQL",
    img: "/tech/postgresql.svg",
    nameImg: "/tech/postgresql.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "HackWithUttarPradesh - Winner",
    desc: "Secured 1st Place at Chandigarh University Uttar Pradesh; awarded ₹50,000 for innovation, teamwork, and technical excellence.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "SIH Internal Hackathon - Winner",
    desc: "Achieved 1st Prize for building a blockchain-based agricultural transparency system, enhancing traceability and fairness in the agri-supply chain.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  { id: 1, img: "/git.svg", href: "https://github.com/AdityaKushwaha404" },
  {
    id: 2,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/adityakushwaha1503/",
  },
];
