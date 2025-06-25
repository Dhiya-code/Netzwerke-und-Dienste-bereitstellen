import React from "react";
import data from "../data.json"; // Assuming data.json is in the src folder

function Home() {
  const { title, subtitle, images, cta } = data.home;

  return (
    <div className="container text-center mt-5">
      <h1>{title}</h1>
      <h4 className="text-muted mb-4">{subtitle}</h4>

      <div className="d-flex flex-wrap justify-content-center gap-4 mb-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            style={{ maxWidth: "300px", borderRadius: "8px" }}
          />
        ))}
      </div>

      <a href="/Organization" className="btn btn-primary">
        {cta}
      </a>
    </div>
  );
}

export default Home;
