import "./App.css";
import AppNavbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import EducationalContainer from "./containers/EducationalContainer";

function App() {
  return (
    <>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/html/info" element={<EducationalContainer topicID = "620639739a18494955e2c5f8" />} />
          <Route path="/css/info" element={<EducationalContainer topicID = "620639739a18494955e2c5f9" />} />
          <Route path="/js/info" element={<EducationalContainer topicID = "620639739a18494955e2c5fa" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
