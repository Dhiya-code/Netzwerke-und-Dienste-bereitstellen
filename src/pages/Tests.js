import React from "react";
import data from "../data.json";

function Tests() {
  const { title, intro, screenshots, testResults } = data.testValidation;

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold mb-4">{title}</h1>
      <p className="text-muted text-center fs-5 mb-5">{intro}</p>

      <h3 className="mb-4">🖼️ Test Snapshots</h3>
      <div className="row">
        {screenshots.map((shot, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <img
                src={shot.image}
                className="card-img-top"
                alt={shot.caption}
              />
              <div className="card-body">
                <h6 className="card-title fw-semibold">{shot.label}</h6>
                <p className="card-text text-muted small">{shot.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-5 mb-3">🧪 Test Matrix</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Test</th>
              <th>✅ Expected</th>
              <th>🛠️ Fix (if needed)</th>
            </tr>
          </thead>
          <tbody>
            {testResults.map((row, i) => (
              <tr key={i}>
                <td>{row.test}</td>
                <td>{row.expected}</td>
                <td>{row.fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tests;
