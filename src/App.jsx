import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <main style={{ fontFamily: "system-ui", padding: "3rem", textAlign: "center" }}>
      <h1>Agent Playground</h1>
      <p>This is a static React app for testing Open-Inspect's Publish feature.</p>
      <p style={{ fontSize: "2rem", margin: "2rem 0" }}>Counter: {count}</p>
      <button
        style={{ padding: "0.75rem 1.5rem", fontSize: "1rem", cursor: "pointer" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <p style={{ marginTop: "3rem", color: "#666" }}>
        Edit the agent's chat to modify this, then click <strong>Publish</strong>.
      </p>
    </main>
  );
}
