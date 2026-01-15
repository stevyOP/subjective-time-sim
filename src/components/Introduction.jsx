
import React from 'react';

const Introduction = ({ onStart }) => {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif', lineHeight: '1.6', color: '#333' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>The Neuroscience of Focus</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>How our brain "grabs onto" reality and distorts time.</p>
      </header>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#007bff' }}>1. The Spotlight: Dorsal Attention Network</h2>
        <p>
          When you decide to focus on something—like reading this text—your brain activates the <strong>Dorsal Attention Network (DAN)</strong>. 
          This network, primarily involving the <em>Parietal Cortex</em> and <em>Frontal Eye Fields</em>, acts like a mental spotlight.
        </p>
        <p>
          It physically orients your sensors (eyes, ears) towards the target and "grabs onto" it, amplifying the signals coming from that specific location 
          while suppressing everything else. This is a "Top-Down" process: <strong>You decide what matters.</strong>
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#007bff' }}>2. The Gatekeeper: The Thalamus</h2>
        <p>
          All sensory information (except smell) must pass through a central hub called the <strong>Thalamus</strong> before it reaches your conscious mind. 
          Crucially, the Thalamus has a "Gate" (the <em>Thalamic Reticular Nucleus</em>).
        </p>
        <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #007bff' }}>
          <strong>The "Gate" Logic:</strong>
          <br/>
          When you are deeply focused, the Prefrontal Cortex tells the Thalamus to <strong>close the gate</strong> to distractions. 
          It literally blocks signals—like the ticking of a clock or the sensation of your chair—from reaching your cortex.
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#007bff' }}>3. The Result: Time Distortion</h2>
        <p>
          This is where Time Perception changes. Our brain estimates time by counting "moments" (neural pulses). 
          When the Thalamic Gate is closed (High Focus), fewer "time pulses" get through to be counted.
        </p>
        <p>
          <strong>The Result:</strong> The world fades away, and 5 hours can feel like 15 minutes. This is the state known as <strong>Flow</strong>.
        </p>
      </section>
    </div>
  );
};

export default Introduction;
