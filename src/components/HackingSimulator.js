// HackingSimulator.js
import React, { useEffect, useState, useRef } from 'react';
import { playSound } from '../helpers/terminalHelpers';
import '../styles/hackingSimulator.css';

const HackingSimulator = ({ onComplete }) => {
    const [output, setOutput] = useState([]);
    const [isAccessDenied, setIsAccessDenied] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const terminalRef = useRef(null);
    const audioRef = useRef(new Audio(process.env.PUBLIC_URL + '/assets/audio/alarm.mp3'));

    useEffect(() => {
        const hackingMessages = [
            "Scanning for vulnerabilities...",
            "Bypassing firewall...",
            "Accessing database...",
            "Decrypting files...",
        ];

        let index = 0;

        const interval = setInterval(() => {
            const randomChars = Array.from({ length: 30 }, () => 
                Math.random() < 0.5 ? String.fromCharCode(Math.floor(Math.random() * 26) + 65) : Math.floor(Math.random() * 10)
            ).join('');
            setOutput((prev) => [...prev, randomChars]);

            if (index < hackingMessages.length) {
                setTimeout(() => {
                    setOutput((prev) => [...prev, hackingMessages[index]]);
                    index++;
                }, 2000);
            } else {
                clearInterval(interval);
                setIsAccessDenied(true);
            }
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isAccessDenied) {
            playSound(audioRef);
            const accessDeniedMessage = (
                <div className="access-denied">
                    <span className="skull">💀</span>
                    ACCESS DENIED
                    <span className="skull">💀</span>
                </div>
            );
            setOutput((prev) => [...prev, accessDeniedMessage]);

            setTimeout(() => {
                setIsLoading(true); // Start loading bar after ACCESS DENIED
            }, 3000); // Adjust delay if needed
        }
    }, [isAccessDenied]);

    useEffect(() => {
        if (isLoading) {
            const loadingInterval = setInterval(() => {
                setLoadingProgress((prev) => {
                    if (prev < 100) {
                        return prev + 10;
                    } else {
                        clearInterval(loadingInterval);
                        onComplete(); // Return to the main terminal
                        return 100;
                    }
                });
            }, 500); // Adjust speed of loading progress
        }
    }, [isLoading, onComplete]);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [output, loadingProgress]);

    return (
        <div className="hacking-simulator" ref={terminalRef}>
            {output.map((line, index) => (
                <pre key={index} className={`hacking-line ${line === "ACCESS DENIED" ? 'blink' : ''}`}>{line}</pre>
            ))}
            {isLoading && (
                <div className="loading-bar">
                    <div className="loading-progress" style={{ width: `${loadingProgress}%` }}></div>
                </div>
            )}
        </div>
    );
};

export default HackingSimulator;