import "./App.css";
import AppNavbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import EducationalContainer from "./containers/EducationalContainer";
import QuizContainer from "./containers/QuizContainer";

function App() {
  return (
    <>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/info/:title" element={<EducationalContainer />} />
          <Route path="/test/html" element={<QuizContainer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
