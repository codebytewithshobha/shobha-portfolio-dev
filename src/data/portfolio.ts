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
    period: "2023 — Present",
    role: "Computer Science Engineering Student & Software Developer",
    org: "RVS College of Engineering and Technology, Jamshedpur",
    points: [
      "B.Tech in Computer Science Engineering with hands-on work across software development, AI/ML, cloud deployment and modern web technologies.",
      "Build real-world applications using full stack practices, scalable architectures and structured problem solving.",
      "Practise Data Structures & Algorithms and competitive programming consistently to sharpen engineering fundamentals.",
    ],
  },
  {
    period: "2024 — Present",
    role: "Full Stack Developer (Project Based)",
    org: "MERN Stack & Modern Web Applications",
    points: [
      "Developed full stack applications with React, TypeScript, Tailwind CSS, Node.js, Express.js and MongoDB.",
      "Built secure authentication, REST APIs, reusable UI components and responsive interfaces.",
      "Created an AI-powered Course Notes Summarizer (React, Node.js, MongoDB, Gemini API) with summarization, quizzes, flashcards and tutor chat.",
    ],
  },
  {
    period: "2025 — Present",
    role: "AI Application Developer",
    org: "Generative AI & Intelligent Systems",
    points: [
      "Integrated Google Gemini Generative AI APIs for automation, summarization, recommendations and intelligent user experiences.",
      "Designed prompt workflows and structured AI outputs to improve reliability and application behaviour.",
      "Developed Smart Trip Weaver, an AI travel planning platform with recommendations, weather insights, safety scoring and budget optimization.",
    ],
  },
  {
    period: "2025 — Present",
    role: "Cloud Deployment & DevOps Engineering Practice",
    org: "Cloud, Containers & Software Engineering",
    points: [
      "Deployed full stack applications on Vercel and Render.",
      "Worked with Docker, AWS fundamentals, CI/CD workflows, Git and modern deployment practices.",
      "Applied engineering principles across API development, debugging, version control and scalable architecture.",
    ],
  },
  {
    period: "2026",
    role: "Industrial Training — AI & Machine Learning Using Python",
    org: "Euphoria GenX × RVS College of Engineering and Technology",
    points: [
      "One-month industrial training covering AI, machine learning algorithms, Python programming, data handling and model development.",
      "Implemented AI/ML solutions and worked through real-world machine learning workflows end to end.",
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
