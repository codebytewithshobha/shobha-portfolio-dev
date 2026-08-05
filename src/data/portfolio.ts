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
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  leetcode: "https://leetcode.com/",
  gfg: "https://www.geeksforgeeks.org/user/",
  resume: "/resume.pdf",
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
    tech: ["Web Development Stack"],
  },
];

export const EXPERIENCE = [
  {
    period: "2024 — Present",
    role: "Full Stack Developer (Project Based)",
    org: "Independent & Academic Projects",
    points: [
      "Built end-to-end MERN applications with authentication, REST APIs and reusable component systems.",
      "Designed responsive, accessible interfaces with React, TypeScript and Tailwind CSS.",
    ],
  },
  {
    period: "2024 — Present",
    role: "AI Application Developer",
    org: "AI Integration Work",
    points: [
      "Integrated Generative AI APIs (Gemini) to power summarization, quiz and recommendation features.",
      "Engineered prompt pipelines and structured outputs for reliable product behaviour.",
    ],
  },
  {
    period: "2023 — Present",
    role: "Web Development & Cloud Deployment",
    org: "Hands-on Engineering Practice",
    points: [
      "Containerised apps with Docker and deployed to cloud environments with CI/CD workflows.",
      "Practised Data Structures & Algorithms consistently to strengthen problem solving.",
    ],
  },
];

export const LEADERSHIP = [
  {
    title: "NSS President",
    org: "R.V.S. College of Engineering & Technology, Jamshedpur",
    period: "2024 — 25",
    points: [
      "Served as NSS President leading the college volunteer wing.",
      "Led student initiatives and community activities.",
      "Coordinated volunteers across multiple drives.",
      "Organized community events end to end.",
      "Developed leadership, communication, teamwork and organizational skills.",
    ],
  },
  {
    title: "Helix Core Member",
    org: "Helix Technical Community",
    period: "2023 — 24",
    points: [
      "Worked as a core team member of the technical community.",
      "Collaborated in technical and community activities.",
      "Supported innovation initiatives across the campus.",
      "Contributed to teamwork and project execution.",
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    icon: "Trophy",
    title: "Hackathon Participation",
    description:
      "Built and pitched full working prototypes under tight hackathon timelines with cross-functional teams.",
  },
  {
    icon: "Lightbulb",
    title: "Innovation Challenges",
    description:
      "Participated in innovation challenges, shaping AI-first solutions for tourism and education problems.",
  },
  {
    icon: "Code2",
    title: "Coding Achievements",
    description:
      "Consistent DSA practice on LeetCode and GeeksforGeeks, sharpening algorithmic problem solving.",
  },
  {
    icon: "Rocket",
    title: "Technical Accomplishments",
    description:
      "Shipped multiple full stack products with AI integrations, cloud deployment and CI/CD pipelines.",
  },
  {
    icon: "Users",
    title: "Community Leadership",
    description:
      "Recognised as NSS President for driving student-led community impact and volunteer coordination.",
  },
  {
    icon: "GraduationCap",
    title: "Academic Focus",
    description:
      "B.Tech Computer Science Engineering with a strong focus on software engineering fundamentals.",
  },
];
