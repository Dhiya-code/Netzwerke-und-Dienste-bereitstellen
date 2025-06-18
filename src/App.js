import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Topology from "./pages/Topology";
import IPPlan from "./pages/IPPlan";
import Config from "./pages/Config";
import Security from "./pages/Security";
import Team from "./pages/Team";
import Conclusion from "./pages/Conclusion";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |<Link to="/topology">Topology</Link> |
        <Link to="/ipplan">IP Plan</Link> |<Link to="/config">Config</Link> |
        <Link to="/security">Security</Link> |<Link to="/team">Team</Link> |
        <Link to="/conclusion">Conclusion</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topology" element={<Topology />} />
        <Route path="/ipplan" element={<IPPlan />} />
        <Route path="/config" element={<Config />} />
        <Route path="/security" element={<Security />} />
        <Route path="/team" element={<Team />} />
        <Route path="/conclusion" element={<Conclusion />} />
      </Routes>
    </Router>
  );
}
export default App;
