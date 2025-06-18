import React, { useEffect, useState } from 'react';
import '../styles/animatedWelcome.css';

const SYSTEM_ONLINE = '🟢 SYSTEM ONLINE';
const WELCOME_LINE = 'kevin_ganem • fullstack developer';
const PROMPT = 'Type menu to explore my experience, skills, and projects. Or try help for navigation tips. (Psst... there\'s a secret command)';

const AnimatedWelcome = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [typedPrompt, setTypedPrompt] = useState('');

  useEffect(() => {
    const welcomeTimer = setTimeout(() => setShowWelcome(true), 400);
    let promptIndex = 0;
    let promptTimer;
    const typePrompt = () => {
      if (promptIndex <= PROMPT.length) {
        setTypedPrompt(PROMPT.slice(0, promptIndex));
        promptIndex++;
        promptTimer = setTimeout(typePrompt, 12);
      }
    };
    setTimeout(typePrompt, 800);
    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(promptTimer);
    };
  }, []);

  return (
    <div className="welcome-animated centered-welcome compact-welcome">
      <div className="welcome-header-glow centered">{SYSTEM_ONLINE}</div>
      {showWelcome && (
        <div className="welcome-subtitle-typewriter centered">{WELCOME_LINE}</div>
      )}
      <div className="welcome-mission-fadein centered">
        <span className="prompt-typewriter">{typedPrompt}<span className="blinking-cursor">_</span></span>
      </div>
    </div>
  );
};

export default AnimatedWelcome; 