import React from "react";
import data from "../data.json";

function IPPlan() {
  const { title, intro, prefixOverview, interfaceAssignments } = data.ipPlan;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 fw-bold">{title}</h1>
      <p className="text-muted text-center mb-5" style={{ fontSize: "1.1rem" }}>
        {intro}
      </p>

      <h3 className="mb-3">📦 Prefix Allocation by VLAN</h3>
      <div className="row">
        {prefixOverview.map((site, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-semibold">{site.location}</h5>
                <ul className="list-group list-group-flush">
                  {site.vlans.map((vlan, i) => (
                    <li className="list-group-item" key={i}>
                      <strong>{vlan.name}:</strong> {vlan.prefix}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-5 mb-3">🔧 Interface Address Assignments</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Device</th>
              <th>Interface</th>
              <th>Role</th>
              <th>IPv6 Address</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {interfaceAssignments.map((intf, index) => (
              <tr key={index}>
                <td>{intf.device}</td>
                <td>{intf.interface}</td>
                <td>{intf.role}</td>
                <td>{intf.address}</td>
                <td>
                  <span
                    className={
                      intf.type === "Global Unicast"
                        ? "badge bg-success"
                        : "badge bg-secondary"
                    }
                  >
                    {intf.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IPPlan;
