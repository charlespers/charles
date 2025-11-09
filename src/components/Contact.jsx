import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

// Knowledge base about Charles
const knowledgeBase = {
  greetings: [
    "Hello! I'm Charles's AI assistant. How can I help you learn about him?",
    "Hi there! I'm here to tell you about Charles's work, skills, and projects. What would you like to know?",
    "Hey! I'm Charles's AI assistant. Ask me anything about his experience, projects, or skills!"
  ],
  skills: {
    languages: "Charles is proficient in Python, JavaScript, Java, C, and C++. He uses Python extensively for machine learning and data science, JavaScript/React for full-stack development, and lower-level languages for performance-critical applications.",
    ml: "Charles has strong expertise in Machine Learning, including neural networks (LSTM, DNNs, CNNs), random forests, regression models, and deep learning frameworks like TensorFlow and PyTorch.",
    web: "For web development, Charles works with React, Vite, Tailwind CSS, Node.js, and modern frontend frameworks. He's built scalable applications handling thousands of users.",
    tools: "His toolkit includes TensorFlow, Pandas, Scikit-learn, SQL, Supabase, Git, and various data analysis tools. He's experienced with both frontend and backend development."
  },
  experience: {
    current: "Currently, Charles is a Machine Learning Research Assistant at Princeton University (Sep 2025 - Present) and a Developer at Hoagie Club (Sep 2025 - Present).",
    recent: "Recent roles include: Machine Learning Research Intern at Naval Medical Research Unit San Antonio (May 2025 - Sep 2025), Full-stack Developer at EVAL (Feb 2025 - Sep 2025), and Quantitative Research Intern at Quantcap (Dec 2024 - Jan 2025).",
    highlights: "At EVAL, he built scalable web apps for 10K+ player rankings, developed ML models for ranking optimization, and engineered automated data pipelines. At Quantcap, he created ML models achieving 2.95x returns and processed 5.2 million data points."
  },
  projects: {
    jigsaw: "Jigsaw is a modern web application showcasing innovative design and full-stack development skills. Built with React and modern UI/UX principles. Live at jigsaw-five.vercel.app/design",
    pqt: "Princeton Quantitative Traders website - the official site for Princeton's premier quantitative trading club. Features modern design and comprehensive information. Live at princeton-quant.com",
    eval: "EVAL Gaming - comprehensive esports ranking platform with real-time data visualization. Features league rankings, player statistics, and handles thousands of records. Built with React, Supabase, and ML models. Live at evalgaming.com",
    quantcap: "Quantcap Options - quantitative trading platform for options analysis with ML models for pricing and trading strategies. Uses Python, TensorFlow, and advanced ML techniques.",
    sleepsync: "SleepSync - application focused on sleep tracking and synchronization, built with modern web technologies.",
    bitcoin: "Bitcoin Price Prediction - ML model using regression techniques. Charles taught 50+ Princeton students web scraping, API calls, ML, and financial mathematics through this project."
  },
  education: "Charles is a student at Princeton University, passionate about the intersection of tech and finance, including machine learning, full-stack development, quantitative research, and data science.",
  contact: "You can reach Charles at charlespers.m@gmail.com or connect on LinkedIn at linkedin.com/in/charlesmuehl. He's always open to discussing new opportunities and interesting projects.",
  default: "I can tell you about Charles's skills, experience, projects, education, or how to contact him. What would you like to know?"
};

