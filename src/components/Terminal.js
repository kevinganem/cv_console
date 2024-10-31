// Terminal.js
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { playSound, scrollToBottom, handleCommand, TextFormatter } from '../helpers/terminalHelpers';
import { TERMINAL_INTRO, allCommands } from '../helpers/terminalCommands';
import HackingSimulator from './HackingSimulator';
import '../styles/terminal.css';

const Terminal = () => {
    const [output, setOutput] = useState(TERMINAL_INTRO);
    const [input, setInput] = useState("");
    const [isHacking, setIsHacking] = useState(false); // State to manage hacking simulation
    const terminalRef = useRef(null);
    const inputRef = useRef(null);
    const audioRef = useRef({
        default: new Audio(process.env.PUBLIC_URL + '/assets/audio/type-sound.mp3'),
        unknown: new Audio(process.env.PUBLIC_URL + '/assets/audio/wrong.mp3'),
        clear: new Audio(process.env.PUBLIC_URL + '/assets/audio/clear.mp3')
    });

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    useEffect(() => {
        scrollToBottom(terminalRef);
    }, [output]);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleInput = (e) => {
        if (e.key === 'Enter') {
            const command = input.toLowerCase().trim();
            setInput('');
            if (command === "secret") {
                setIsHacking(true);
                setOutput([]);
            } else if (command === "clear") {
                handleCommand(command, setOutput);
                playSound(audioRef.current.clear);
            } else if (allCommands[command]) {
                handleCommand(command, setOutput);
                playSound(audioRef.current.default);
            } else {
                handleCommand(command, setOutput);
                playSound(audioRef.current.unknown);
            }
            inputRef.current.focus();
        }
    };

    const handleTerminalClick = () => {
        inputRef.current.focus();
    };

    const handleHackingComplete = () => {
        setIsHacking(false);
        scrollToBottom(terminalRef);
        setOutput(TERMINAL_INTRO);
    };

    return (
        <div className="terminal-window">
            <div className="terminal-header">
                <div className="buttons">
                    <div className="button close"></div>
                    <div className="button minimize"></div>
                    <div className="button maximize"></div>
                </div>
                <h1 style={{ color: '#00ff00', fontSize: '1.5em', margin: '0' }}>🥤 kevin_ganem 🥤</h1>
                <h1 style={{ color: '#00ff00', fontSize: '1em', margin: '0' }}>npm start</h1>
            </div>
            <div className="terminal" ref={terminalRef} onClick={handleTerminalClick}>
                {isHacking ? (
                    <HackingSimulator onComplete={handleHackingComplete} />
                ) : (
                    output.map((line, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.1, delay: index * 0.005 }}
                            className={line.includes("Error") ? "error glitch" : ""}
                            style={{ color: typeof line === 'string' && line.includes("Error") ? 'red' : 'green' }}
                        >
                            <TextFormatter text={line} />
                        </motion.p>
                    ))
                )}
                <div style={{ display: 'inline' }}>
                    <span> &gt; {input}</span>
                    <span className="blink-cursor" />
                </div>
            </div>
            <input
                ref={inputRef}
                type="text"
                style={{ opacity: 0, position: 'absolute' }}
                value={input}
                onChange={handleChange}
                onKeyDown={handleInput}
            />
        </div>
    );
};

export default Terminal;