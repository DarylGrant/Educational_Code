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
          <Route path="/html/info" element={<EducationalContainer />} />
          <Route path="/css/info" element={<EducationalContainer />} />
          <Route path="/js/info" element={<EducationalContainer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
