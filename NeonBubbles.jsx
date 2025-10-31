import React from "react";
import "./NeonBubbles.css";

const NeonBubbles = () => {
  const bubbles = Array.from({ length: 12 });

  return (
    <div className="bubble-container">
      <h1 className="title">✨ Dream in Code ✨</h1>
      {bubbles.map((_, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            animationDelay: `${i * 0.6}s`,
            left: `${Math.random() * 100}%`,
          }}
        ></span>
      ))}
    </div>
  );
};

export default NeonBubbles;
