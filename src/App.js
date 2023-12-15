import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingpage";
import Footer from "./components/Footer";
function App() {
  return (
    <div> <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
      <Footer>
      </Footer>
    </Router>
  
    </div>
  );
}

export default App;
