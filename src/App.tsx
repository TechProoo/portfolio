import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Intro } from "./Pages/Intro";
import { Home } from "./Pages/Home";
import { Developers } from "./Pages/Developers";
import { Recruiters } from "./Pages/Recruiters";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="/recruiters" element={<Recruiters />} />
    </Routes>
  );
}

export default App;
