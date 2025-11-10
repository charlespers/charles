import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { 
  About, 
  Contact, 
  Experience, 
  Hero, 
  Navbar, 
  Tech, 
  Works, 
  StatusIndicator, 
  QuickActions,
  SmoothScroll,
  KeyboardNavigation,
  ReadingProgress,
  FocusMode,
  BackToTop,
  ViewportTracker,
  ThemeToggle,
  EmailSection,
  CommandPrompt
} from './components';

const App = () => {
  // Get base path from environment or default to /charles/ for GitHub Pages
  const basePath = import.meta.env.BASE_URL || '/charles/';
  
  return (
    <BrowserRouter
      basename={basePath}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-[#0a0a0f] min-h-screen overflow-x-hidden">
        <SmoothScroll />
        <KeyboardNavigation />
        <FocusMode />
        <ViewportTracker />
        <ThemeToggle />
        <StatusIndicator />
        <QuickActions />
        <Navbar />
        <Hero />
        <EmailSection />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
        <CommandPrompt />
        <ReadingProgress />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;
