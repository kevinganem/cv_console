// terminalHelpers.js
import { TERMINAL_INTRO, allCommands } from './terminalCommands';

// Plays typing sound effect
export const playSound = (audioRef) => {
    if (audioRef) {
        audioRef.currentTime = 0;
        audioRef.play();
    }
};

// Scrolls terminal to the bottom
export const scrollToBottom = (terminalRef) => {
  if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }
};

// Handles terminal commands and sets output
export const handleCommand = (command, setOutput) => {
  if (command === "clear") {
      setOutput(TERMINAL_INTRO);
  } else if (allCommands[command]) {
      setOutput(prev => [...prev, `> ${command}`, allCommands[command], ""]);
  } else {
      setOutput(prev => [
          ...prev,
          `> ${command}`,
          "💀 Error 404: Command not found. Type 'menu' to list available commands.",
          ""
      ]);
  }
};

export const TextFormatter = ({ text }) => (
  <span dangerouslySetInnerHTML={{ __html: text }} />
);