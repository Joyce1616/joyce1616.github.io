import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "./index.css";
import Home from "../pages/Home/index";
import Nav from "./Common/Nav.js";
import Footer from "./Common/Footer.js";
import SearchResult from "../pages/SearchResult";
import SearchPage from "../pages/SearchPage";
import SearchDetail from "../pages/SearchDetail/index";
import ScrollToTop from "../js/scrollToTop";

const App = () => {
  useEffect(() => { 
    const script = document.createElement("script");
    script.src = "/bootstrap.js";
    script.async = true;
    document.body.appendChild(script);
  }, [])

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Nav/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searchdetail/:itemId/:itemType" element={<SearchDetail />} />
            <Route path="/searchpage/:searchType" element={<SearchPage />} />
            <Route path="/searchresult/:searchType/:keyword" element={<SearchResult />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;