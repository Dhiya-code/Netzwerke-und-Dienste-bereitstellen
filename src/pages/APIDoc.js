import React from "react";
import data from "../data.json";

function APIDoc() {
  const { title, intro, answers, endpoints } = data.api;

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold mb-4">{title}</h1>
      <p className="text-muted text-center fs-5 mb-5">{intro}</p>

      <h4 className="mb-3">💬 Design Q&A</h4>
      <ul className="list-group mb-5">
        {answers.map((a, index) => (
          <li className="list-group-item" key={index}>
            <strong>{a.question}</strong>
            <br />
            <span className="text-muted">{a.answer}</span>
          </li>
        ))}
      </ul>

      <h4 className="mb-3">📡 API Endpoints</h4>
      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>Method</th>
            <th>Route</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {endpoints.map((ep, index) => (
            <tr key={index}>
              <td>
                <span className="badge bg-primary">{ep.method}</span>
              </td>
              <td>
                <code>{ep.route}</code>
              </td>
              <td>{ep.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default APIDoc;
