// HackingSimulator.js
import React, { useEffect, useState, useRef } from 'react';
import '../styles/hackingSimulator.css';

const HackingSimulator = ({ onComplete }) => {
    const [output, setOutput] = useState([]);
    const [isAccessDenied, setIsAccessDenied] = useState(false);
    const terminalRef = useRef(null);

    useEffect(() => {
        const hackingMessages = [
            "Scanning for vulnerabilities...",
            "Bypassing firewall...",
            "Accessing database...",
            "Decrypting files...",
        ];

        let index = 0;

        const interval = setInterval(() => {
            const randomChars = Array.from({ length: 30 }, () => Math.random() < 0.5 ? String.fromCharCode(Math.floor(Math.random() * 26) + 65) : Math.floor(Math.random() * 10)).join('');
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
          const accessDeniedMessage = (
            <div className="access-denied">
                <span className="skull">💀</span>
                ACCESS DENIED
                <span className="skull">💀</span>
            </div>
          );
          setOutput((prev) => [...prev, accessDeniedMessage]);

          setTimeout(() => {
              onComplete();
          }, 5000);
        }
    }, [isAccessDenied, onComplete]);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [output]);

    return (
        <div className="hacking-simulator" ref={terminalRef}>
            {output.map((line, index) => (
                <pre key={index} className={`hacking-line ${line === "ACCESS DENIED" ? 'blink' : ''}`}>{line}</pre>
            ))}
        </div>
    );
};

export default HackingSimulator;