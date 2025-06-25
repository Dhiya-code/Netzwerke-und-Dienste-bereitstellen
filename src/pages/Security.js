import React from "react";
import data from "../data.json";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";

function Security() {
  const { title, intro, sections } = data.security;

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold mb-4">🔒 {title}</h1>
      <p className="text-muted text-center mb-5 fs-5">{intro}</p>

      {sections.map((block, index) => (
        <div key={index} className="mb-5">
          <h4 className="fw-semibold">{block.label}</h4>
          <p className="text-muted">{block.device}</p>
          <SyntaxHighlighter
            language="cisco"
            style={materialLight}
            customStyle={{
              borderRadius: "8px",
              padding: "1rem",
              fontSize: "0.9rem",
              background: "#f8f9fa",
              boxShadow: "0 0 10px rgba(0,0,0,0.05)"
            }}
          >
            {block.code.join("\n")}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
  );
}

export default Security;
