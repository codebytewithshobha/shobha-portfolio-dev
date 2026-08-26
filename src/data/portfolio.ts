import projectTrip from "@/assets/project-trip.jpg";
import projectNotes from "@/assets/project-notes.jpg";
import projectFarm from "@/assets/project-farm.jpg";

export const PROFILE = {
  name: "Shobha Kumari",
  title: "Full Stack Developer | AI Enthusiast",
  role: "Full Stack Developer · AI Enthusiast · Software Engineering Student",
  intro:
    "I build scalable web applications and AI-powered solutions using modern technologies.",
  about:
    "I am a B.Tech Computer Science student passionate about building scalable web applications, AI-powered solutions, and solving real-world problems through technology.",
  email: "kumari3103shobha@gmail.com",
};

export const LINKS = {
  github: "https://github.com/codebytewithshobha",
  linkedin: "https://www.linkedin.com/in/shobha-kumari-14684328a",
  leetcode: "https://leetcode.com/u/shobhagorai/",
  gfg: "https://www.geeksforgeeks.org/profile/kumari310gv63",
  resume:
    "https://drive.google.com/file/d/1eMKv-J6OAsX_dsVV6vc6n41XrU3XG3jf/view?usp=sharing",
};

export const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Beyond The Code", id: "beyond" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    icon: "Layout",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  { title: "Database", icon: "Database", skills: ["MongoDB", "PostgreSQL"] },
  {
    title: "AI / ML",
    icon: "Sparkles",
    skills: ["Generative AI", "AI API Integration", "Machine Learning Basics"],
  },
  {
    title: "Tools & Cloud",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Docker", "AWS", "CI/CD"],
  },
];

export const PROJECTS = [
  {
    title: "AI Tourism Automation System – Smart Trip Weaver",
    description:
      "An AI-powered travel planning platform that automates trip planning using intelligent recommendations, weather insights, safety scoring, carbon footprint tracking, budget optimization, and smart itinerary generation.",
    image: projectTrip,
    alt: "Smart Trip Weaver AI travel planning dashboard interface",
    repo: "https://github.com/codebytewithshobha/smart-trip-weaver-68",
    live: "https://smart-trip-weaver-68-main.vercel.app/",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Maps API",
      "OpenWeather API",
    ],
  },
  {
    title: "AI-Powered Course Notes Summarizer",
    description:
      "An AI learning assistant that converts study materials into summaries, quizzes, flashcards, concepts, and interactive learning content.",
    image: projectNotes,
    alt: "AI course notes summarizer app with flashcards and quiz panels",
    repo: "https://github.com/codebytewithshobha/notes_summarizer_web1",
    live: "",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini AI",
    ],
  },
  {
    title: "Farm To Table Website",
    description:
      "A digital platform connecting agriculture and consumers through a farm-to-table experience.",
    image: projectFarm,
    alt: "Fresh farm vegetables representing the Farm To Table platform",
    repo: "https://github.com/Ankitraj03711/FarmatoTable",
    live: "",
    tech: ["Web Development Stack"],
  },
];

export const EXPERIENCE = [
  {
    period: "2023 — Present",
    role: "Computer Science Engineering Student",
    org: "RVS College of Engineering & Technology, Jamshedpur",
    points: [
      "Pursuing B.Tech in Computer Science Engineering.",
      "Building projects across full stack development, AI and cloud.",
      "Strong focus on software engineering and problem solving.",
    ],
  },
  {
    period: "Nov 2025 — Mar 2026",
    role: "Full Stack Developer Intern",
    org: "Bold & Wise Ventures",
    points: [
      "Built modern web applications using React, Node.js, Express and MongoDB.",
      "Worked with AWS fundamentals, Docker, Kubernetes basics and CI/CD workflows.",
      "Shipped AI integrations and REST APIs following scalable development practices.",
      "Collaborated in an agile development environment.",
    ],
  },
  {
    period: "Jan 2026 — Present",
    role: "Core Member",
    org: "HELIX Technical Club",
    points: [
      "Organize technical events, coding sessions and workshops.",
      "Collaborate with the development team on technical initiatives.",
      "Mentor juniors and contribute to club activities.",
    ],
  },
  {
    period: "May 2026 — Jun 2026",
    role: "Industrial Training — AI & Machine Learning Using Python",
    org: "Euphoria GenX × RVS College of Engineering & Technology",
    points: [
      "Completed one-month industrial training in AI and machine learning.",
      "Worked with Python, machine learning algorithms and AI fundamentals.",
      "Built practical understanding of model development and real-world AI applications.",
    ],
  },
  {
    period: "2025 — Present",
    role: "AI Application Development",
    org: "Personal Projects",
    points: [
      "Built AI-powered applications using the Google Gemini API.",
      "Developed summarization, quiz generation, AI tutor and recommendation systems.",
      "Applied prompt engineering and structured AI workflows.",
    ],
  },
  {
    period: "2025 — Present",
    role: "Cloud & DevOps Practice",
    org: "Vercel, Render, Docker & AWS",
    points: [
      "Deploy applications using Vercel and Render.",
      "Practise Docker, Git, CI/CD and AWS fundamentals.",
      "Build production-ready full stack applications.",
    ],
  },
];

export const LEADERSHIP = [
  {
    title: "President",
    org: "National Service Scheme (NSS), R.V.S. College of Engineering & Technology",
    period: "2024 — 25",
    points: [
      "Led student volunteering initiatives across the campus.",
      "Organized community service activities end to end.",
      "Managed teams and events, coordinating volunteers at scale.",
    ],
  },
  {
    title: "Core Member",
    org: "HELIX Technical Club",
    period: "Jan 2026 — Present",
    points: [
      "Organized technical workshops and coding events.",
      "Promoted peer learning and technical collaboration.",
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    icon: "GraduationCap",
    title: "JS'20 Scholarship",
    description:
      "Received the JS'20 Scholarship from Tata Steel covering my complete B.Tech education.",
  },
  {
    icon: "Code2",
    title: "DSA Achievement",
    description:
      "Solved 300+ Data Structures & Algorithms problems on LeetCode.",
  },
  {
    icon: "Lightbulb",
    title: "Innovation Challenge",
    description: "Finalist — IIC Innovation Challenge / Hackathon 2026.",
  },
  {
    icon: "Trophy",
    title: "Hackathons",
    description:
      "Participated in 3+ national-level hackathons, collaborating on innovative software solutions.",
  },
];