// Simple AI response generator
const generateResponse = (userMessage) => {
  const message = userMessage.toLowerCase().trim();
  
  if (message.match(/^(hi|hello|hey|greetings|what's up)/)) {
    return knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)];
  }
  
  if (message.match(/(language|programming|code|tech stack|skills|what can|technologies)/)) {
    return knowledgeBase.skills.languages + " " + knowledgeBase.skills.tools;
  }
  
  if (message.match(/(machine learning|ml|ai|artificial intelligence|neural|deep learning|tensorflow|pytorch)/)) {
    return knowledgeBase.skills.ml;
  }
  
  if (message.match(/(web|frontend|backend|react|full.?stack|website|app)/)) {
    return knowledgeBase.skills.web;
  }
  
  if (message.match(/(experience|work|job|role|position|intern|current|recent)/)) {
    return knowledgeBase.experience.current + " " + knowledgeBase.experience.recent + " " + knowledgeBase.experience.highlights;
  }
  
  if (message.match(/(project|built|created|developed|jigsaw|eval|pqt|quantcap|sleepsync|bitcoin)/)) {
    if (message.includes("jigsaw")) return knowledgeBase.projects.jigsaw;
    if (message.includes("pqt") || message.includes("princeton")) return knowledgeBase.projects.pqt;
    if (message.includes("eval")) return knowledgeBase.projects.eval;
    if (message.includes("quantcap") || message.includes("options")) return knowledgeBase.projects.quantcap;
    if (message.includes("sleepsync") || message.includes("sleep")) return knowledgeBase.projects.sleepsync;
    if (message.includes("bitcoin") || message.includes("crypto")) return knowledgeBase.projects.bitcoin;
    return "Charles has built several notable projects including Jigsaw (modern web app), Princeton Quantitative Traders website, EVAL Gaming platform, Quantcap Options, SleepSync, and Bitcoin Price Prediction ML model. Which one interests you?";
  }
  
  if (message.match(/(education|school|university|princeton|student|study|degree)/)) {
    return knowledgeBase.education;
  }
  
  if (message.match(/(contact|email|reach|linkedin|connect|get in touch|hire)/)) {
    return knowledgeBase.contact;
  }
  
  return knowledgeBase.default;
};

const MessageBubble = ({ message, isUser, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-br-sm"
            : "bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-bl-sm"
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
        {!isUser && (
          <div className="flex items-center gap-1 mt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs text-gray-400">AI</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex justify-start mb-4"
  >
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl rounded-bl-sm px-4 py-3">
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-blue-400"
            animate={{
              y: [0, -8, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

const Contact = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm Charles's AI assistant. I can tell you about his skills, experience, projects, and more. What would you like to know?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput("");
    
    const newMessages = [...messages, { text: userMessage, isUser: true }];
    setMessages(newMessages);
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 400));

    const response = generateResponse(userMessage);
    setIsTyping(false);
    
    setMessages([...newMessages, { text: response, isUser: false }]);
  };

  const quickQuestions = [
    "What languages do you know?",
    "Tell me about your projects",
    "What's your experience?",
    "How can I contact you?",
  ];

  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main Content */}
      <div className={`relative z-10 max-w-5xl mx-auto ${styles.paddingX}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-sm text-blue-400 font-medium tracking-wider uppercase">
              Contact
            </span>
          </motion.div>
          <h2 className={`${styles.sectionHeadText} mb-4`}>
            Chat with <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ask me anything about my skills, experience, projects, or how we can work together.
          </p>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <motion.div
                  className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-[#0a0a0f]"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <h3 className="text-white font-semibold">Charles AI</h3>
                <p className="text-xs text-gray-400">Online • Ready to chat</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-[500px] overflow-y-auto px-6 py-6 bg-gradient-to-b from-transparent to-[#0a0a0f]/20">
            <AnimatePresence>
              {messages.map((msg, index) => (
                <MessageBubble key={index} message={msg.text} isUser={msg.isUser} index={index} />
              ))}
            </AnimatePresence>
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="px-6 py-3 border-t border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickQuestions.map((q, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setInput(q);
                    inputRef.current?.focus();
                  }}
                  className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-400 hover:text-white transition-all duration-200"
                >
                  {q}
                </motion.button>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm pr-12"
                  disabled={isTyping}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <motion.button
                type="submit"
                disabled={!input.trim() || isTyping}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <span>Send</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">Prefer traditional contact?</p>
          <div className="flex items-center justify-center gap-6">
            <motion.a
              href="mailto:charlespers.m@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/charlesmuehl/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
