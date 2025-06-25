import React from "react";
import data from "../data.json";

function MoSCoW() {
  const { title, intro, categories } = data.moscow;

  const getColor = (label) => {
    switch (label) {
      case "Must Have":
        return "danger";
      case "Should Have":
        return "warning";
      case "Could Have":
        return "info";
      default:
        return "secondary";
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold mb-4">{title}</h1>
      <p className="text-muted text-center fs-5 mb-5">{intro}</p>

      <div className="row">
        {categories.map((cat, i) => (
          <div className="col-md-6 mb-4" key={i}>
            <div className={`card border-${getColor(cat.label)} shadow-sm`}>
              <div
                className={`card-header bg-${getColor(cat.label)} text-white`}
              >
                <h5 className="mb-0">{cat.label}</h5>
              </div>
              <div className="card-body">
                <p className="card-text text-muted">{cat.description}</p>
                <ul className="mb-0">
                  {cat.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoSCoW;
