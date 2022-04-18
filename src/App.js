import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Milan from "./screens/Milan";
import { Swajal } from "./screens/Swajal";
import About from "./components/About";

import { Achievementss } from "./components/Achievementss";
import Unnati from "./screens/Unnati";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/milan" element={<Milan />} />
        <Route path="/swajal" element={<Swajal />} />
        <Route path="/about" element={<About />} />
        <Route path="/unnati" element={<Unnati />} />
        <Route path="/achievements" element={<Achievementss />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
