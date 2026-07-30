export type NavItem = { to: string; label: string };

export const PROFILE = {
  name: "Anas Karim",
  role: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "Php Developer",
    "ASP.NET Developer",
    "React Developer",
  ],
  tagline:
    "I design and build fast, accessible, production-grade web products — from pixel-perfect React interfaces to resilient .NET APIs and well-modelled databases.",
  email: "anaskarimbutt@gmail.com",
  phone: "+92 3316882124",
  location: "Lahore, Pakistan",
  github: "https://github.com/Anaskarim007",
  linkedin: "www.linkedin.com/in/anas-karim-372883377",
  resume: "/resume-anas-karim.pdf",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/education", label: "Education" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export const STATS = [
  { label: "Years of experience", value: 5, suffix: "+" },
  { label: "Projects delivered", value: 48, suffix: "+" },
  { label: "Happy clients", value: 32, suffix: "" },
  { label: "Technologies mastered", value: 20, suffix: "+" },
];

export const HIGHLIGHTS = [
  {
    title: "Frontend expertise",
    body: "React, Next.js and TypeScript with a strong eye for motion, layout systems and design fidelity.",
  },
  {
    title: "Backend engineering",
    body: ".NET, ASP.NET Core, Laravel and Node.js services built around clean architecture and testable domains.",
  },
  {
    title: "Problem solving",
    body: "I break ambiguous product requirements into small, shippable and measurable engineering steps.",
  },
  {
    title: "Clean code",
    body: "Readable, reusable and documented code with consistent conventions and meaningful reviews.",
  },
  {
    title: "Responsive design",
    body: "Every interface is designed mobile-first and verified across phone, tablet and desktop breakpoints.",
  },
  {
    title: "Modern UI development",
    body: "Design systems, tokens, accessibility and micro-interactions that make products feel premium.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Information Technology",
    org: "The University of Punjab",
    year: "2021 — 2025",
    detail:
      "Built a strong academic foundation in software engineering, full-stack web development, algorithms, databases, and modern application architecture through practical projects and research.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Web Engineering",
      "Operating Systems",
      "Software Architecture",
      "Computer Vision",
    ],
    achievements: [
      "CGPA 3.8 / 4.0 — Dean's List for four semesters",
      "Final year project awarded Best Web Application",
      "Lead of the university web development society",
    ],
  },
  {
    degree: "Bachelors — Information Technology",
    org: "Punjab University, Gujranwala",
    year: "2021 — 2025",
    detail: "OOP, Data-Structure, Web Development",
    coursework: ["JavaScripts", "Php", "ASP.Net"],
    achievements: ["Top 5% of graduating class", "Certificate in Web Development from Skilify Zone"],
  },
];

export const EXPERIENCE = [
  {
  role: "ASP.NET Full Stack Developer (Final Year Project)",
  org: "University Final Year Project",
  year: "2025",
  responsibilities: [
    "Designed and developed a full-stack web application using ASP.NET Core MVC, C#, and SQL Server.",
    "Implemented secure user authentication, role-based authorization, and CRUD operations.",
    "Designed and optimized relational database schemas with Entity Framework Core.",
    "Developed responsive user interfaces using HTML, CSS, JavaScript, Bootstrap, and Razor Views.",
    "Integrated REST APIs and implemented reporting and dashboard modules for real-time data management."
  ],
  achievements: [
    "Successfully completed and presented the Final Year Project with full-stack implementation.",
    "Built a scalable and secure application following MVC architecture and clean coding practices.",
    "Applied software engineering principles to deliver a production-ready academic project."
  ],
},
  {
  role: "Frontend Developer",
  org: "Remit Choice",
  year: "2023 — 2024",
  responsibilities: [
    "Developed responsive and user-friendly web interfaces using React.js, HTML, CSS, JavaScript, and Tailwind CSS.",
    "Built reusable React components and implemented modern UI/UX designs.",
    "Integrated REST APIs and managed dynamic data rendering for seamless user experiences.",
    "Optimized website performance, accessibility, and cross-browser compatibility.",
    "Collaborated with designers and backend developers to deliver high-quality frontend solutions."
  ],
  achievements: [
    "Improved application performance and reduced page load time through frontend optimization.",
    "Successfully delivered multiple responsive web pages and dashboard interfaces.",
    "Enhanced user experience by implementing reusable components and clean UI architecture."
  ],
},
  {
  role: "Full Stack Developer Intern",
  org: "ITS",
  year: "2025",
  responsibilities: [
    "Developed and maintained full-stack web applications using PHP, Laravel, ASP.NET Core, and MySQL.",
    "Designed and integrated RESTful APIs for seamless frontend and backend communication.",
    "Built secure authentication, role-based authorization, and database-driven application modules.",
    "Optimized SQL queries, improved application performance, and fixed production issues.",
    "Collaborated with cross-functional teams to deliver scalable and maintainable software solutions."
  ],
  achievements: [
    "Successfully delivered multiple PHP and .NET web application modules on schedule.",
    "Improved application performance by optimizing database queries and backend logic.",
    "Developed secure authentication and CRUD systems following industry best practices."
  ],
},

    {
  role: "PHP Developer Intern",
  org: "Skilify Zone",
  year: "2025",
  responsibilities: [
    "Built and maintained web application modules using PHP and Laravel.",
    "Designed and managed MySQL database structures and queries.",
    "Developed responsive frontend interfaces with HTML, CSS, JavaScript, and Bootstrap.",
    "Integrated REST APIs and collaborated with senior developers on project tasks.",
    "Performed debugging, testing, and code optimization to improve application quality."
  ],
  achievements: [
    "Successfully delivered assigned Laravel modules during the internship.",
    "Resolved application bugs and enhanced overall system stability.",
    "Gained practical experience in full-stack web development and collaborative workflows."
  ],
},
   {
  role: "Freelance Full Stack Developer",
  org: "Independent",
  year: "2026 — Present",
  responsibilities: [
    "Designed and developed full-stack web applications using React, .NET, Laravel, and MySQL.",
    "Created responsive user interfaces with React, Tailwind CSS, and TypeScript.",
    "Integrated REST APIs, authentication, payment gateways, and database systems.",
    "Managed deployment, maintenance, and performance optimization for production applications.",
    "Worked directly with clients to understand business requirements and deliver custom solutions."
  ],
  achievements: [
    "Delivered modern full-stack web applications for businesses and startups.",
    "Developed scalable dashboards, e-commerce platforms, and management systems.",
    "Built reusable components and optimized application performance for better user experience."
  ],
},
]
export const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 96 },
      { name: "CSS", level: 94 },
      { name: "JavaScript", level: 93 },
      { name: "TypeScript", level: 90 },
      { name: "React", level: 95 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 94 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: ".NET", level: 90 },
      { name: "ASP.NET Core", level: 89 },
      { name: "Laravel", level: 78 },
      { name: "Node.js", level: 76 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL Server", level: 82 },
      { name: "MySQL", level: 92 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 93 },
      { name: "GitHub", level: 92 },
      { name: "VS Code", level: 95 },
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  gradient: string;
};

