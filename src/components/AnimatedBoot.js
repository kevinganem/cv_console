import React, { useState, useEffect } from 'react';
import '../styles/animatedBoot.css';

const BOOT_ART = `
<pre class="ascii-art">
██╗  ██╗███████╗██╗   ██╗██╗███╗   ██╗
██║ ██╔╝██╔════╝██║   ██║██║████╗  ██║
█████╔╝ █████╗  ██║   ██║██║██╔██╗ ██║
██╔═██╗ ██╔══╝  ╚██╗ ██╔╝██║██║╚██╗██║
██║  ██║███████╗ ╚████╔╝ ██║██║ ╚████║
╚═╝  ╚═╝╚══════╝  ╚═══╝  ╚═╝╚═╝  ╚═══╝
 ██████╗  █████╗ ███╗   ██╗███████╗███╗   ███╗
██╔════╝ ██╔══██╗████╗  ██║██╔════╝████╗ ████║
██║  ███╗███████║██╔██╗ ██║█████╗  ██╔████╔██║
██║   ██║██╔══██║██║╚██╗██║██╔══╝  ██║╚██╔╝██║
╚██████╔╝██║  ██║██║ ╚████║███████╗██║ ╚═╝ ██║
 ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝     ╚═╝
</pre>`;

const BOOT_SUBTITLE = `<div class="subtitle">the cool dev</div>`;

const BOOT_LINES = [
  '[OK] Powering up virtual machine...',
  '[OK] Initializing system modules...',
  '[OK] Loading CV database...',
  '[OK] Checking neural net integrity...',
  '[OK] Compiling hacker tools...',
  '[OK] Establishing secure connection...',
  '[OK] Loading secret commands...',
  '[OK] All systems operational.',
];

const AnimatedBoot = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (step < BOOT_LINES.length) {
      const t = setTimeout(() => setStep(step + 1), 950);
      return () => clearTimeout(t);
    } else if (!loading) {
      setLoading(true);
      setTimeout(() => {
        let p = 0;
        const interval = setInterval(() => {
          p += 3;
          setPercent(p);
          if (p >= 100) {
            clearInterval(interval);
            setTimeout(onComplete, 900);
          }
        }, 32);
      }, 600);
    }
  }, [step, loading, onComplete]);

  return (
    <div className="boot-sequence-outer">
      <div className="boot-sequence-inner">
        <div dangerouslySetInnerHTML={{__html: BOOT_ART}} className="ascii-art-container" />
        <div dangerouslySetInnerHTML={{__html: BOOT_SUBTITLE}} />
        <div className="boot-lines">
          {BOOT_LINES.slice(0, step).map((line, i) => (
            <div key={i} className="boot-line">{line}</div>
          ))}
        </div>
        {loading && (
          <div className="boot-loading-bar">
            <div className="boot-loading-progress" style={{width:`${percent}%`}}></div>
          </div>
        )}
        <div className="boot-cursor">
          <span className="blinking-cursor">_</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBoot; 