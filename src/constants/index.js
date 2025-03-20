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
  pqt_web,
  eval_web,
  pqt_p1,
  threejs,
  evalgaming,
  quantcap,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Data Analyst | Software Engineer",
    company_name: "Eval",
    icon: evalgaming,
    iconBg: "#161329",
    date: "Feb 2025 - Present",
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
    iconBg: "#161329",
    date: "Dec 2024 - Feb 2025",
    points: [
      "Constructing machine learning statistical arbitrage models using regressions, random forests / other tree-based models, and Neural Networks (e.g. DNNs, RNNs, CNNs) to come up with 2.95x returns over a year.",
      "Using Python (Tensor Flow, Pandas, Pytorch) and C++ to scrape and clean data to manipulate it for use in Machine Learning models",
      "Identified mispriced options and developed systematic long/short trading strategies, improving risk-adjusted returns and Sharpe ratio by 5% over baseline models. Backtested strategies and benchmarked performance against established volatility models",
      "Led the historical options data workstream, developing a high-performance data pipeline that processed and analyzed 5.2 million historical time-series data points across six datasets. Integrated three alternative data sources, improving predictive accuracy by 18% and optimizing proprietary trading signals through machine learning-driven algorithms."
    ],
  },
];

export const projects = [
  {
    name: "Princeton Quantitative Traders Website",
    description:
      "Official website for Princeton's premier club Princeton Quantitative Traders",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "PQT website", color: "yellow-text-gradient" },
    ],
    image: pqt_web,
    source_code_link: "https://github.com/charlespers/front_end_pqt",
  },
  {
    name: "Eval Website",
    description:
      "Official website for Eval. Ranking esports players.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: eval_web,
    source_code_link: "https://github.com/Sundunbun/evalgaming",
  },
  {
    name: "Bitcoin Price Prediction with Machine Learning",
    description:
      "ML model that utilizes regression techniques to provide insight into bitcoin price data. Taught over 50 Princeton students how to use web scraping, API calls, Machine Learning, and financial mathmatics to predict bitcoin prices.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: pqt_p1,
    source_code_link:
      "https://github.com/charlespers/project1-bitcoin-pqt",
  },
];

