import React, { useMemo, useState } from "react";

const THEMES = [
  {
    title: "Self",
    keywords: ["who am i", "purpose", "meaning", "lost", "identity"],
    questions: [
      "What remains if roles are removed?",
      "What feels true when you are quiet?",
      "What are you avoiding seeing?"
    ],
    accent: "#7c3aed"
  },
  {
    title: "Dharma",
    keywords: ["decision", "duty", "should", "choice", "responsibility"],
    questions: [
      "What is the right action, not the easy one?",
      "Who is affected by this choice?",
      "What responsibility is being avoided?"
    ],
    accent: "#2563eb"
  },
  {
    title: "Karma",
    keywords: ["repeat", "again", "pattern", "stuck", "cycle"],
    questions: [
      "What pattern is repeating?",
      "What triggers this cycle?",
      "What one action can break it?"
    ],
    accent: "#ea580c"
  },
  {
    title: "Mind",
    keywords: ["stress", "anxiety", "fear", "worry", "overthinking"],
    questions: [
      "What is fact and what is projection?",
      "What changes if you pause before reacting?",
      "What are you trying to control that is not yours?"
    ],
    accent: "#059669"
  }
];

function detectTheme(input) {
  const text = input.toLowerCase();
  for (const theme of THEMES) {
    for (const word of theme.keywords) {
      if (text.includes(word)) return theme;
    }
  }
  return THEMES[0];
}

export default function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);

  const currentAccent = useMemo(() => {
    return response?.accent || "#7c3aed";
  }, [response]);

  const handleReflect = () => {
    if (!input.trim()) return;
    setResponse(detectTheme(input));
  };

  const starterPrompts = [
    "I feel lost in life",
    "I do not know what my duty is right now",
    "I keep repeating the same mistakes",
    "My mind is anxious and restless"
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        margin: 0,
        background:
          "linear-gradient(135deg, #f8fafc 0%, #eef2ff 35%, #fdf2f8 100%)",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        color: "#0f172a",
        padding: "32px 20px"
      }}
    >
      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto"
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.7)",
            borderRadius: "24px",
            boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              padding: "40px 32px 24px",
              background: `linear-gradient(135deg, ${currentAccent}18, #ffffff 70%)`
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: "999px",
                background: "#ffffff",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                color: currentAccent,
                marginBottom: "16px",
                boxShadow: "0 6px 20px rgba(15,23,42,0.06)"
              }}
            >
              SANATHANA DHARMA AMA
            </div>

            <h1
              style={{
                fontSize: "46px",
                lineHeight: 1.05,
                margin: "0 0 12px",
                fontWeight: 800
              }}
            >
              A quiet place
              <br />
              for reflection
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.7,
                maxWidth: "720px",
                color: "#475569",
                margin: 0
              }}
            >
              Ask about confusion, purpose, duty, repeated patterns, or inner
              restlessness. The app offers a reflective lens and a small set of
              questions to help you examine yourself more clearly.
            </p>
          </div>

          <div style={{ padding: "28px 32px 36px" }}>
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "20px",
                padding: "20px",
                boxShadow: "0 10px 30px rgba(15,23,42,0.04)"
              }}
            >
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: 700,
                  marginBottom: "10px",
                  color: "#334155"
                }}
              >
                What is alive in you right now?
              </label>

              <textarea
                rows="6"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Example: I feel lost in life and I do not know what I am meant to do next."
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  borderRadius: "16px",
                  border: "1px solid #cbd5e1",
                  padding: "18px",
                  fontSize: "17px",
                  lineHeight: 1.6,
                  outline: "none",
                  resize: "vertical",
                  background: "#f8fafc",
                  color: "#0f172a"
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "14px",
                  marginBottom: "18px"
                }}
              >
                {starterPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => setInput(prompt)}
                    style={{
                      border: "1px solid #e2e8f0",
                      background: "#fff",
                      color: "#334155",
                      borderRadius: "999px",
                      padding: "10px 14px",
                      fontSize: "13px",
                      cursor: "pointer"
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <button
                onClick={handleReflect}
                style={{
                  background: `linear-gradient(135deg, ${currentAccent}, #111827)`,
                  color: "#fff",
                  border: "none",
                  borderRadius: "14px",
                  padding: "14px 22px",
                  fontSize: "16px",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 12px 30px rgba(15,23,42,0.18)"
                }}
              >
                Reflect
              </button>
            </div>

            {response && (
              <div
                style={{
                  marginTop: "26px",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "18px"
                }}
              >
                <div
                  style={{
                    borderRadius: "22px",
                    padding: "22px",
                    background: `linear-gradient(135deg, ${response.accent}, #111827)`,
                    color: "#fff",
                    boxShadow: "0 16px 40px rgba(15,23,42,0.14)"
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      opacity: 0.85,
                      marginBottom: "10px"
                    }}
                  >
                    CURRENT LENS
                  </div>
                  <div
                    style={{
                      fontSize: "34px",
                      fontWeight: 800,
                      marginBottom: "8px"
                    }}
                  >
                    {response.title}
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.7,
                      maxWidth: "720px",
                      color: "rgba(255,255,255,0.9)"
                    }}
                  >
                    Stay with these questions without rushing toward an answer.
                    Clear seeing usually comes before decisive action.
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gap: "16px",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))"
                  }}
                >
                  {response.questions.map((q, i) => (
                    <div
                      key={i}
                      style={{
                        background: "rgba(255,255,255,0.92)",
                        border: "1px solid #e2e8f0",
                        borderRadius: "20px",
                        padding: "20px",
                        boxShadow: "0 10px 30px rgba(15,23,42,0.05)"
                      }}
                    >
                      <div
                        style={{
                          width: "34px",
                          height: "34px",
                          borderRadius: "999px",
                          background: `${response.accent}15`,
                          color: response.accent,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 800,
                          marginBottom: "14px"
                        }}
                      >
                        {i + 1}
                      </div>
                      <div
                        style={{
                          fontSize: "18px",
                          lineHeight: 1.6,
                          fontWeight: 600,
                          color: "#1e293b"
                        }}
                      >
                        {q}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!response && (
              <div
                style={{
                  marginTop: "24px",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "14px"
                }}
              >
                {THEMES.map((theme) => (
                  <div
                    key={theme.title}
                    style={{
                      background: "rgba(255,255,255,0.75)",
                      border: "1px solid #e2e8f0",
                      borderRadius: "18px",
                      padding: "18px"
                    }}
                  >
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: 800,
                        color: theme.accent,
                        marginBottom: "8px"
                      }}
                    >
                      {theme.title}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#475569",
                        lineHeight: 1.6
                      }}
                    >
                      Discover questions through this reflective lens.
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}