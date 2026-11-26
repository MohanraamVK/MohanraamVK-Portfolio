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
  ["Languages", ["Java", "Python", "TypeScript", "JavaScript", "C", "C++", "SQL"]],
  ["Backend", ["Spring Boot", "Spring MVC", "Node.js", "REST APIs"]],
  ["Frontend", ["Angular", "React", "HTML/CSS", "Bootstrap"]],
  ["Databases", ["MySQL", "PostgreSQL"]],
  ["AI & data", ["TensorFlow", "CNNs", "Self-supervised learning", "LLMs / RAG", "Tracking data"]],
  [
    "Security",
    ["Pen testing", "Web security", "Static analysis (AST)", "Cryptography", "Wireshark"],
  ],
];

export const spokenLanguages: [string, string][] = [
  ["Tamil", "native"],
  ["English", "fluent"],
  ["Hindi", "working knowledge"],
  ["Swedish", "basic, studying"],
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Prodapt Solutions",
    period: "Dec 2023 – Jun 2025",
    points: [
      "Backend work in Java, Spring Boot and Spring MVC on Verizon C-Ops, an enterprise telecom operations platform.",
      "Built Angular + Bootstrap views on top of our REST APIs.",
      "Designed and queried the MySQL data models behind the operations workflows.",
      "Worked with the cross-functional team on milestones and production releases.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Prodapt Solutions",
    period: "Jul 2023 – Dec 2023",
    points: [
      "Built a full-stack dunning and curing system (Spring Boot, Angular, MySQL) that tracks payments for prepaid telecom customers.",
      "Added a scheduler that emails customers automatically when a payment is overdue.",
    ],
  },
];

type Project = {
  title: string;
  tag: string;
  date: string;
  summary: string;
  stack: string[];
  links?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    title: "LewanDATAski",
    tag: "More Than a Hack 2027",
    date: "Oct – Nov 2026",
    summary:
      "Football possession model, built in a team of three. The pipeline labels every frame of a LaLiga match as home, away or dead ball from tracking data and event tags, with no hand-labelled data. I built the two self-supervised models that fill in possession when the ball isn't visible, decoded with Viterbi into clean segments. It catches 24 of 26 clear turnovers and gets the restart team right 75–81% of the time.",
    stack: ["Python", "Self-supervised learning"],
    links: [{ label: "GitHub", url: "https://github.com/MohanraamVK/LewanDATAski" }],
  },
  {
    title: "Matkoll+",
    tag: "Hack Chalmers",
    date: "Oct 2026",
    summary:
      "24-hour hackathon. You enter your whole grocery list and it compares the basket across nearby Lidl, Willys and ICA stores, then suggests the cheapest route. Store-by-store breakdown, savings summary, accounts, and Swedish/English.",
    stack: ["TypeScript", "AI-assisted dev"],
    links: [{ label: "Live demo", url: "https://matkollplus.lovable.app/" }],
  },
  {
    title: "Kylvakt",
    tag: "Gothenburg Tech Week x Chalmers",
    date: "Sep 2026",
    summary:
      "Ambidex challenge, team of four. The idea was mine and I led the build: it reads supermarket refrigeration sensor data, spots cooling problems early and ranks maintenance by how much money is at stake, so store managers know what to fix first. Pitched live at the end.",
    stack: ["Sensor data", "Analytics"],
  },
  {
    title: "Malicious JS Package Detector",
    tag: "Chalmers, Language-Based Security",
    date: "2026",
    summary:
      "Course project. Flags malicious npm/JavaScript packages by combining abstract syntax tree analysis with forced execution.",
    stack: ["JavaScript", "AST", "Security"],
  },
  {
    title: "Noctis Bank",
    tag: "SSEN Hackathon 2026",
    date: "2026",
    summary:
      "A mock banking dashboard with 17 widgets you can drag and resize, a fake BankID sign-up flow, a chat-style assistant and a points system that rewards greener spending. Everything runs in the browser.",
    stack: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Simply Book",
    tag: "Bachelor thesis",
    date: "2023",
    summary:
      "Take a photo of a book cover and find the book. I trained a CNN in TensorFlow to recognise covers and hooked it up to a search. Won the Best Project Award 2023 from the Institution of Engineers (India).",
    stack: ["Python", "TensorFlow", "CNN"],
  },
];

export const education = [
  {
    degree: "MSc Computer Science, Algorithms, Languages and Logic",
    school: "Chalmers University of Technology",
    period: "Aug 2025 – Jun 2027 (expected)",
  },
  {
    degree: "BE Computer Science and Engineering",
    school: "Sri Sairam Engineering College, Chennai",
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
