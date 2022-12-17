import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import ApiComp from "./ApiComp.jsx";
import "./index.css";
import HomeContent from "./HomeContent.jsx";
import Nomenclature from "./Nomenclature.jsx";
const App = () => (
  <div className="container w-100 ">
    <Header/>
    <ApiComp app={{name:"Home APP"}}/>
    <Nomenclature/>
    <HomeContent/>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
