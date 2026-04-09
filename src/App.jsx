import React, { useState } from "react";

const THEMES = [
  {
    title: "Self",
    keywords: ["who am i", "purpose", "meaning", "lost"],
    questions: [
      "What remains if roles are removed?",
      "What feels true when you are quiet?",
      "What are you avoiding seeing?"
    ]
  },
  {
    title: "Dharma",
    keywords: ["decision", "duty", "should", "choice"],
    questions: [
      "What is the right action, not the easy one?",
      "Who is affected by this choice?",
      "What responsibility is being avoided?"
    ]
  },
  {
    title: "Karma",
    keywords: ["repeat", "again", "pattern", "stuck"],
    questions: [
      "What pattern is repeating?",
      "What triggers this cycle?",
      "What one action can break it?"
    ]
  },
  {
    title: "Mind",
    keywords: ["stress", "anxiety", "fear"],
    questions: [
      "What is fact vs imagination?",
      "What happens if you pause?",
      "What are you trying to control?"
    ]
  }
];

function detectTheme(input) {
  const text = input.toLowerCase();
  for (let theme of THEMES) {
    for (let word of theme.keywords) {
      if (text.includes(word)) return theme;
    }
  }
  return THEMES[0];
}

export default function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);

  const handleReflect = () => {
    if (!input.trim()) return;
    const theme = detectTheme(input);
    setResponse(theme);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "30px", maxWidth: "800px", margin: "auto" }}>
      <h1>Sanathana Dharma AMA</h1>
      <p>Ask a question about your life, purpose, or confusion.</p>

      <textarea
        rows="5"
        style={{ width: "100%", padding: "10px" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Example: I feel lost in my career"
      />

      <br /><br />

      <button onClick={handleReflect} style={{ padding: "10px 20px" }}>
        Reflect
      </button>

      {response && (
        <div style={{ marginTop: "30px" }}>
          <h2>Lens: {response.title}</h2>
          <p>Reflect on these:</p>
          <ul>
            {response.questions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}