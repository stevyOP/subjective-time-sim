# Attentional Gate Simulator ⏳🧠

> "Why does 5 minutes of deep focus feel like 5 seconds, but 5 minutes of stress feels like an hour?"

This project is my attempt to answer that question using code. It's an interactive visualization of the **Attentional Gate Theory (AGT)**—a psychological model that explains how our brain handles time perception.

### Try the Simulation
(Add your Vercel/Netlify deployment link here if you host it, or just screenshot for now)

## 🎯 The Concept
I've always been fascinated by "Flow States" and how our internal clock is so different from the clock on the wall. 

In this simulation:
*   **The Pacemaker (White Particles):** Represents your biological arousal (Stress/Heart Rate). The more stressed you are, the more "time moments" your brain generates.
*   **The Gate (Gray Wall):** Represents your focus. When you are deeply focused on a task, your Prefrontal Cortex literally "closes the gate" on these time moments.
*   **Subjective Time (Blue Particles):** This is the time you *actually* experience.

## 🛠️ Tech Stack
This was built to learn the intersection of React state management and high-performance Canvas rendering.
*   **React + Vite** for the UI and state logic.
*   **HTML5 Canvas** for the particle physics engine.
*   **Custom Hooks** (`useRef`, `requestAnimationFrame`) to bridge the gap between React's render cycle and the 60FPS animation loop.

## 🚀 How to Run It
1.  Clone the repo:
    ```bash
    git clone https://github.com/stevyOP/subjective-time-sim.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the lab:
    ```bash
    npm run dev
    ```

## 📚 References
*   *Block, R. A., & Zakay, D. (1997). Prospective and retrospective duration judgments.*
*   *Csikszentmihalyi, M. (1990). Flow: The Psychology of Optimal Experience.*

---
*Built with ❤️ (and lots of coffee) by [StevyOP]*
