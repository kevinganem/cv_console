import React, { useState, useRef, useEffect } from 'react';
import { TERMINAL_INTRO } from '../helpers/cvData';
import PopupTerminal from './PopupTerminal';
import HackingSimulator from './HackingSimulator';
import { commandRegistry } from '../helpers/commandRegistry';
import '../styles/terminal.css';
import AnimatedBoot from './AnimatedBoot';
import AnimatedWelcome from './AnimatedWelcome';

/**
 * Terminal component simulates a command-line interface for the CV.
 * Handles user input, command history, popups, and special features.
 */
const Terminal = () => {
    // State for the terminal command history (array of strings/HTML)
    const [commandHistory, setCommandHistory] = useState([]);
    // State for the current input value
    const [input, setInput] = useState('');
    // State for showing/hiding the popup modal
    const [showPopup, setShowPopup] = useState(false);
    // State for the popup modal content (HTML string)
    const [popupContent, setPopupContent] = useState('');
    // State for the popup modal title
    const [popupTitle, setPopupTitle] = useState('');
    // State for showing/hiding the hacking simulator Easter egg
    const [showHacking, setShowHacking] = useState(false);
    // State for showing the boot animation (true on first load)
    const [booting, setBooting] = useState(true);
    // Ref to the terminal output container (for scrolling)
    const terminalRef = useRef(null);
    // Ref to the input field (for focus management)
    const inputRef = useRef(null);

    /**
     * Scroll the terminal output to the bottom when command history changes.
     */
    const scrollToBottom = () => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    };

    // Auto-scroll on command history update
    useEffect(() => {
        scrollToBottom();
    }, [commandHistory]);

    // On boot complete, show the welcome animation and focus input
    useEffect(() => {
        if (!booting) {
            setCommandHistory(TERMINAL_INTRO);
            inputRef.current && inputRef.current.focus();
        }
    }, [booting]);

    /**
     * Handle sending a command (on Enter or button press).
     * Adds the input to history, clears input, and delegates to the command registry.
     */
    const handleSend = () => {
        const command = input.toLowerCase().trim();
        if (!command) return;
        setCommandHistory(prev => [...prev, `root@user:~$ > ${input}`]);
        setInput('');

        // Prepare context for command handlers
        const context = {
            setCommandHistory,
            setInput,
            setShowPopup,
            setPopupContent,
            setPopupTitle,
            setShowHacking,
            refs: { inputRef, terminalRef }
        };

        // Find and execute the command handler, or show error if not found
        if (commandRegistry[command]) {
            commandRegistry[command](context, command);
        } else {
            commandRegistry._default(context, command);
        }
        inputRef.current && inputRef.current.focus();
    };

    /**
     * Handle keydown events in the input field (submit on Enter).
     */
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && input.trim()) {
            handleSend();
        }
    };

    /**
     * Callback for when the hacking simulator completes.
     */
    function handleHackingComplete() {
        setShowHacking(false);
        // No message after secret sequence
    }

    // Show boot animation on first load
    if (booting) {
        return <AnimatedBoot onComplete={() => setBooting(false)} />;
    }

    // Main terminal UI
    return (
        <div className="terminal-container">
            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="buttons">
                        <div className="button close"></div>
                        <div className="button minimize"></div>
                        <div className="button maximize"></div>
                    </div>
                    <div className="terminal-title" style={{ flex: 1, textAlign: 'center', color: '#00ff00', fontWeight: 'bold', fontSize: '1.2em' }}>
                        kevin_ganem
                    </div>
                    <div className="terminal-right" style={{ color: '#00ff00', fontSize: '1em', fontWeight: 'bold' }}>
                        npm start
                    </div>
                </div>
                <div className="terminal" ref={terminalRef} onClick={() => inputRef.current && inputRef.current.focus()}>
                    {showHacking ? (
                        <HackingSimulator onComplete={handleHackingComplete} noScroll={true} />
                    ) : (
                        <>
                        {/* Render command history, including animated welcome if present */}
                        {commandHistory.map((item, idx) => (
                            item === 'WELCOME_ANIMATED' ? (
                                <AnimatedWelcome key={idx} />
                            ) : (
                                <div key={idx} className="terminal-line" dangerouslySetInnerHTML={{ __html: item }} />
                            )
                        ))}
                        <div className="input-container">
                            <span className="prompt">root@user:~$ &gt;</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type 'help' for available commands"
                                aria-label="Command input"
                                disabled={showHacking}
                            />
                        </div>
                        </>
                    )}
                </div>
            </div>
            {/* Popup modal for experience/skills */}
            {showPopup && (
                <PopupTerminal
                    title={popupTitle}
                    content={<div dangerouslySetInnerHTML={{ __html: popupContent }} />}
                    onClose={() => setShowPopup(false)}
                />
            )}
        </div>
    );
};

export default Terminal;