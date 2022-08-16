import "./styles.css";

import LandingPage from "./components/landing-page/Landing-page";
import About from "./components/about/About";
import Industries from "./components/Industries/Industries";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/industries" element={<Industries />} />
      </Routes>
      <Footer />
    </div>
  );
}
