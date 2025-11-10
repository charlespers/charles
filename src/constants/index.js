import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,
  evalgaming,
  quantcap,
} from "../assets";

// Helper to get asset path with base URL
const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "React", icon: reactjs },
  { title: "Python", icon: python },
  { title: "C", icon: c },
  { title: "SQL", icon: git },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Developer",
    company_name: "Hoagie Club",
    icon: evalgaming,
    iconBg: "#1a1f3a",
    date: "Sep 2025 - Present · 3 mos",
    points: [
      "Part-time developer working on web applications and tools for Princeton's Hoagie Club",
      "Contributing to open-source projects and maintaining club infrastructure",
      "Collaborating with team members on full-stack development projects"
    ],
  },
  {
    title: "Machine Learning Research Intern",
    company_name: "Naval Medical Research Unit San Antonio",
    icon: quantcap,
    iconBg: "#1a1f3a",
    date: "May 2025 - Sep 2025 · 5 mos",
    points: [
      "Conducted machine learning research in medical applications",
      "Developed and implemented ML models for medical data analysis",
      "Worked on-site in Texas, United States"
    ],
  },
  {
    title: "Machine Learning Research Assistant",
    company_name: "Princeton University",
    icon: quantcap,
    iconBg: "#1a1f3a",
    date: "Sep 2025 - Present · 3 mos",
    points: [
      "Full-time research assistant in machine learning at Princeton University",
      "Working on cutting-edge ML research projects",
      "On-site in Princeton, New Jersey, United States"
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "EVAL",
    icon: evalgaming,
    iconBg: "#1a1f3a",
    date: "Feb 2025 - Sep 2025 · 8 mos",
    points: [
      "Designed and deployed scalable web applications using React, Vite, and Tailwind, optimizing frontend performance and data visualization for over 10K player ranking entries.",
      "Built and maintained backend infrastructure with Supabase, handling real-time ingestion and retrieval of thousands of player performance records across multiple esports leagues.",
      "Developed and implemented machine learning models for ranking optimization, leveraging clustering, classification, and regression techniques to refine predictive analytics for player rankings.",
      "Engineered automated data pipelines for processing and analyzing high-frequency match data, applying statistical methods and deep learning techniques to enhance ranking accuracy."
    ],
  },
  {
    title: "Quantitative Research Intern",
    company_name: "Quantcap",
    icon: quantcap,
    iconBg: "#1a1f3a",
    date: "Dec 2024 - Jan 2025 · 2 mos",
    points: [
      "Constructed Machine Learning models using regressions, random forests / other tree-based models, and neural networks (e.g. LSTM) to come up with profitable predictions on options.",
      "Used SQL, Python (TensorFlow, Pandas, Scikit) to scrape and clean data to manipulate it for use in Machine Learning models",
      "Identified mispriced options and developed systematic long/short trading strategies, improving risk-adjusted returns and Sharpe ratio by 5% over baseline models.",
      "Led the historical options data workstream, developing a high-performance data pipeline that processed and analyzed 5.2 million historical time-series data points across six datasets."
    ],
  },
];

export const projects = [
  {
    name: "Jigsaw",
    description:
      "🏆 Winner of HackPrinceton track. AI-powered circuit board design tool that uses machine learning to design circuits, find compatible components, and generate buy lists. Built with modern AI/ML technologies.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "AI/ML", color: "green-text-gradient" },
      { name: "Machine Learning", color: "purple-text-gradient" },
      { name: "HackPrinceton Winner", color: "purple-text-gradient" },
    ],
    image: getAssetPath("/photos/jigsaw-with-txt.png"),
    source_code_link: "https://github.com/charlespers/Jigsaw",
    live_link: "https://jigsaw-five.vercel.app/design",
  },
  {
    name: "Princeton Quantitative Traders",
    description:
      "Official website for Princeton's premier quantitative trading club. Features modern design and comprehensive information about the organization.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Web Development", color: "green-text-gradient" },
      { name: "Design", color: "purple-text-gradient" },
    ],
    image: getAssetPath("/photos/pqt-website-photo-demo.png"),
    source_code_link: "https://github.com/charlespers/PQT_Education_Series_25-26",
    live_link: "https://princeton-quant.com/",
  },
  {
    name: "EVAL Gaming Rankings",
    description:
      "Comprehensive esports ranking platform with real-time data visualization. Features league rankings and player statistics across multiple games.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Data Visualization", color: "green-text-gradient" },
      { name: "Supabase", color: "purple-text-gradient" },
    ],
    image: getAssetPath("/photos/eval-website-demo.png"),
    source_code_link: "https://github.com/Sundunbun/evalgaming",
    live_link: "https://evalgaming.com/rankings/leagues",
  },
  {
    name: "EVAL Gaming",
    description:
      "Official website for EVAL Gaming, featuring esports content, rankings, and community features.",
    tags: [
      { name: "Web Development", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Full-Stack", color: "purple-text-gradient" },
    ],
    image: getAssetPath("/photos/eval-website-demo.png"),
    source_code_link: "https://github.com/Sundunbun/evalgaming",
    live_link: "https://evalgaming.com/",
  },
  {
    name: "SleepSync",
    description:
      "Application focused on sleep tracking and synchronization. Built with modern web technologies.",
    tags: [
      { name: "Full-Stack", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Data Science", color: "purple-text-gradient" },
    ],
    image: getAssetPath("/photos/sleep-sync-logo-no-text.png"),
    source_code_link: "https://github.com/charlespers/sleepsync",
  },
  {
    name: "Quantcap Options",
    description:
      "Quantitative trading platform for options analysis. Features ML models for options pricing and trading strategies.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Quantitative Finance", color: "purple-text-gradient" },
    ],
    image: getAssetPath("/photos/pqt-club-logo.png"),
    source_code_link: "https://github.com/charlespers/quantcap-options",
  },
  {
    name: "PQT Education Series",
    description:
      "Educational content and materials for Princeton Quantitative Traders. Includes tutorials, projects, and learning resources.",
    tags: [
      { name: "Education", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Machine Learning", color: "purple-text-gradient" },
    ],
    image: getAssetPath("/photos/pqt-website-photo-demo.png"),
    source_code_link: "https://github.com/charlespers/PQT_Education_Series_25-26",
  },
  {
    name: "Bitcoin Price Prediction",
    description:
      "ML model that utilizes regression techniques to provide insight into bitcoin price data. Taught over 50 Princeton students how to use web scraping, API calls, Machine Learning, and financial mathematics to predict bitcoin prices.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Regression", color: "purple-text-gradient" },
    ],
    image: getAssetPath("/photos/pqt-club-logo.png"),
    source_code_link: "https://github.com/charlespers/project1-bitcoin-pqt",
  },
  {
    name: "Hoagie Club Help",
    description:
      "Open-source project for Hoagie Club at Princeton. Community-driven development for club tools and resources.",
    tags: [
      { name: "Open Source", color: "blue-text-gradient" },
      { name: "Full-Stack", color: "green-text-gradient" },
      { name: "Community", color: "purple-text-gradient" },
    ],
    image: getAssetPath("/photos/pqt-club-logo.png"),
    source_code_link: "https://github.com/HoagieClub/help",
  },
];

