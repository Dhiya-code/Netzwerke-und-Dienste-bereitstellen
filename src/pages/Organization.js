import React from "react";
import data from "../data.json";

function Organization() {
  const { title, sections } = data.organization;

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">{title}</h1>

      {sections.map((section, index) => (
        <div
          className="mb-5"
          key={index}
          style={{
            backgroundColor: section.highlighted ? "#f9f9f9" : "transparent",
            padding: section.highlighted ? "2rem" : "0",
          }}
        >
          <h3 className="mb-3">{section.heading}</h3>

          {section.image && (
            <img
              src={section.image}
              alt={section.caption}
              style={{
                maxWidth: section.highlighted ? "800px" : "500px",
                borderRadius: "10px",
                width: "100%",
              }}
            />
          )}

          {section.caption && (
            <p className="text-muted mt-2">{section.caption}</p>
          )}

          {section.TestsMembers && (
            <div className="d-flex justify-content-center gap-5 flex-wrap mt-3">
              {section.TestsMembers.map((member, idx) => (
                <div key={idx} className="text-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginBottom: "10px",
                      border: "3px solid #ccc",
                    }}
                  />
                  <div className="fw-bold">{member.name}</div>
                </div>
              ))}
            </div>
          )}

          {section.tools && (
            <div className="d-flex justify-content-center gap-4 flex-wrap mt-3">
              {section.tools.map((tool, idx) => (
                <div key={idx} className="text-center">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    title={tool.name}
                    style={{ width: "60px", marginBottom: "5px" }}
                  />
                  <div>{tool.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Organization;
