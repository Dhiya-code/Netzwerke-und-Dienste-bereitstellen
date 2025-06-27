import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Topology from "./pages/Topology";
import IPPlan from "./pages/IPPlan";
import Config from "./pages/Config";
import Security from "./pages/Security";
import Tests from "./pages/Tests";
import Conclusion from "./pages/Conclusion";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import APIDoc from "./pages/APIDoc";
// import Retrospektive from "./pages/Retrospektive";
import Organization from "./pages/Organization";
import MoSCoW from "./pages/MoSCoW";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Streamline IPv6
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-wrap gap-2">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Organization">
                  Organization
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/topology">
                  Topology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ipplan">
                  IP Plan
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/config">
                  Config
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/security">
                  Security
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Tests">
                  Tests
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/MoSCoW">
                  MoSCoW
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/api-doc">
                  API
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/conclusion">
                  Conclusion
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/retrospektive">
                  Retrospektive
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Organization" element={<Organization />} />
          <Route path="/topology" element={<Topology />} />
          <Route path="/ipplan" element={<IPPlan />} />
          <Route path="/config" element={<Config />} />
          <Route path="/security" element={<Security />} />
          <Route path="/Tests" element={<Tests />} />
          <Route path="/MoSCoW" element={<MoSCoW />} />
          <Route path="/api-doc" element={<APIDoc />} />
          <Route path="/conclusion" element={<Conclusion />} />
          {/* <Route path="/retrospektive" element={<Retrospektive />} /> */}
        </Routes>
      </div>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        &copy; {new Date().getFullYear()} Streamline IPv6 Dokumentation –
        erstellt von DKM Tests
      </footer>
    </Router>
  );
}

export default App;
