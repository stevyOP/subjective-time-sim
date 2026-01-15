# Research Report Draft: Attentional Gate Simulator

## 3. Implementation: The Attentional Gate Simulator

To empirically demonstrate the theoretical elasticity of time perception, we developed a real-time interactive visualization system based on the Attentional Gate Theory (AGT). The system abstracts the cognitive processes of temporal judgment into a **Particle Flow Model**, implemented using a React-based frontend and an HTML5 Canvas rendering engine.

### 3.1. The Computational Metaphor
The simulator maps the abstract psychological components of the AGT to concrete software objects:

1.  **The Pacemaker (Particle Emitter):** The internal biological clock is represented as a stochastic particle emitter. The frequency of emission ($\lambda$) is directly modulated by the user's **Arousal** input ($\alpha$), simulating the increased metabolic rate associated with stress or excitement.
    $$ \lambda \propto \alpha $$

2.  **The Gate (Spatial Filter):** The cognitive filter is visualized as a physical barrier with a variable aperture. The width of this aperture is inversely proportional to the **Task Attention** parameter ($\omega$). High cognitive load "narrows" the gate, physically blocking particles from traversing the screen, thereby simulating the "loss" of temporal awareness during deep focus (Flow States).
    $$ \text{Aperture Width} \propto (1 - \omega)^\beta $$

3.  **The Accumulator (Subjective Clock):** "Subjective Time" is calculated not by the absolute passage of seconds, but by the accumulation of particles that successfully pass through the gate. This creates a visual and mathematical divergence between the *Objective Clock* (linear system time) and the *Subjective Clock* (experienced event density).

### 3.2. Simulation Outcomes
This visual feedback loop allows for the immediate observation of complex temporal phenomena:
*   **Time Dilation (Anxiety):** Under conditions of High Arousal ($\alpha \uparrow$) and Low Attention ($\omega \downarrow$), the screen floods with particles, causing the Subjective Clock to race ahead of real-time.
*   **Time Contraction (Flow):** Under conditions of High Attention ($\omega \uparrow$), the gate becomes nearly impassable. Despite the pacemaker firing, few particles register, causing the Subjective Clock to lag significantly, effectively modeling the phenomenon where "hours feel like minutes."
