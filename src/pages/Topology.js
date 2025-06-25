import React from "react";
import data from "../data.json";

function Topology() {
  const { title, description, image, locationOverview } = data.topology;

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="mb-3 fw-bold">{title}</h1>
        <p className="text-muted mb-4" style={{ fontSize: "1.1rem" }}>
          {description}
        </p>
        <div className="shadow rounded mb-5" style={{ overflow: "hidden" }}>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: "100%",
              maxWidth: "1000px",
              height: "auto",
              objectFit: "cover",
            }}
            className="img-fluid"
          />
        </div>
      </div>

      <div>
        <h3 className="text-center mb-4">📍 Location Overview</h3>
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Location</th>
                <th>Devices</th>
                <th>VLANs</th>
                <th>Clients / Servers</th>
              </tr>
            </thead>
            <tbody>
              {locationOverview.map((site, index) => (
                <tr key={index}>
                  <td>
                    <strong>{site.location}</strong>
                  </td>
                  <td>{site.devices}</td>
                  <td>{site.vlans}</td>
                  <td>{site.clients}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-muted text-center mt-3">
          Inter-router links use <strong>Unique Local IPv6</strong> (fd00::/8)
          and internal networks use <strong>Global Unicast</strong>{" "}
          (2001:db8::/32).
        </p>
      </div>
    </div>
  );
}

export default Topology;
