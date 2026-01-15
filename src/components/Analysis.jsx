
import React from 'react';

const Analysis = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px', fontFamily: 'sans-serif', lineHeight: '1.6', color: '#333' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Data Analysis & Implications</h1>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>Understanding the relationship between cognitive load and temporal distortion.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
        <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ color: '#d9534f' }}>The Anxiety Curve</h3>
          <p>
            <strong>High Arousal + Low Focus</strong>
          </p>
          <p>
            When the pacemaker fires rapidly (stress) but the gate remains open (distraction), the accumulator fills instantly. 
            This results in <strong>Time Expansion</strong>.
          </p>
          <div style={{ height: '100px', background: '#fff', border: '1px solid #eee', marginTop: '10px', display: 'flex', alignItems: 'flex-end', padding: '5px' }}>
            {/* Simple Bar Chart Representation */}
            <div style={{ width: '20%', height: '30%', background: '#d9534f', marginRight: '5%' }}></div>
            <div style={{ width: '20%', height: '50%', background: '#d9534f', marginRight: '5%' }}></div>
            <div style={{ width: '20%', height: '80%', background: '#d9534f', marginRight: '5%' }}></div>
            <div style={{ width: '20%', height: '95%', background: '#d9534f' }}></div>
          </div>
          <small style={{ color: '#999' }}>Subjective Duration vs. Stress Level</small>
        </div>

        <div style={{ background: '#f0f7ff', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ color: '#007bff' }}>The Flow State</h3>
          <p>
            <strong>Moderate Arousal + High Focus</strong>
          </p>
          <p>
            Even with a fast pacemaker, a closed gate blocks the pulses. The accumulator remains empty.
            This results in <strong>Time Contraction</strong>.
          </p>
          <div style={{ height: '100px', background: '#fff', border: '1px solid #eee', marginTop: '10px', display: 'flex', alignItems: 'flex-end', padding: '5px' }}>
             {/* Inverse Relationship */}
            <div style={{ width: '20%', height: '90%', background: '#007bff', marginRight: '5%' }}></div>
            <div style={{ width: '20%', height: '60%', background: '#007bff', marginRight: '5%' }}></div>
            <div style={{ width: '20%', height: '40%', background: '#007bff', marginRight: '5%' }}></div>
            <div style={{ width: '20%', height: '20%', background: '#007bff' }}></div>
          </div>
          <small style={{ color: '#999' }}>Subjective Duration vs. Attention Depth</small>
        </div>
      </div>

      <section>
        <h2>Real World Applications</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '15px', paddingLeft: '20px', borderLeft: '3px solid #ccc' }}>
            <strong>ADHD & Time Blindness:</strong> Understanding that time perception is an <em>active cognitive process</em>, not a passive sense. 
            Therapies can focus on "manual gating" techniques.
          </li>
          <li style={{ marginBottom: '15px', paddingLeft: '20px', borderLeft: '3px solid #ccc' }}>
            <strong>Game Design:</strong> Developers can manipulate the player's sense of time by artificially inducing stress (music tempo) or demanding high focus (precision tasks).
          </li>
          <li style={{ marginBottom: '15px', paddingLeft: '20px', borderLeft: '3px solid #ccc' }}>
            <strong>Productivity:</strong> The "Pomodoro Technique" works because it forces a binary state: 25 minutes of closed gate (Focus), followed by 5 minutes of open gate (Relaxation).
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Analysis;
