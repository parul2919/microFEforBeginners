import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Main";
import "./index.css";
import Footer from "home/Footer";
import ApiComp from "home/ApiComp";
import ErrorBoundary from "./ErrorBoundaries"
import DetailContent from "./DetailContent";
//making dynamic import to loader useing Lazy & Suspence to ensure if module federation works fine with async loading
const Header = React.lazy(() => import ("home/Header"));

const App = () => (
  <Router>
    <div className="container">
      
      <Suspense fallback={<div>Loading... </div>}>
        <Header />
      </Suspense>
      <p className="bg-dark text-white">Here we have wrapped API Comp with error boundaries class and hence we have Got text "Something went wrong" <br/>and now you will find the errors listing down in console to get fixed</p>
      <ErrorBoundary>
        <ApiComp/>
      </ErrorBoundary>
      <Routes>
        <Route path="/product/:id" element={<DetailContent />} />
      </Routes>
      
      <ErrorBoundary>
        <Footer/>
      </ErrorBoundary>
      
    </div>
  </Router>
  
);
ReactDOM.render(<App />, document.getElementById("app"));
