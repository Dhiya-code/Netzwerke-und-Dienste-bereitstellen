import React from "react";
import data from "../data.json";

function Conclusion() {
  const { title, intro, whatWentWell, challenges, learnings, closingNote } =
    data.conclusion;

  const renderList = (items, icon) =>
    items.map((item, idx) => (
      <li key={idx} className="mb-2">
        <span style={{ marginRight: "0.5rem" }}>{icon}</span>
        {item}
      </li>
    ));

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold mb-4">{title}</h1>
      <p className="text-muted text-center fs-5 mb-5">{intro}</p>

      <div className="row mb-4">
        <div className="col-md-4">
          <h5 className="text-success">✅ What Went Well</h5>
          <ul className="list-unstyled">{renderList(whatWentWell, "✔️")}</ul>
        </div>
        <div className="col-md-4">
          <h5 className="text-warning">⚠️ Challenges</h5>
          <ul className="list-unstyled">{renderList(challenges, "🛠️")}</ul>
        </div>
        <div className="col-md-4">
          <h5 className="text-primary">📚 Learnings</h5>
          <ul className="list-unstyled">{renderList(learnings, "💡")}</ul>
        </div>
      </div>

      <div className="text-center mt-4">
        <blockquote className="blockquote text-muted fs-5">
          {closingNote}
        </blockquote>
      </div>
    </div>
  );
}

export default Conclusion;
