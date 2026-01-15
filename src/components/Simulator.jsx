
import React, { useState, useEffect, useRef } from 'react';

const Simulator = ({ onBack }) => {
  // --- STATE ---
  const [arousal, setArousal] = useState(1.0);    // P(t): Pacemaker Rate
  const [taskFocus, setTaskFocus] = useState(0.0); // W(t): Attention Load (Gate Closer)
  
  const [realTime, setRealTime] = useState(0);
  const [mindTime, setMindTime] = useState(0);
  
  // Refs for animation loop
  const canvasRef = useRef(null);
  const lastUpdate = useRef(Date.now());
  const requestRef = useRef();
  
  // Particle System Data
  const particles = useRef([]); // { x, y, speed, color, status }

  // --- LOGIC LOOP ---
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const now = Date.now();
    const dt = (now - lastUpdate.current) / 1000;
    lastUpdate.current = now;

    // 1. CLEAR CANVAS
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, width, height);

    // 2. DRAW GATE (The "Attention" Filter)
    const gateX = width / 2;
    const maxGap = height * 0.9;
    const currentGap = maxGap * Math.pow(1 - taskFocus, 0.5); // Non-linear closure
    const wallHeight = (height - currentGap) / 2;

    ctx.fillStyle = '#444';
    ctx.fillRect(gateX - 5, 0, 10, wallHeight);
    ctx.fillRect(gateX - 5, height - wallHeight, 10, wallHeight);

    // 3. SPAWN PARTICLES (The "Pacemaker")
    const spawnRate = arousal * 5; 
    if (Math.random() < spawnRate * dt) {
      particles.current.push({
        x: 0,
        y: Math.random() * height,
        vx: 150 + (Math.random() * 50),
        status: 'active'
      });
    }

    // 4. UPDATE & DRAW PARTICLES
    particles.current.forEach(p => {
      p.x += p.vx * dt;

      if (p.status === 'active' && p.x > gateX) {
        if (p.y < wallHeight || p.y > (height - wallHeight)) {
          p.status = 'blocked';
          p.vx = -50;
        } else {
          p.status = 'passed';
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      
      if (p.status === 'active') ctx.fillStyle = '#fff';
      else if (p.status === 'blocked') ctx.fillStyle = '#ff4444';
      else ctx.fillStyle = '#00ccff';
      
      ctx.fill();
    });

    particles.current = particles.current.filter(p => p.x < width && p.x > -50);

    // 5. UPDATE CLOCKS
    setRealTime(prev => prev + dt);
    const distortionFactor = arousal * Math.pow(1 - taskFocus, 0.6);
    setMindTime(prev => prev + (dt * distortionFactor));

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [arousal, taskFocus]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 100);
    return `${mins}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: 'auto', color: '#333' }}>
      <h1>Attentional Gate Simulator</h1>
      
      <div style={{ position: 'relative', marginBottom: '20px', border: '4px solid #333', borderRadius: '8px', overflow: 'hidden' }}>
        <canvas ref={canvasRef} width={800} height={300} style={{ display: 'block', width: '100%', background: '#1a1a1a' }} />
        <div style={{ position: 'absolute', top: 10, left: 10, color: 'white', fontSize: '12px' }}>PACEMAKER (Arousal)</div>
        <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', color: 'white', fontSize: '12px' }}>GATE (Attention)</div>
        <div style={{ position: 'absolute', top: 10, right: 10, color: '#00ccff', fontSize: '12px' }}>SUBJECTIVE TIME</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
        <div style={{ background: '#eee', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>OBJECTIVE CLOCK</p>
          <h2 style={{ margin: '5px 0', fontFamily: 'monospace', fontSize: '28px' }}>{formatTime(realTime)}</h2>
        </div>
        <div style={{ background: '#e6f7ff', padding: '15px', borderRadius: '8px', textAlign: 'center', border: '1px solid #91d5ff' }}>
          <p style={{ margin: 0, fontSize: '12px', color: '#007bff' }}>SUBJECTIVE CLOCK</p>
          <h2 style={{ margin: '5px 0', fontFamily: 'monospace', fontSize: '28px', color: '#007bff' }}>{formatTime(mindTime)}</h2>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        <label>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>Arousal / Stress (α)</strong>
            <span>{arousal.toFixed(1)}x</span>
          </div>
          <input 
            type="range" min="0.5" max="5.0" step="0.1" 
            value={arousal} onChange={(e) => setArousal(parseFloat(e.target.value))}
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </label>

        <label>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>Task Attention / Gate Closure (ω)</strong>
            <span>{(taskFocus * 100).toFixed(0)}%</span>
          </div>
          <input 
            type="range" min="0.0" max="0.95" step="0.01" 
            value={taskFocus} onChange={(e) => setTaskFocus(parseFloat(e.target.value))}
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </label>
      </div>
    </div>
  );
};

export default Simulator;
