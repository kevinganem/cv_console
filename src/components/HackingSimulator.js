// HackingSimulator.js
import React, { useEffect, useState, useRef } from 'react';
import { playSound } from '../helpers/terminalHelpers';
import '../styles/hackingSimulator.css';

const HackingSimulator = ({ onComplete, noScroll }) => {
    const [output, setOutput] = useState([]);
    const [isAccessDenied, setIsAccessDenied] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [currentPhase, setCurrentPhase] = useState(0);
    const [phaseProgress, setPhaseProgress] = useState(0);
    const terminalRef = useRef(null);
    const outputRef = useRef(null);
    const scrollTimeoutRef = useRef(null);

    const hackingPhases = [
        {
            messages: [
                "Initializing hack sequence...",
                "Establishing secure connection...",
            ],
            duration: 1000
        },
        {
            messages: [
                "Scanning for vulnerabilities...",
                "Analyzing system architecture...",
            ],
            duration: 1000
        },
        {
            messages: [
                "Attempting to bypass firewall...",
                "Injecting payload...",
            ],
            duration: 1000
        },
        {
            messages: [
                "Accessing main database...",
                "Decrypting security layers...",
            ],
            duration: 1000
        },
        {
            messages: [
                "Attempting to override security...",
                "Bypassing encryption...",
            ],
            duration: 1000
        },
        {
            messages: [
                "Accessing core systems...",
                "Extracting sensitive data...",
            ],
            duration: 1000
        }
    ];

    const generateMatrixEffect = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return Array.from({ length: 20 }, () => 
            chars[Math.floor(Math.random() * chars.length)]
        ).join('');
    };

    const scrollToBottom = () => {
        if (terminalRef.current) {
            const { scrollHeight, clientHeight } = terminalRef.current;
            terminalRef.current.scrollTop = scrollHeight - clientHeight;
        }
    };

    useEffect(() => {
        let phaseInterval;
        let matrixInterval;
        let progressInterval;

        const startPhase = (phaseIndex) => {
            if (phaseIndex >= hackingPhases.length) {
                setIsAccessDenied(true);
                return;
            }

            const phase = hackingPhases[phaseIndex];
            let messageIndex = 0;
            setPhaseProgress(0);

            // Start progress bar
            progressInterval = setInterval(() => {
                setPhaseProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(progressInterval);
                        return 100;
                    }
                    return prev + 2;
                });
            }, 20);

            phaseInterval = setInterval(() => {
                if (messageIndex < phase.messages.length) {
                    setOutput(prev => {
                        const newOutput = [...prev, phase.messages[messageIndex]];
                        // Keep only last 50 messages to prevent memory issues
                        return newOutput.slice(-50);
                    });
                    messageIndex++;
                } else {
                    clearInterval(phaseInterval);
                    clearInterval(progressInterval);
                    setCurrentPhase(prev => prev + 1);
                }
            }, phase.duration);
        };

        // Show fewer matrix effects
        if (!isAccessDenied) {
            matrixInterval = setInterval(() => {
                if (Math.random() < 0.3) { // 30% chance to show matrix effect
                    setOutput(prev => {
                        const newOutput = [...prev, generateMatrixEffect()];
                        return newOutput.slice(-50);
                    });
                }
            }, 200);
        }

        startPhase(currentPhase);

        return () => {
            clearInterval(phaseInterval);
            clearInterval(matrixInterval);
            clearInterval(progressInterval);
        };
    }, [currentPhase, isAccessDenied]);

    useEffect(() => {
        if (isAccessDenied) {
            playSound("alarm");
            setOutput([]);
            const accessDeniedMessage = (
                <div className="access-denied">
                    <span className="skull">💀</span>
                    <div className="access-denied-text">
                        <div className="glitch-text">ACCESS DENIED</div>
                        <div className="sub-text">SECURITY PROTOCOLS ACTIVATED</div>
                        <div className="warning-text">INTRUSION DETECTED</div>
                    </div>
                    <span className="skull">💀</span>
                </div>
            );
            setOutput([accessDeniedMessage]);

            // Wait for 4 seconds (alarm sound duration) before showing loading
            setTimeout(() => {
                setIsLoading(true);
            }, 4000);
        }
    }, [isAccessDenied]);

    useEffect(() => {
        if (isLoading) {
            const loadingInterval = setInterval(() => {
                setLoadingProgress(prev => {
                    if (prev < 100) {
                        return prev + 10;
                    } else {
                        clearInterval(loadingInterval);
                        setTimeout(() => {
                            onComplete();
                        }, 500);
                        return 100;
                    }
                });
            }, 100);
        }
    }, [isLoading, onComplete]);

    // Improved scroll handling
    useEffect(() => {
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
        
        scrollTimeoutRef.current = setTimeout(scrollToBottom, 100);
        
        return () => {
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [output]);

    return (
        <div className={`hacking-simulator-container${noScroll ? ' no-scroll' : ''}`}>
            <div className={`hacking-simulator${noScroll ? ' no-scroll' : ''}`} ref={terminalRef}>
                <div className="terminal-content" ref={outputRef}>
                    {output.map((line, index) => (
                        <pre key={index} className={`hacking-line ${typeof line === 'string' && line.includes('ACCESS DENIED') ? 'blink' : ''}`}>
                            {line}
                        </pre>
                    ))}
                </div>
            </div>
            <div className="hacking-controls">
                {!isAccessDenied && currentPhase < hackingPhases.length && (
                    <div className="phase-progress-container">
                        <div className="phase-progress-bar">
                            <div 
                                className="phase-progress" 
                                style={{ width: `${phaseProgress}%` }}
                            ></div>
                        </div>
                        <div className="phase-progress-text">
                            Phase {currentPhase + 1}/{hackingPhases.length} - {phaseProgress}%
                        </div>
                    </div>
                )}
                {isLoading && (
                    <div className="loading-container">
                        <div className="loading-bar">
                            <div className="loading-progress" style={{ width: `${loadingProgress}%` }}></div>
                        </div>
                        <div className="loading-text">System Reset in Progress...</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HackingSimulator;