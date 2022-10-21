import React from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/fonts/fonts.css";
import "react-calendar/dist/Calendar.css";
import "swiper/css";

import GlobalStyle from "./GlobalStyle";
import HomePage from "./pages/HomePage";
import UniversityPlannerPage from "./pages/UniversityPlannerPage";
import SuggestionPage from "./pages/SuggestionPage";
import GoToTop from "./components/GoToTop";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consultant" element={<UniversityPlannerPage />} />
        <Route path="/suggestion" element={<SuggestionPage />} />
      </Routes>
      <GoToTop />
    </>
  );
}

export default App;
