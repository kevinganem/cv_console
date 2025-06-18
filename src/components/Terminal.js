import React, { useState, useRef, useEffect } from 'react';
import { allCommands, TERMINAL_INTRO, PROMPT_MESSAGE_HTML } from '../helpers/terminalCommands';
import PopupTerminal from './PopupTerminal';
import HackingSimulator from './HackingSimulator';
import { playSound } from '../helpers/terminalHelpers';
import '../styles/terminal.css';
import AnimatedBoot from './AnimatedBoot';
import AnimatedWelcome from './AnimatedWelcome';

const Terminal = () => {
    const [commandHistory, setCommandHistory] = useState([]);
    const [input, setInput] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState('');
    const [popupTitle, setPopupTitle] = useState('');
    const [showHacking, setShowHacking] = useState(false);
    const [booting, setBooting] = useState(true);
    const terminalRef = useRef(null);
    const inputRef = useRef(null);

    // Function to scroll to bottom
    const scrollToBottom = () => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    };

    // Scroll to bottom when command history changes
    useEffect(() => {
        scrollToBottom();
    }, [commandHistory]);

    useEffect(() => {
        if (!booting) {
            setCommandHistory(TERMINAL_INTRO);
            inputRef.current && inputRef.current.focus();
        }
    }, [booting]);

    const handleSend = () => {
        const command = input.toLowerCase().trim();
        if (!command) return;
        setCommandHistory(prev => [...prev, `root@user:~$ > ${input}`]);
        setInput('');

        if (command === 'secret') {
            setShowHacking(true);
        } else if (command === 'professional') {
            setPopupTitle('💼 Professional Experience');
            setPopupContent(allCommands.formatExperiences(allCommands.professionalExperiences, '💼'));
            setShowPopup(true);
        } else if (command === 'personal') {
            setPopupTitle('🌟 Personal Experience');
            setPopupContent(allCommands.formatExperiences(allCommands.personalExperiences, '🌟'));
            setShowPopup(true);
        } else if (command === 'skills') {
            setPopupTitle('🧠 Skills');
            setPopupContent(allCommands.formatSkills(allCommands.skillsCategories));
            setShowPopup(true);
        } else if (command === 'clear') {
            setCommandHistory(['WELCOME_ANIMATED']);
        } else if (command === 'upload') {
            setCommandHistory(prev => [...prev, allCommands[command] || 'Uploading...']);
        } else if (allCommands[command] && typeof allCommands[command] === 'string') {
            setCommandHistory(prev => [...prev, allCommands[command]]);
        } else {
            setCommandHistory(prev => [...prev, `<span class='error'>Command not found: <b>${command}</b>. Type <b>help</b> for available commands.</span>`]);
        }
        inputRef.current && inputRef.current.focus();
    };

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter' && input.trim()) {
            const command = input.toLowerCase().trim();
            // Play sound immediately on keydown using shared helper
            if (command === 'secret' || command === 'professional' || command === 'personal' || command === 'skills' || (allCommands[command] && typeof allCommands[command] === 'string')) {
                playSound('default');
            } else if (command === 'clear') {
                playSound('clear');
            } else if (command === 'upload') {
                playSound('upload');
            } else {
                playSound('unknown');
            }
            handleSend();
        }
    };

    function handleHackingComplete() {
        setShowHacking(false);
        // No message after secret sequence
    }

    if (booting) {
        return <AnimatedBoot onComplete={() => setBooting(false)} />;
    }

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