import React from 'react';
import '../styles/popupTerminal.css';

const PopupTerminal = ({ title, content, onClose }) => {
    return (
        <div className="popup-terminal-overlay">
            <div className="popup-terminal">
                <div className="terminal-window">
                    <div className="terminal-header">
                        <div className="buttons">
                            <div className="button close" onClick={onClose}></div>
                            <div className="button minimize"></div>
                            <div className="button maximize"></div>
                        </div>
                        <div className="terminal-title" style={{ flex: 1, textAlign: 'center', color: '#00ff00', fontWeight: 'bold', fontSize: '1.1em' }}>{title}</div>
                        <div className="terminal-right" style={{ color: '#00ff00', fontSize: '1em', fontWeight: 'bold' }}>
                            npm start
                        </div>
                    </div>
                    <div className="terminal">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupTerminal; 