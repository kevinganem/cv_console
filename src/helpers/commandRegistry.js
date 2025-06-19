// commandRegistry.js
// Central registry for all terminal commands
// Each handler receives a context object with state setters and helpers

import { playSound, downloadCV } from './terminalHelpers';
import {
  formatExperiences,
  formatSkills,
  professionalExperiences,
  personalExperiences,
  skillsCategories,
  allCommands
} from './cvData';

/**
 * @typedef {Object} CommandContext
 * @property {function} setCommandHistory - Updates the terminal command history
 * @property {function} setInput - Updates the terminal input value
 * @property {function} setShowPopup - Shows/hides the popup modal
 * @property {function} setPopupContent - Sets the content of the popup modal
 * @property {function} setPopupTitle - Sets the title of the popup modal
 * @property {function} setShowHacking - Shows/hides the hacking simulator
 * @property {object} [refs] - Optional refs (e.g., inputRef)
 */

/**
 * The commandRegistry maps command names to their handler functions.
 * Each handler receives a context object with state setters and helpers.
 * This centralizes all command logic for maintainability and extensibility.
 */
export const commandRegistry = {
  /**
   * Show help information in the terminal.
   * @param {CommandContext} context
   */
  help: ({ setCommandHistory }) => {
    setCommandHistory(prev => [...prev, allCommands.help]);
    playSound('default');
  },
  /**
   * Show the main command menu.
   * @param {CommandContext} context
   */
  menu: ({ setCommandHistory }) => {
    setCommandHistory(prev => [...prev, allCommands.menu]);
    playSound('default');
  },
  /**
   * Show the experience command options.
   * @param {CommandContext} context
   */
  experience: ({ setCommandHistory }) => {
    setCommandHistory(prev => [...prev, allCommands.experience]);
    playSound('default');
  },
  /**
   * Show professional experience in a popup.
   * @param {CommandContext} context
   */
  professional: ({ setPopupTitle, setPopupContent, setShowPopup }) => {
    setPopupTitle('💼 Professional Experience');
    setPopupContent(formatExperiences(professionalExperiences, '💼'));
    setShowPopup(true);
    playSound('default');
  },
  /**
   * Show personal experience in a popup.
   * @param {CommandContext} context
   */
  personal: ({ setPopupTitle, setPopupContent, setShowPopup }) => {
    setPopupTitle('🌟 Personal Experience');
    setPopupContent(formatExperiences(personalExperiences, '🌟'));
    setShowPopup(true);
    playSound('default');
  },
  /**
   * Show skills in a popup.
   * @param {CommandContext} context
   */
  skills: ({ setPopupTitle, setPopupContent, setShowPopup }) => {
    setPopupTitle('🧠 Skills');
    setPopupContent(formatSkills(skillsCategories));
    setShowPopup(true);
    playSound('default');
  },
  /**
   * Clear the terminal history and show the welcome animation.
   * @param {CommandContext} context
   */
  clear: ({ setCommandHistory }) => {
    setCommandHistory(['WELCOME_ANIMATED']);
    playSound('clear');
  },
  /**
   * Download the CV PDF and show a confirmation message.
   * @param {CommandContext} context
   */
  upload: ({ setCommandHistory }) => {
    downloadCV();
    setCommandHistory(prev => [...prev, allCommands.upload || 'Uploading...']);
    playSound('upload');
  },
  /**
   * Trigger the hacking simulator Easter egg.
   * @param {CommandContext} context
   */
  secret: ({ setShowHacking }) => {
    setShowHacking(true);
    playSound('default');
  },
  /**
   * Default handler for unknown commands. Shows an error message.
   * @param {CommandContext} context
   * @param {string} command - The unknown command entered by the user
   */
  _default: ({ setCommandHistory }, command) => {
    setCommandHistory(prev => [
      ...prev,
      `<span class='error'>Command not found: <b>${command}</b>. Type <b>menu</b> for available commands.</span>`
    ]);
    playSound('unknown');
  }
}; 