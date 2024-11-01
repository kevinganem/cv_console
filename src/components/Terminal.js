import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { scrollToBottom, handleCommand, TextFormatter } from '../helpers/terminalHelpers';
import { TERMINAL_INTRO } from '../helpers/terminalCommands';
import HackingSimulator from './HackingSimulator';
import '../styles/terminal.css';

const Terminal = () => {
    const [output, setOutput] = useState(TERMINAL_INTRO);
    const [input, setInput] = useState("");
    const [isHacking, setIsHacking] = useState(false);
    const terminalRef = useRef(null);
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSend = () => {
        const command = input.toLowerCase().trim();
        setInput('');
        if (command === "secret") {
            setIsHacking(true);
            setOutput([]);
        } else {
            handleCommand(command, setOutput);
        }
        inputRef.current.focus();
    };

    const handleInput = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    useEffect(() => {
        scrollToBottom(terminalRef);
    }, [output]);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

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
            <div className="terminal" ref={terminalRef} onClick={() => inputRef.current.focus()}>
                {isHacking ? (
                    <HackingSimulator onComplete={() => setIsHacking(false)} />
                ) : (
                    output.map((line, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.1, delay: index * 0.005 }}
                            className={line.includes("Error") ? "error glitch" : ""}
                            style={{ color: line.includes("Error") ? 'red' : 'green' }}
                        >
                            <TextFormatter text={line} />
                        </motion.p>
                    ))
                )}
                <div className="input-container">
                    <span>&gt;</span>
                    <input
                        ref={inputRef}
                        type="text"
                        className="hidden-input"
                        value={input}
                        onChange={handleChange}
                        onKeyDown={handleInput}
                    />
                    <button className="send-button" onClick={handleSend}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Terminal;