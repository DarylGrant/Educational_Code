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
          <Route path="/info/:title" element={<EducationalContainer/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
