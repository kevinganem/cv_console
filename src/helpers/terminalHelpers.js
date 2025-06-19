// terminalHelpers.js
// Pure utility functions for terminal operations

/**
 * Global sound settings for terminal feedback.
 * @type {{volume: number, enabled: boolean}}
 */
const SOUND_SETTINGS = {
    volume: 0.05, // Default sound volume (0-1)
    enabled: true // Whether sound is enabled
};

/**
 * Play a sound effect by key (e.g., 'default', 'clear', 'upload', 'unknown', 'alarm').
 * @param {string} soundKey - The name of the sound file (without extension)
 */
export const playSound = (soundKey) => {
    if (soundKey && SOUND_SETTINGS.enabled) {
        const audio = new Audio(`${process.env.PUBLIC_URL}/assets/audio/${soundKey}.mp3`);
        audio.volume = SOUND_SETTINGS.volume;
        audio.currentTime = 0;
        audio.play().catch(error => console.log('Audio playback failed:', error));
    }
};

/**
 * Set the sound volume (between 0 and 1).
 * @param {number} volume - The new volume level
 */
export const setSoundVolume = (volume) => {
    SOUND_SETTINGS.volume = Math.max(0, Math.min(1, volume));
};

/**
 * Toggle sound on or off.
 * @returns {boolean} The new enabled state
 */
export const toggleSound = () => {
    SOUND_SETTINGS.enabled = !SOUND_SETTINGS.enabled;
    return SOUND_SETTINGS.enabled;
};

/**
 * Scroll a terminal ref to the bottom (for auto-scrolling output).
 * @param {object} terminalRef - React ref to the terminal DOM element
 */
export const scrollToBottom = (terminalRef) => {
  if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }
};

/**
 * Download the CV PDF file from the public directory.
 */
export const downloadCV = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Kevin_GANEM.pdf`;
    link.download = 'Kevin_GANEM.pdf';
    link.click();
};

/**
 * Render HTML safely in React using dangerouslySetInnerHTML.
 * @param {{text: string}} props - The HTML string to render
 * @returns {JSX.Element}
 */
export const TextFormatter = ({ text }) => (
  <span dangerouslySetInnerHTML={{ __html: text }} />
);