export const PROJECTS: Project[] = [
  {
    name: "E-Commerce Website",
    description:
      "Full storefront with catalog, cart, Stripe checkout, order tracking and an admin dashboard.",
    tech: ["React", "TypeScript", "ASP.NET Core", "SQL Server"],
    github: "https://github.com/username/ecommerce-website",
    demo: "https://ecommerce-demo.vercel.app",
    gradient: "from-[#3b82f6] via-[#6366f1] to-[#22d3ee]",
  },
  {
    name: "Food Ordering Website",
    description:
      "Restaurant ordering platform with live menus, cart, delivery tracking and rider assignment.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/Anaskarim007/FrontEnd_Project_8.git",
    demo: "https://anaskarim007.github.io/Deploy/about.html#menu",
    gradient: "from-[#f97316] via-[#ec4899] to-[#8b5cf6]",
  },
  {
    name: "Task Management Dashboard",
    description:
      "Kanban and list views with priorities, categories, due dates, filters and dark mode.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Anaskarim007/My-React-App.git",
    demo: "https://my-react-app-blue-one.vercel.app/",
    gradient: "from-[#3b82f6] via-[#0ea5e9] to-[#22d3ee]",
  },
];

export const SERVICES = [
  {
    title: "Frontend Development",
    body: "Pixel-accurate, animated and accessible interfaces in React, Next.js and TypeScript.",
    icon: "Layout",
  },
  {
    title: "Backend Development",
    body: "Secure, scalable services with .NET, ASP.NET Core, Node.js and Laravel.",
    icon: "Server",
  },
  {
    title: "Full Stack Development",
    body: "End-to-end product delivery: architecture, APIs, UI, deployment and monitoring.",
    icon: "Layers",
  },
  {
    title: "Responsive Website Design",
    body: "Mobile-first layouts that stay flawless from 320px phones to ultrawide displays.",
    icon: "Smartphone",
  },
  {
    title: "REST API Development",
    body: "Versioned, documented REST APIs with authentication, validation and rate limiting.",
    icon: "Plug",
  },
  {
    title: "Database Design",
    body: "Normalized schemas, indexes and query tuning for SQL Server, MySQL and MongoDB.",
    icon: "Database",
  },
  {
    title: "Website Maintenance",
    body: "Ongoing updates, performance audits, security patches and feature iterations.",
    icon: "Wrench",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Product Manager, Nexora",
    quote:
      "Anas turned a vague brief into a polished product in weeks. His attention to detail on both the React frontend and the .NET services was outstanding.",
  },
  {
    name: "Daniel Okafor",
    role: "Founder, Brightloop Studio",
    quote:
      "The design system he built is still the backbone of our product. Clean code, clear documentation and zero drama during delivery.",
  },
  {
    name: "Ayesha Rahman",
    role: "Clinic Director, MedCare",
    quote:
      "Our hospital management system finally works the way our staff think. Anas listened, iterated fast and delivered ahead of schedule.",
  },
  {
    name: "Marco Bianchi",
    role: "CTO, Storefront Labs",
    quote:
      "Performance improvements alone paid for the engagement. He is the rare developer who is equally strong on UI and backend.",
  },
];
