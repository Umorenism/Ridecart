import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

// Components
import AppHeader from "./component/Header";
import Hero from "./component/Hero";
import AboutUs from "./component/About";

import Blog from "./component/Blog";
import Contact from "./component/Contact";
import AppFooter from "./component/Footer";
import Services from "./component/Services";


// const { Content, Footer } = Layout;

export default function App() {
  

  return (
    <div >
       <AppHeader/>
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
       <AppFooter/> 
      
    </div>
  );
}
