// terminalHelpers.js
import { TERMINAL_INTRO, allCommands } from './terminalCommands';

const SOUND_SETTINGS = {
    volume: 0.05,
    enabled: true
};

export const playSound = (soundKey) => {
    if (soundKey && SOUND_SETTINGS.enabled) {
        const audio = new Audio(`${process.env.PUBLIC_URL}/assets/audio/${soundKey}.mp3`);
        audio.volume = SOUND_SETTINGS.volume;
        audio.currentTime = 0;
        audio.play().catch(error => console.log('Audio playback failed:', error));
    }
};

export const setSoundVolume = (volume) => {
    SOUND_SETTINGS.volume = Math.max(0, Math.min(1, volume));
};

export const toggleSound = () => {
    SOUND_SETTINGS.enabled = !SOUND_SETTINGS.enabled;
    return SOUND_SETTINGS.enabled;
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

export const handleCommand = (command, setOutput) => {
    const commandActions = {
        "clear": () => {
            setOutput(TERMINAL_INTRO);
            playSound("clear");
        },
        "upload": () => {
            downloadCV();
            setOutput(prev => [...prev, `> ${command}`, "📥 CV download initiated.", ""]);
            playSound("upload");
        },
        default: () => {
            if (allCommands[command]) {
                setOutput(prev => [...prev, `> ${command}`, allCommands[command], ""]);
                playSound("default");
            } else {
                setOutput(prev => [
                    ...prev,
                    `> ${command}`,
                    "💀 Error 404: Command not found. Type 'menu' to list available commands.",
                    ""
                ]);
                playSound("unknown");
            }
        }
    };
    (commandActions[command] || commandActions.default)();
};

export const TextFormatter = ({ text }) => (
  <span dangerouslySetInnerHTML={{ __html: text }} />
);