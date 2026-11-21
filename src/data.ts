// All site content lives here. Edit this file, not the components.

export const profile = {
  name: "Mohanraam Vasanthi Krishna",
  short: "Mohan",
  email: "vkmr2001@gmail.com",
  phone: "+46 733 468 478",
  city: "Gothenburg, Sweden",
  linkedin: "https://www.linkedin.com/in/mohanraam-v-k-59962a32a/",
  github: "https://github.com/MohanraamVK",
  instagram: "https://www.instagram.com/life_as_mohan/",
  resume: "resume.pdf",
  resumeName: "Mohanraam-Vasanthi-Krishna-Resume.pdf",
};

export const skills: [string, string[]][] = [
  ["Languages", ["Java", "Python", "C", "C++", "TypeScript"]],
  ["Frameworks", ["Spring Boot", "Spring MVC", "Angular", "React"]],
  ["Databases", ["MySQL", "PostgreSQL"]],
  ["Other", ["REST APIs", "Networking", "Git", "OOP"]],
];

export const spokenLanguages: [string, string][] = [
  ["Tamil", "native"],
  ["English", "fluent"],
  ["Hindi", "basic"],
  ["Swedish", "learning (slowly)"],
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Prodapt Solutions",
    period: "Dec 2023 – Jun 2025",
    points: [
      "Backend work in Java and Spring MVC on Verizon's C-Ops platform.",
      "Wrote and maintained REST endpoints and the MySQL queries behind them.",
      "Helped with production releases together with the QA and ops teams.",
    ],
  },
  {
    role: "Software Engineer Trainee",
    company: "Prodapt Solutions",
    period: "Jul 2023 – Dec 2023",
    points: [
      "Six months of training in Java, Spring MVC, Angular and MySQL.",
      "Built small MVC apps end to end, from REST APIs down to the database.",
      "Picked up a lot of telecom and networking domain knowledge along the way.",
    ],
  },
];

export const projects = [
  {
    title: "Noctis Bank",
    tag: "SSEN Hackathon 2026",
    summary:
      "Hackathon project: a mock banking dashboard with 17 widgets you can drag and resize, a fake BankID sign-up flow, a chat-style assistant and a points system that rewards greener spending. Everything runs in the browser.",
    stack: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Simply Book",
    tag: "Bachelor thesis",
    summary:
      "Take a photo of a book cover and find the book. I trained a CNN in TensorFlow to recognise covers and hooked it up to a search.",
    stack: ["Python", "TensorFlow", "CNN"],
  },
  {
    title: "Dunning & Curing Network Services",
    tag: "Training project",
    summary:
      "Full-stack app for a mock network provider. Customers with overdue bills get automatic email reminders and are walked through the payment (dunning) process.",
    stack: ["Spring Boot", "Angular", "MySQL"],
  },
];

export const education = [
  {
    degree: "MSc Computer Science, Algorithms, Languages and Logic",
    school: "Chalmers University of Technology",
    period: "2025 – now",
  },
  {
    degree: "BE Computer Science and Engineering",
    school: "Sri Sai Ram Engineering College, Chennai",
    period: "2019 – 2023 · CGPA 9.16",
  },
  {
    degree: "Higher secondary / secondary school",
    school: "Smt. Ramkuwar Devi Fomra Vivekananda Vidyalaya",
    period: "12th 89.2% · 10th CGPA 9.8",
  },
];

export const certifications = [
  "Best Project Award 2023, IEI (Adhiyamaan College of Engineering)",
  "Java Business Application Training, IIT Bombay",
  "CyberSecurity Essentials, Cisco Networking Academy",
  "Machine Learning for All / AI For Everyone, Coursera",
  "Basic Image Classification with TensorFlow",
  "Introduction to Big Data",
  "Introduction to Relational Databases and SQL",
];
