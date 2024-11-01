// terminalHelpers.js
import { TERMINAL_INTRO, allCommands } from './terminalCommands';

export const playSound = (audioRef, soundKey) => {
    if (audioRef && audioRef[soundKey]) {
        audioRef[soundKey].currentTime = 0;
        audioRef[soundKey].play();
    }
};

export const scrollToBottom = (terminalRef) => {
  if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }
};

const downloadCV = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Kevin_GANEM.pdf`;
    link.download = 'Kevin_GANEM.pdf';
    link.click();
};

// Centralise la logique des commandes
export const handleCommand = (command, setOutput, audioRef) => {
    const commandActions = {
        "clear": () => {
            setOutput(TERMINAL_INTRO);
            playSound(audioRef, "clear");
        },
        "upload": () => {
            downloadCV();
            setOutput(prev => [...prev, `> ${command}`, "📥 CV download initiated.", ""]);
            playSound(audioRef, "download");
        },
        default: () => {
            if (allCommands[command]) {
                setOutput(prev => [...prev, `> ${command}`, allCommands[command], ""]);
                playSound(audioRef, "default");
            } else {
                setOutput(prev => [
                    ...prev,
                    `> ${command}`,
                    "💀 Error 404: Command not found. Type 'menu' to list available commands.",
                    ""
                ]);
                playSound(audioRef, "unknown");
            }
        }
    };
    (commandActions[command] || commandActions.default)();
};

export const TextFormatter = ({ text }) => (
  <span dangerouslySetInnerHTML={{ __html: text }} />
);